import isPlainObject from 'lodash/isPlainObject';

/**
 * Handles errors received from the server. Parses the error into a more useful
 * format, places it in an exception and throws it.
 * See https://www.contentful.com/developers/docs/references/errors/
 * for more details on the data received on the errorResponse.data property
 * and the expected error codes.
 * @private
 * @param {Object} errorResponse - Error received from an axios request
 * @throws {ErrorResponse}
 */
export default function errorHandler(errorResponse) {
  var config = errorResponse.config,
      response = errorResponse.response;

  var errorName = void 0;

  if (!isPlainObject(response) || !isPlainObject(config)) {
    throw errorResponse;
  }

  var data = response.data;


  var errorData = {
    status: response.status,
    statusText: response.statusText,
    message: '',
    details: {}

    // Obscure the Management token
  };if (config.headers && config.headers['Authorization']) {
    var token = '...' + config.headers['Authorization'].substr(-5);
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  if (isPlainObject(config)) {
    errorData.request = {
      url: config.url,
      headers: config.headers,
      method: config.method,
      payloadData: config.data
    };
  }
  if (isPlainObject(data)) {
    if ('requestId' in data) {
      errorData.requestId = data.requestId || 'UNKNOWN';
    }
    if ('message' in data) {
      errorData.message = data.message || '';
    }
    if ('details' in data) {
      errorData.details = data.details || {};
    }
    if ('sys' in data) {
      if ('id' in data.sys) {
        errorName = data.sys.id;
      }
    }
  }

  var error = new Error();
  error.name = errorName && errorName !== 'Unknown' ? errorName : response.status + ' ' + response.statusText;
  error.message = JSON.stringify(errorData, null, '  ');
  throw error;
}
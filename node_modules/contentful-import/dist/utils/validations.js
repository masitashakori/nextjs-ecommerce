'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertDefaultLocale = exports.assertPayload = undefined;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _schema = require('./schema');

var _getEntityName = require('contentful-batch-libs/dist/get-entity-name');

var _getEntityName2 = _interopRequireDefault(_getEntityName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const attachEntityName = (details, payload) => {
  details.map(detail => {
    if (detail.path.length >= 2) {
      detail.entity = (0, _getEntityName2.default)(payload[detail.path[0]][detail.path[1]]);
    }
    return detail;
  });
};
const countInvalidEntities = validationData => {
  const entityCount = validationData.reduce((entities, currentDetail) => {
    if (!entities[currentDetail.path[0]]) {
      entities[currentDetail.path[0]] = 1;
    } else {
      entities[currentDetail.path[0]]++;
    }
    return entities;
  }, {});
  return Object.keys(entityCount).map(key => `${key}:${entityCount[key]}`);
};

const assertPayload = payload => {
  const result = _joi2.default.validate(payload, _schema.payloadSchema, { allowUnknown: true, abortEarly: false });
  if (result.error) {
    attachEntityName(result.error.details, payload);
    const invalidEntityCount = countInvalidEntities(result.error.details).join(', ');
    result.error.message = `${invalidEntityCount} - Get further details in the error log file`;
    delete result.error._object;
    throw result.error;
  }
};

const assertDefaultLocale = (source, destination) => {
  const sourceDefaultLocale = source.locales.find(locale => locale.default === true);
  const destinationDefaultLocale = destination.locales.find(locale => locale.default === true);

  if (!sourceDefaultLocale || !destinationDefaultLocale) {
    return;
  }

  if (sourceDefaultLocale.code !== destinationDefaultLocale.code) {
    throw new Error(`
      Please make sure the destination space have the same default locale as the source\n
      Default locale for source space : ${sourceDefaultLocale.code}\n
      Default locale for destination space: ${destinationDefaultLocale.code}\n
    `);
  }
};

exports.assertPayload = assertPayload;
exports.assertDefaultLocale = assertDefaultLocale;
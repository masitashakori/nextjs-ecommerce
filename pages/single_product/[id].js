import fetch from 'isomorphic-unfetch';
import absoluteUrl from 'next-absolute-url'
import { withRouter } from 'next/router'

const Product = props => ( 
  <div> 
    <section className="module">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-sm-40">
          <a className="gallery" href={`./../static/theme/assets/images/shop/${props.data[0].image}`}>
            <img src={`./../static/theme/assets/images/shop/${props.data[0].image}`} alt={props.data[0].name}/></a>
          <ul className="product-gallery">
            {props.data[0].otherImg.map(img=> {
              return (
                <li><a className="gallery" href=""></a>
                <img src={`./../static/theme/assets/images/shop/${img}`} alt="Single Product"/></li>)
            
              })
            }
          </ul>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="product-title font-alt"> {props.data[0].name}</h1>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-sm-12"><span><i className="fa fa-star star"></i></span>
            <span><i className="fa fa-star star"></i></span>
            <span><i className="fa fa-star star"></i></span>
            <span><i className="fa fa-star star"></i></span>
            <span><i className="fa fa-star star-off"></i></span>
            <a className="open-tab section-scroll" href="#reviews"> - 2 customer reviews</a>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-sm-12">
              <div className="price font-alt"><span className="amount">${props.data[0].price}</span></div>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-sm-12">
              <div className="description">
                <p>{props.data[0].desc}</p>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-sm-4 mb-sm-20">
              <input className="form-control input-lg" type="number" name="" defaultValue="1" max="40" min="1" required="required"/>
            </div>
            <div className="col-sm-8">
              <button 
                  className="snipcart-add-item product__button btn btn-b btn-lg btn-block"
                  data-item-id={props.data[0].id}
                  data-item-name={props.data[0].name}
                  data-item-price={props.data[0].price}
                  data-item-image={`./../static/theme/assets/images/shop/${props.data[0].image}`}
                  data-item-url={props.router.pathname}>
                    <span className="icon-basket">Add To Cart</span>
                </button>
              </div>
          </div>
          <div className="row mb-20">
            <div className="col-sm-12">
              <div className="product_meta">Categories:
                {props.data[0].tags.map( tag => { 
                  return (<a href="#"> {tag}, </a> )}
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-70">
        <div className="col-sm-12">
          <ul className="nav nav-tabs font-alt" role="tablist">
            <li className="active"><a href="#description" data-toggle="tab"><span className="icon-tools-2"></span>Description</a></li>
            <li><a href="#data-sheet" data-toggle="tab"><span className="icon-tools-2"></span>Data sheet</a></li>
            <li><a href="#reviews" data-toggle="tab"><span className="icon-tools-2"></span>Reviews (2)</a></li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="description">
              <p>{props.data[0].desc}</p>
            </div>
            <div className="tab-pane" id="data-sheet">
              <table className="table table-striped ds-table table-responsive">
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Info</th>
                  </tr>
                  <tr>
                    <td>Compositions</td>
                    <td>{props.data[0].composition}</td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>{props.data[0].size}</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Colorful</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>Turkman-Baluch</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tab-pane" id="reviews">
              <div className="comments reviews">
                <div className="comment clearfix">
                  <div className="comment-avatar"><img src="" alt="avatar"/></div>
                  <div className="comment-content clearfix">
                    <div className="comment-author font-alt"><a href="#">John Doe</a></div>
                    <div className="comment-body">
                      <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The European languages are members of the same family. Their separate existence is a myth.</p>
                    </div>
                    <div className="comment-meta font-alt">Today, 14:55 -<span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star-off"></i></span>
                    </div>
                  </div>
                </div>
                <div className="comment clearfix">
                  <div className="comment-avatar"><img src="" alt="avatar"/></div>
                  <div className="comment-content clearfix">
                    <div className="comment-author font-alt"><a href="#">Mark Stone</a></div>
                    <div className="comment-body">
                      <p>Europe uses the same vocabulary. The European languages are members of the same family. Their separate existence is a myth.</p>
                    </div>
                    <div className="comment-meta font-alt">Today, 14:59 -<span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star-off"></i></span><span><i className="fa fa-star star-off"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-form mt-30">
                <h4 className="comment-form-title font-alt">Add review</h4>
                <form method="post">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="sr-only" for="name">Name</label>
                        <input className="form-control" id="name" type="text" name="name" placeholder="Name"/>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="sr-only" for="email">Name</label>
                        <input className="form-control" id="email" type="text" name="email" placeholder="E-mail"/>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <select className="form-control">
                          <option selected="true" disabled="">Rating</option>
                          <option defaultValue="1">1</option>
                          <option defaultValue="2">2</option>
                          <option defaultValue="3">3</option>
                          <option defaultValue="4">4</option>
                          <option defaultValue="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea className="form-control" id="" name="" rows="4" placeholder="Review"></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button className="btn btn-round btn-d" type="submit">Submit Review</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <hr className="divider-w"></hr>
    {/* <section className="module-small">
        <div className="container">
        <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
            <h2 className="module-title font-alt">Related Products</h2>
        </div>
        </div>
        <div className="row multi-columns-row">
        <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="shop-item">
            <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-11.jpg" alt="Accessories Pack"/>
                <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
            </div>
            <h4 className="shop-item-title font-alt"><a href="#">Accessories Pack</a></h4>$9.00
            </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="shop-item">
            <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-12.jpg" alt="Men’s Casual Pack"/>
                <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
            </div>
            <h4 className="shop-item-title font-alt"><a href="#">Men’s Casual Pack</a></h4>$12.00
            </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="shop-item">
            <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-13.jpg" alt="Men’s Garb"/>
                <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
            </div>
            <h4 className="shop-item-title font-alt"><a href="#">Men’s Garb</a></h4>$6.00
            </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="shop-item">
            <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-14.jpg" alt="Cold Garb"/>
                <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
            </div>
            <h4 className="shop-item-title font-alt"><a href="#">Cold Garb</a></h4>$14.00
            </div>
        </div>
        </div>
    </div> 
    </section> */}
  </div>
)


Product.getInitialProps = async (context) => {
  const { id } = context.query;
  const { req } = context
  const { protocol, host } = absoluteUrl(req)
  const apiURL = `${protocol}//${host}`
  const res = await fetch (`${apiURL}/static/api/data.json`);
  const products = await res.json();
  
  return { data : products.filter(product => {
    if (product.id == id) {
      console.log(product.name)
      return product; }
    })
  }
}

export default withRouter(Product)
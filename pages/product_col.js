import react from 'react'

const Product_col = () => (
    <div>
        <section className="module bg-dark-60 shop-page-header" data-background="./static/theme/assets/images/shop/product-page-bg.jpg">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Shop Products</h2>
                <div className="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
          </div>
        </section>
        <section className="module-small">
          <div className="container">
            <form className="row">
              <div className="col-sm-4 mb-sm-20">
                <select className="form-control">
                  <option selected="selected">Default Sorting</option>
                  <option>Popular</option>
                  <option>Latest</option>
                  <option>Average Price</option>
                  <option>High Price</option>
                  <option>Low Price</option>
                </select>
              </div>
              <div className="col-sm-2 mb-sm-20">
                <select className="form-control">
                  <option selected="selected">Woman</option>
                  <option>Man</option>
                </select>
              </div>
              <div className="col-sm-3 mb-sm-20">
                <select className="form-control">
                  <option selected="selected">All</option>
                  <option>Coats</option>
                  <option>Jackets</option>
                  <option>Dresses</option>
                  <option>Jumpsuits</option>
                  <option>Tops</option>
                  <option>Trousers</option>
                </select>
              </div>
              <div className="col-sm-3">
                <button className="btn btn-block btn-round btn-g" type="submit">Apply</button>
              </div>
            </form>
          </div>
        </section>
        <hr className="divider-w"></hr>
        <section className="module-small">
          <div className="container">
            <div className="row multi-columns-row">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="shop-item">
                  <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-7.jpg" alt="Accessories Pack"/>
                    <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
                  </div>
                  <h4 className="shop-item-title font-alt"><a href="#">Accessories Pack</a></h4>£9.00
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="shop-item">
                  <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-8.jpg" alt="Men’s Casual Pack"/>
                    <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
                  </div>
                  <h4 className="shop-item-title font-alt"><a href="#">Men’s Casual Pack</a></h4>£12.00
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="shop-item">
                  <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-9.jpg" alt="Men’s Garb"/>
                    <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
                  </div>
                  <h4 className="shop-item-title font-alt"><a href="#">Men’s Garb</a></h4>£6.00
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="shop-item">
                  <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-10.jpg" alt="Cold Garb"/>
                    <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
                  </div>
                  <h4 className="shop-item-title font-alt"><a href="#">Cold Garb</a></h4>£14.00
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="shop-item">
                  <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-11.jpg" alt="Accessories Pack"/>
                    <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
                  </div>
                  <h4 className="shop-item-title font-alt"><a href="#">Accessories Pack</a></h4>£9.00
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="shop-item">
                  <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-12.jpg" alt="Men’s Casual Pack"/>
                    <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
                  </div>
                  <h4 className="shop-item-title font-alt"><a href="#">Men’s Casual Pack</a></h4>£12.00
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="shop-item">
                  <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-13.jpg" alt="Men’s Garb"/>
                    <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
                  </div>
                  <h4 className="shop-item-title font-alt"><a href="#">Men’s Garb</a></h4>£6.00
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="shop-item">
                  <div className="shop-item-image"><img src="./static/theme/assets/images/shop/product-14.jpg" alt="Cold Garb"/>
                    <div className="shop-item-detail"><a className="btn btn-round btn-b"><span className="icon-basket">Add To Cart</span></a></div>
                  </div>
                  <h4 className="shop-item-title font-alt"><a href="#">Cold Garb</a></h4>£14.00
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="pagination font-alt"><a href="#"><i className="fa fa-angle-left"></i></a><a className="active" href="#">1</a><a href="#">2</a><a href="#">3</a><a href="#">4</a><a href="#"><i className="fa fa-angle-right"></i></a></div>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          .col-sm-offset-3 {
            margin-left: 46%;
          }
        `}</style>
    </div>
)

export default Product_col
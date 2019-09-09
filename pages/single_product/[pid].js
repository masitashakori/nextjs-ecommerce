import fetch from 'isomorphic-unfetch';


const Product = props => {
  const imgSrc = './static/theme/assets/images/shop/' + props.image;
  console.log('props',props)
  console.log('props.url',props.url.query.pid)
  return (
  <div>
    <section className="module">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-sm-40"><a className="gallery" href={imgSrc}><img src={imgSrc} alt="Single Product Image"/></a>
          <ul className="product-gallery">
            <li><a className="gallery" href="./static/theme/assets/images/shop/product-8.jpg"></a><img src="./static/theme/assets/images/shop/product-8.jpg" alt="Single Product"/></li>
            <li><a className="gallery" href="./static/theme/assets/images/shop/product-9.jpg"></a><img src="./static/theme/assets/images/shop/product-9.jpg" alt="Single Product"/></li>
            <li><a className="gallery" href="./static/theme/assets/images/shop/product-10.jpg"></a><img src="./static/theme/assets/images/shop/product-10.jpg" alt="Single Product"/></li>
          </ul>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="product-title font-alt">dd s {props.name}</h1>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-sm-12"><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star-off"></i></span><a className="open-tab section-scroll" href="#reviews">-2customer reviews</a>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-sm-12">
              <div className="price font-alt"><span className="amount">$20.00</span></div>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-sm-12">
              <div className="description">
                <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-sm-4 mb-sm-20">
              <input className="form-control input-lg" type="number" name="" value="1" max="40" min="1" required="required"/>
            </div>
            <div className="col-sm-8"><a className="btn btn-lg btn-block btn-round btn-b" href="#">Add To Cart</a></div>
          </div>
          <div className="row mb-20">
            <div className="col-sm-12">
              <div className="product_meta">Categories:<a href="#"> Man, </a><a href="#">Clothing, </a><a href="#">T-shirts</a>
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
              <p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
              <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
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
                    <td>Jeans</td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>44, 46, 48</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>Somebrand</td>
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
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
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
    <section className="module-small">
        <div classNameName="container">
        <div classNameName="row">
        <div classNameName="col-sm-6 col-sm-offset-3">
            <h2 classNameName="module-title font-alt">Related Products</h2>
        </div>
        </div>
        <div classNameName="row multi-columns-row">
        <div classNameName="col-sm-6 col-md-3 col-lg-3">
            <div classNameName="shop-item">
            <div classNameName="shop-item-image"><img src="./static/theme/assets/images/shop/product-11.jpg" alt="Accessories Pack"/>
                <div classNameName="shop-item-detail"><a classNameName="btn btn-round btn-b"><span classNameName="icon-basket">Add To Cart</span></a></div>
            </div>
            <h4 classNameName="shop-item-title font-alt"><a href="#">Accessories Pack</a></h4>$9.00
            </div>
        </div>
        <div classNameName="col-sm-6 col-md-3 col-lg-3">
            <div classNameName="shop-item">
            <div classNameName="shop-item-image"><img src="./static/theme/assets/images/shop/product-12.jpg" alt="Men’s Casual Pack"/>
                <div classNameName="shop-item-detail"><a classNameName="btn btn-round btn-b"><span classNameName="icon-basket">Add To Cart</span></a></div>
            </div>
            <h4 classNameName="shop-item-title font-alt"><a href="#">Men’s Casual Pack</a></h4>$12.00
            </div>
        </div>
        <div classNameName="col-sm-6 col-md-3 col-lg-3">
            <div classNameName="shop-item">
            <div classNameName="shop-item-image"><img src="./static/theme/assets/images/shop/product-13.jpg" alt="Men’s Garb"/>
                <div classNameName="shop-item-detail"><a classNameName="btn btn-round btn-b"><span classNameName="icon-basket">Add To Cart</span></a></div>
            </div>
            <h4 classNameName="shop-item-title font-alt"><a href="#">Men’s Garb</a></h4>$6.00
            </div>
        </div>
        <div classNameName="col-sm-6 col-md-3 col-lg-3">
            <div classNameName="shop-item">
            <div classNameName="shop-item-image"><img src="./static/theme/assets/images/shop/product-14.jpg" alt="Cold Garb"/>
                <div classNameName="shop-item-detail"><a classNameName="btn btn-round btn-b"><span classNameName="icon-basket">Add To Cart</span></a></div>
            </div>
            <h4 classNameName="shop-item-title font-alt"><a href="#">Cold Garb</a></h4>$14.00
            </div>
        </div>
        </div>
    </div>
    </section>
  </div>
  )
}

const getInitialprops = async (context) => {
  const { id } = context.query;
  console.log(`HELLLO I M HERE ${id}`)
  const res = await fetch (`http://localhost:3000/static/api/data.json/id=${id}`);
  const product = await res.json();

  return { product };
}

export default Product
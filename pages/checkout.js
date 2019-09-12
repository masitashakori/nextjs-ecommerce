import react from 'react'


const Checkout = () => (
  <div>
    <section class="module">
    <div className="container">
        <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
            <h1 className="module-title font-alt">Checkout</h1>
        </div>
        </div>
        <hr className="divider-w pt-20"></hr>
        <div className="row">
        <div className="col-sm-12">
            <table className="table table-striped table-border checkout-table">
            <tbody>
                <tr>
                <th className="hidden-xs">Item</th>
                <th>Description</th>
                <th className="hidden-xs">Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
                </tr>
                <tr>
                <td className="hidden-xs"><a href="#"><img src="assets/images/shop/product-14.jpg" alt="Accessories Pack"/></a></td>
                <td>
                    <h5 className="product-title font-alt">Accessories Pack</h5>
                </td>
                <td className="hidden-xs">
                    <h5 className="product-title font-alt">£20.00</h5>
                </td>
                <td>
                    <input className="form-control" type="number" name="" value="1" max="50" min="1"/>
                </td>
                <td>
                    <h5 className="product-title font-alt">£20.00</h5>
                </td>
                <td className="pr-remove"><a href="#" title="Remove"><i className="fa fa-times"></i></a></td>
                </tr>
                <tr>
                <td className="hidden-xs"><a href="#"><img src="assets/images/shop/product-13.jpg" alt="Men’s Casual Pack"/></a></td>
                <td>
                    <h5 className="product-title font-alt">Men’s Casual Pack</h5>
                </td>
                <td className="hidden-xs">
                    <h5 className="product-title font-alt">£20.00</h5>
                </td>
                <td>
                    <input className="form-control" type="number" name="" value="1" max="50" min="1"/>
                </td>
                <td>
                    <h5 className="product-title font-alt">£20.00</h5>
                </td>
                <td className="pr-remove"><a href="#" title="Remove"><i className="fa fa-times"></i></a></td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-3">
            <div className="form-group">
            <input className="form-control" type="text" id="" name="" placeholder="Coupon code"/>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="form-group">
            <button className="btn btn-round btn-g" type="submit">Apply</button>
            </div>
        </div>
        <div className="col-sm-3 col-sm-offset-3">
            <div className="form-group">
            <button className="btn btn-block btn-round btn-d pull-right" type="submit">Update Cart</button>
            </div>
        </div>
        </div>
    
        <div className="row mt-70">
      <div className="col-sm-5 col-sm-offset-7">
        <div className="shop-Cart-totalbox">
          <h4 className="font-alt">Cart Totals</h4>
          <table className="table table-striped table-border checkout-table">
            <tbody>
              <tr>
                <th>Cart Subtotal :</th>
                <td>£40.00</td>
              </tr>
              <tr>
                <th>Shipping Total :</th>
                <td>£2.00</td>
              </tr>
              <tr className="shop-Cart-totalprice">
                <th>Total :</th>
                <td>£42.00</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-lg btn-block btn-round btn-d" type="submit">Proceed to Checkout</button>
        </div>
      </div>
    </div>
    </div>
    </section> 
  </div>
)

export default Checkout
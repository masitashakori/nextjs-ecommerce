
const Nav = () => (
    <nav className="navbar navbar-custom navbar-fixed-top navbar-transparent" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse">
                <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                <a className="navbar-brand" href="index">MASI</a>
          </div>
          <div className="collapse navbar-collapse" id="custom-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">Shop</a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="product_col">Product Search</a></li>
                  <li><a href="single_product">Single Product</a></li>
                  <li><a href="checkout">Checkout</a></li>
                </ul>
              </li>
              <li className="dropdown"><a className="dropdown-toggle" href="documentation.html" data-toggle="dropdown">Documentation</a>
                <ul className="dropdown-menu">
                  <li><a href="documentation.html#contact">Contact Form</a></li>
                  <li><a href="documentation.html#reservation">Reservation Form</a></li>
                  <li><a href="documentation.html#mailchimp">Mailchimp</a></li>
                  <li><a href="documentation.html#gmap">Google Map</a></li>
                  <li><a href="documentation.html#plugin">Plugins</a></li>
                  <li><a href="documentation.html#changelog">Changelog</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
)

export default Nav
import Link from 'next/link'
import { withRouter } from "next/router"

const Latest = (props) => {
    const imgSrc = './static/theme/assets/images/shop/' + props.imgName
    const imgAlt = props.alt || 'Accessories Pack'
    
    return (
        <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="shop-item">
                <div className="shop-item-image"><img src={imgSrc} alt={imgAlt}/>
                <div className="product__price-button-container">        
                </div>
                <div className="shop-item-detail">
                  <span className="btn-round">
                      <button 
                        className="snipcart-add-item product__button btn btn-b"
                        data-item-id={props.id}
                        data-item-name={props.alt}
                        data-item-price={props.price}
                        data-item-url={props.router.pathname}
                        data-item-image={imgSrc}
                        data-item-description={props.desc}>
                          <span className="icon-basket">
                             Add To Cart </span>
                      </button>
                    </span>
                </div>
            </div>
            <h4 className="shop-item-title font-alt">
              <Link href="/single_product/[id]" as={`/single_product/${props.id}`}>
                <a>{imgAlt}</a>
              </Link>
            </h4>
            {props.price}
            
          </div>
          

        </div>
    )
}

export default withRouter(Latest)
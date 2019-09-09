import React from 'react'
import Head from 'next/head'
import Latest from '../components/latest'
import fetch from 'isomorphic-unfetch'


const Home = props => (
      <div>

        <section className="home-section home-fade home-full-height" id="home">
            <div className="hero-slider">
              <ul className="slides">
                <li className="bg-dark-30 bg-dark shop-page-header slider1">
                  <div className="titan-caption">
                    <div className="caption-content">
                      <div className="font-alt mb-30 titan-title-size-1">New Accessories Collection</div>
                      <div className="font-alt mb-30 titan-title-size-4"> Summer 2019</div>
                      <div className="font-alt mb-40 titan-title-size-1">Your online fashion destination</div>
                      <a className="section-scroll btn btn-border-w btn-round" href="#latest">Learn More</a>
                    </div>
                  </div>
                </li>
                <li className="bg-dark-30 bg-dark shop-page-header slider2">
                  <div className="titan-caption">
                    <div className="caption-content">
                      <div className="font-alt mb-30 titan-title-size-1"> Jewerly Set </div>
                      <div className="font-alt mb-40 titan-title-size-4">Exclusive products</div><a className="section-scroll btn btn-border-w btn-round" href="#latest">Learn More</a>
                    </div>
                  </div>
                </li>
                <li className="bg-dark-30 bg-dark shop-page-header slider3">
                  <div className="titan-caption">
                    <div className="caption-content">
                      <div className="font-alt mb-30 titan-title-size-1"> Summer shoes </div>
                      <div className="font-alt mb-40 titan-title-size-4">Exclusive products</div><a className="section-scroll btn btn-border-w btn-round" href="#latest">Learn More</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        </section>
        <section className="module-small">
          <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-sm-offset-3">
                    <h2 className="module-title font-alt">Latest in Broderies</h2>
                  </div>
                </div>
                <div className="row multi-columns-row">
                  {props.products.map( (product, index) => (
                    <Latest key={`product-${index}`} id={product.id} imgName={product.image} alt={product.name} price={product.price} />
                  ))}
                </div>

                <div className="row mt-30">
                  <div className="col-sm-12 align-center"><a className="btn btn-b btn-round" href="#">See all products</a></div>
                </div>
          </div>
        </section>
        
        <style jsx>{`
          li.slider1 {
            background-image:url(./static/theme/assets/images/shop/slider1.png);
          }
          li.slider2 {
            background-image:url(./static/theme/assets/images/shop/slider2.png);
          }
          li.slider3 {
            background-image:url(./static/theme/assets/images/shop/slider3.png);
          }
        `}</style>

      </div>
)

Home.getInitialProps = async () => {
  const res = await fetch ("http://localhost:3000/static/api/data.json");
  const data = await res.json();
  console.log(`Data is here: ${data.lenght}`)

  return {
    products: data
  }
}

export default Home

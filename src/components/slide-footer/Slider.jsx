import React from 'react'
import OwlCarousel  from 'react-owl-carousel'
import "./slider.css"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import 'owl.carousel/dist/assets/owl.theme.default.css'
import image1 from "../../images/slider-footer-image/pexels-rdne-stock-project-5779816 1 - Copy.png"
import image2 from "../../images/slider-footer-image/pexels-rdne-stock-project-5779816 1.png"
import image3 from "../../images/slider-footer-image/pexels-rdne-stock-project-8963961 1 (1) - Copy.png"
import image4 from "../../images/slider-footer-image/pexels-rdne-stock-project-8963961 1 (1).png"

const Slider = () => {
  return (
    <div className='slider-footer'>
<OwlCarousel
      className="owl-theme" items={4} loop dots>
        <div className="item2">
         <img width={45} height={45} src={image1}/>
        </div>
        <div className="item2">
        <img width={45} height={45} src={image2}/>
        </div>
        <div className="item2">
        <img width={45} height={45} src={image3}/>
        </div>
        <div className="item2">
        <img width={45} height={45} src={image4}/>
        </div>
      </OwlCarousel>
    </div>
  )
}

export default Slider
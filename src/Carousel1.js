import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css';  


import pic1 from './img/carousel_imgs/1.jpg'
import pic2 from './img/carousel_imgs/2.jpg'
import pic3 from './img/carousel_imgs/3.jpg'
import pic4 from './img/carousel_imgs/4.jpg'
import pic5 from './img/carousel_imgs/5.jpg'
import pic6 from './img/carousel_imgs/6.jpg'
import pic7 from './img/carousel_imgs/7.jpg'
import pic8 from './img/carousel_imgs/8.jpg'
import pic9 from './img/carousel_imgs/9.jpg'
import pic10 from './img/carousel_imgs/10.jpg'

var t, a;
function example(e){  
  
  clearTimeout(t);
  var w = e.width;
  if (a) {
  t = setInterval(function () {
  if (w <= 450) clearTimeout(t); // Стили на уменьшение
  e.style.cursor = 'zoom-in';
  e.style.borderRadius = '1px';
  e.style.boxShadow = '2px 2px 5px #fff'
  e.width = w--;
  }, 5);
  }
  else {
  t = setInterval(function () {
  if (w >= 650) clearTimeout(t);
  // Стили на увеличение
  e.style.cursor = 'zoom-out';
  e.style.borderRadius = '5px';
  e.style.boxShadow = '2px 2px 5px #888'
  e.width = w++;
  }, 5);
  }
  a = !a;
  
}

export class OwlCarouselComponent extends Component {  
        render()  
        {  
          return (  
            <div>  
                <div class='container-fluid' >  
                <div className="row title" style={{marginBottom: "20px"}} >
                <div class="col-sm-12 btn btn-info">  
                Owl Carousel In React Application  
                </div>     
                </div>  
                </div>  
            <div class='container-fluid' >    
                <OwlCarousel items={3}  
                className="owl-theme"
                autoplay={true}
                autoplayTimeout={3000}                              
                smartSpeed={1500}
                dotsEach={true} 
                loop  
                nav  
                margin={8} >  
                <div className='carousel_pic_wrapper'><img className="img" src= {pic1} onclick="example(this)"/></div>  
                <div className='carousel_pic_wrapper'><img className="img" src= {pic2} onclick="example(this)"/></div>  
                <div className='carousel_pic_wrapper'><img className="img" src= {pic3} onclick="example(this)"/></div>  
                <div className='carousel_pic_wrapper'><img className="img" src= {pic4} onclick="example(this)"/></div>  
                <div className='carousel_pic_wrapper'><img className="img" src= {pic5} onclick="example(this)"/></div>  
                <div className='carousel_pic_wrapper'><img className="img" src= {pic6} onclick="example(this)"/></div>  
                <div className='carousel_pic_wrapper'><img className="img" src= {pic7} onclick="example(this)"/></div>
                <div className='carousel_pic_wrapper'><img className="img" src= {pic8} onclick="example(this)"/></div>  
                <div className='carousel_pic_wrapper'><img className="img" src= {pic9} onclick="example(this)"/></div> 
                <div className='carousel_pic_wrapper'><img className="img" src= {pic10} onclick="example(this)"/></div> 
            </OwlCarousel>  
            </div>  
        </div> 
          )  
        }  
      }

export default OwlCarouselComponent


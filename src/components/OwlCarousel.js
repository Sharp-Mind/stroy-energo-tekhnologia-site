import React,{Component} from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/./assets/owl.carousel.css'; 
import 'owl.carousel/dist/./assets/owl.theme.default.css'; 
import './owl.css';

import pic1 from './assets/img/1.jpg'
import pic2 from './assets/img/2.jpg'
import pic3 from './assets/img/3.jpg'
import pic4 from './assets/img/4.jpg'
import pic5 from './assets/img/5.jpg'
import pic6 from './assets/img/6.jpg'
import pic7 from './assets/img/7.jpg'
import pic8 from './assets/img/8.jpg'
import pic9 from './assets/img/9.jpg'
import pic10 from './assets/img/10.jpg'
import pic11 from './assets/img/11.jpg'

export class Owldemo1 extends Component {  
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
                <div><img className="img" src= {'./assets/img/img1.jpg'}></img></div>  
                <div><img className="img" src= {pic2}/></div>  
                <div><img className="img" src= {'./assets/img/img4.jpg'}/></div>  
                <div><img className="img" src= {'./assets/img/img3.jpg'}/></div>  
                <div><img className="img" src= {'./assets/img/img5.jpg'}/></div>  
                <div><img className="img" src= {'./assets/img/img6.jpg'}/></div>  
                <div><img className="img" src= {'./assets/img/img7.jpg'}/></div>  
            </OwlCarousel>  
            </div>  
        </div> 
          )  
        }  
      }

export default Owldemo1  


import React, { Component } from 'react'
import carousel_pic_1 from './img/carousel_imgs/1.jpg'
import carousel_pic_2 from './img/carousel_imgs/2.jpg'

export default class BootstrapCarousel_Component extends Component {  
    render() {  
        return ( 
            
            // <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            //     <ol class="carousel-indicators">
            //         <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            //         <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            //         <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            //     </ol>
            //     <div class="carousel-inner" role="listbox">
            //         <div class="carousel-item active">
            //             <img src={carousel_pic_1} alt="First slide"/>
            //         </div>
            //         <div class="carousel-item">
            //             <img src={carousel_pic_1} alt="Second slide"/>
            //         </div>
            //         <div class="carousel-item">
            //             <img src={carousel_pic_2} alt="Third slide"/>
            //         </div>
            //     </div>
            //     <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            //         <span class="icon-prev" aria-hidden="true"></span>
            //         <span class="sr-only">Previous</span>
            //     </a>
            //     <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            //         <span class="icon-next" aria-hidden="true"></span>
            //         <span class="sr-only">Next</span>
            //     </a>
            // </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src={carousel_pic_1} alt="First slide"/>
    </div>
    <div class="carousel-item">
        <img src={carousel_pic_2} alt="First slide"/>
    </div>
    <div class="carousel-item">
        <img src={carousel_pic_1} alt="First slide"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Предыдущий</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Следующий</span>
  </button>
</div>        
        )
    }
}
    
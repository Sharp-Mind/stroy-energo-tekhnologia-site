import React, { Component } from 'react'
import pic1 from '../img/carousel_imgs/1.jpg'
import pic2 from '../img/carousel_imgs/2.jpg'
import pic3 from '../img/carousel_imgs/3.jpg'
import pic4 from '../img/carousel_imgs/4.jpg'
import pic5 from '../img/carousel_imgs/5.jpg'
import pic6 from '../img/carousel_imgs/6.jpg'
import pic7 from '../img/carousel_imgs/7.jpg'
import pic8 from '../img/carousel_imgs/8.jpg'
import pic9 from '../img/carousel_imgs/9.jpg'
import pic10 from '../img/carousel_imgs/10.jpg'

export default class PicsGallery2_component extends Component {
    constructor(props) {
      super(props);    
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };    
    }

    render() {
        return (
            <div className='belt_pic_2'>
                {/* <img className='background_size_pic' src={pic1} alt="" /> */}
                                  
                <img className='moving_gallery_pic gall_pic_1' src={pic1} alt="" />
                <img className='moving_gallery_pic gall_pic_2' src={pic2} alt="" />
                <img className='moving_gallery_pic gall_pic_3' src={pic3} alt="" />
                <img className='moving_gallery_pic gall_pic_4' src={pic4} alt="" />
                <img className='moving_gallery_pic gall_pic_5' src={pic5} alt="" />
                <img className='moving_gallery_pic gall_pic_6' src={pic6} alt="" />
                <img className='moving_gallery_pic gall_pic_7' src={pic7} alt="" />
                <img className='moving_gallery_pic gall_pic_8' src={pic8} alt="" />
                <img className='moving_gallery_pic gall_pic_9' src={pic9} alt="" />
                <img className='moving_gallery_pic gall_pic_10' src={pic10} alt="" />

            </div>
        )

    }

}
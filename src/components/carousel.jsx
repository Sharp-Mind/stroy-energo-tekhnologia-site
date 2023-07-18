import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import MyDialog from './modal_window';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import carousel_pic_1 from '../img/carousel_imgs/1.jpg'
import carousel_pic_2 from '../img/carousel_imgs/2.jpg'
import carousel_pic_3 from '../img/carousel_imgs/3.jpg'
import carousel_pic_4 from '../img/carousel_imgs/4.jpg'
import carousel_pic_5 from '../img/carousel_imgs/5.jpg'
import carousel_pic_6 from '../img/carousel_imgs/6.jpg'
import carousel_pic_7 from '../img/carousel_imgs/7.jpg'
import carousel_pic_8 from '../img/carousel_imgs/8.jpg'
import carousel_pic_9 from '../img/carousel_imgs/9.jpg'
import carousel_pic_10 from '../img/carousel_imgs/10.jpg'
import Item from 'antd/es/list/Item';

const pics = [
    carousel_pic_1, 
    carousel_pic_3,
    carousel_pic_5,
    carousel_pic_6,
    carousel_pic_7,
    carousel_pic_10,
]
const doClick = (itemID) => {console.log(itemID)}

var carousel_params = {
    autoplay: "True",
    width: "75vw",
    centerSP: '50',
    showThumbs: "True"
}
 
if (isMobile) {
   carousel_params.autoplay = "True"        
   carousel_params.width ="100vw"
   carousel_params.centerSP = "100"
   carousel_params.showThumbs = "False"
   
}

export default () => (     
    
    <Carousel 
        autoPlay="True"
        // dynamicHeight='True'
        // centerSlidePercentage='10'
        emulateTouch='True'
        centerMode='True'
        centerSlidePercentage={carousel_params.centerSP}
        infiniteLoop="True"
        width={carousel_params.width}
        transitionTime="2000"
        interval="3000"
        dynamicHeight="True"
        showThumbs={carousel_params.showThumbs}
        // showThumbs="False"     
        // onClickItem={doClick(Item.id)}
        >
            
    
        {pics.map((pic, index) =>(
            <div className='carousel_item'>
                <img alt="" src={pic}/>
            </div>
        ))}

       
    </Carousel>
   
);
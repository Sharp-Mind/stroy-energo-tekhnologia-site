import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import MyDialog from './modal_window';

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

const doClick = (itemID) => {console.log(itemID)}

export default () => (
    <Carousel 
        autoPlay="True"
        // dynamicHeight='True'
        // centerSlidePercentage='10'
        emulateTouch='True'
        centerMode='True'
        centerSlidePercentage='50'
        infiniteLoop="True"
        width="75vw"
        transitionTime="2000"
        interval="3000"
        dynamicHeight="True"
        // onClickItem={doClick(Item.id)}
        >

        <div className='carousel_item'>
            <img alt="" src={carousel_pic_1}/>
            {/* <p className="legend">Legend 1</p> */}
        </div>   

        <div className='carousel_item'>
            <img alt="" src={carousel_pic_3}/>
            {/* <p className="legend">Legend 3</p> */}
        </div>

        <div className='carousel_item'>
            <img alt="" src={carousel_pic_5}/>
            {/* <p className="legend">Legend 5</p> */}
        </div>

        <div className='carousel_item'>
            <img alt="" src={carousel_pic_6}/>
        </div>
        <div className='carousel_item'>
            <img alt="" src={carousel_pic_7}/>
            {/* <p className="legend">Legend 7</p> */}
        </div>

        <div className='carousel_item'>
            <img alt="" src={carousel_pic_10}/>
            {/* <p className="legend">Legend 10</p> */}
        </div>
       
    </Carousel>
);
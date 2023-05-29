import { Carousel } from 'antd';
import carousel_pic_1 from './img/carousel_imgs/1.jpg'
import carousel_pic_2 from './img/carousel_imgs/2.jpg'
import carousel_pic_3 from './img/carousel_imgs/3.jpg'
import carousel_pic_4 from './img/carousel_imgs/4.jpg'

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const Carousel2 = () => (
  <Carousel 
    autoplay="true"
    >
    <div className='slide'>
      
        <img source src={carousel_pic_1} type=""/>
      
    </div>
    <div className='slide'>
     
        <img source src={carousel_pic_2} type=""/>
      
    </div>
    <div className='slide'>
      
        <img source src={carousel_pic_3} type=""/>
      
    </div>
    <div className='slide'>
      
        <img source src={carousel_pic_4} type=""/>
      
    </div>
  </Carousel>
);
export default Carousel2;
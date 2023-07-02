import React, { Component } from 'react'
import moving_pic from '../img/moving_image_2.jpg'

export default class Movingimage_component extends Component {
    // constructor(props) {
    //   super(props);    
    //   this.state = {
    //     error: null,
    //     isLoaded: false,
    //     items: []
    //   };    
    // }

    render() {
        return (
            <div className='belt_pic'>
                <img className='background_size_pic' src={moving_pic} alt="" />                      
                <img className='moving_pic_1' src={moving_pic} alt="" />
                <img className='moving_pic_2' src={moving_pic} alt="" />
                {/* <img className='background_size_pic' src={moving_pic} alt="" /> */}
                
                {/* <div className='belt_pic_div_1'> */}

                    {/* <img src={moving_pic} style="visibility: hidden" alt="" /> */}
                {/* </div> */}
                {/* <div className='belt_pic_div_2'> */}
                    {/* <img src={moving_pic} style="visibility: hidden" alt="" /> */}
                {/* </div> */}
            </div>
        )

    }

}
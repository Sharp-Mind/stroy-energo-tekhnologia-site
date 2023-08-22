import React, { Component } from 'react'
import moving_pic from '../img/background_pic4.png'

export default class Movingimage_component extends Component {  

    render() {
        return (
            <div className='belt_pic'>
                <img className='background_size_pic data-scroll-lock-scrollable' src={moving_pic} alt="" />                      
                <img className='moving_pic_1' src={moving_pic} alt="" />
                <img className='moving_pic_2' src={moving_pic} alt="" />               
            </div>
        )

    }

}
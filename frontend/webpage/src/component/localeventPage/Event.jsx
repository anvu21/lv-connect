import styles from './styles.module.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Event = (props) => {
  
  return (
    <div className="bg-gray-100 text-green-600 text-left rounded-lg my-3">
        <p className='mx-4 py-2'>{props.name}</p>
        <p className='mx-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit cursus risus at ultrices mi. Sed ullamcorper morbi tincidunt ornare massa. Cum sociis natoque penatibus et magnis dis. Blandit cursus risus at ultrices mi tempus imperdiet. Diam phasellus vestibulum lorem sed risus ultricies tristique. Tellus orci ac auctor augue mauris augue neque gravida. Imperdiet nulla malesuada pellentesque elit eget gravida. Venenatis tellus in metus vulputate. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Sed euismod nisi porta lorem mollis aliquam.</p>
        <div className="flex justify-between">
            <p className='m-3'>{props.date}</p>
            <p className='m-3'>{props.location}</p>
            <p className='m-3'>{props.posted}</p>
        </div> 
    </div>
  )
}

export default Event;



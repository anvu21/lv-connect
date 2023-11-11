import styles from './styles.module.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EventComment = (props) => {
  
  return (
    <>
    <div className="bg-gray-100 text-left rounded-lg my-3 ml-10" style={{ color: '#00539b' }}>
        <p className='m-4 py-4 '>{props.content}</p>
        <div className="flex justify-between">
            <p className='m-3'>{props.user}</p>
            <p className='m-3'>{props.date}</p>
        </div> 
    </div>
    
    </>
  )
}

export default EventComment;



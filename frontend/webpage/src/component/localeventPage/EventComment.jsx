import styles from './styles.module.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EventComment = (props) => {
  
  return (
    <>
    <div className="bg-gray-100 text-left rounded-lg my-3 ml-10" style={{ color: '#00539b' }}>
        <p className='mx-4 py-4 '>{props.content}</p>
        <div className="flex justify-between">
            <p className='mx-3 mb-1.5'>{props.user}</p>
            <p className='mx-3 mb-1.5'>{props.date}</p>
        </div> 
    </div>
    
    </>
  )
}

export default EventComment;



import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EventComment from './EventComment';
import Comments from '../../assets/Comments.png';
import AddComment from './AddComment';

const Event = (props) => {
  const [showComments, setShowComments] = useState(false);



  
  return (
    <>
    <div className="bg-gray-100 text-left rounded-lg mt-5 mb-3" style={{ color: '#00539b' }}>
        <p className='mx-4 py-3'>{props.name}</p>
        <p className='mx-7'>{props.description}</p>
        <div className="flex justify-between">
            <p className='m-3'>Date: {props.date}</p>
            <p className='m-3'>{props.location}</p>
            <p className='m-3'>Posted: {props.posted}</p>
        </div> 
    </div>
    </>
  )
}

export default Event;



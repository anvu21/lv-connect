import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BusinessEvent = (props) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [addingComment, setAddingComment] = useState(false);
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  

  const toggleComments = () => {
    setShowComments(!showComments);
  };
 
  return (
    <div className="event-panel bg-gray-100 flex items-center justify-between rounded-lg mt-5 mb-3 p-4">
      <div className="image-container w-1/2 h-full mr-4">
        
          <img
            src={props.image}
            alt="Promotion Image"
            className="w-full h-full object-cover rounded-lg"
          />
        
        
      </div>
      <div className="text-container w-1/2 bg-white bg-opacity-75 rounded-lg p-4">
        <p className="font-bold text-xl mb-2">{props.name}</p>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <p>{props.location}</p>
      </div>
    </div>
  )
}

export default BusinessEvent;



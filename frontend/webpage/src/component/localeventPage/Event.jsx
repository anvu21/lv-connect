import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EventComment from "./EventComment";
import Comments from "../../assets/Comments.png";
import AddComment from "./AddComment";

const Event = (props) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [addingComment, setAddingComment] = useState(false);
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const fetchPosts = async () => {

    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/images/posts/local`, {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });
      const fetchedPosts = response.data;
      //const combinedPosts = [...actors, ...fetchedPosts];
      const sortedPosts = fetchedPosts.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
    
      setPosts(sortedPosts);
      console.log(sortedPosts);

    } catch (error) {
      console.error('Fetching posts failed:', error);
    }
  };

  useEffect(() => {
    fetchPosts();

  }, []);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="event-panel bg-gray-100 flex items-center justify-between rounded-lg mt-5 mb-3 p-4">
      <div className="image-container w-1/2 h-full mr-4">
        {file && (
          <img
            src={file}
            alt="Event Image"
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        {!file && (
          <label htmlFor="fileInput" className="w-full h-full cursor-pointer">
            <input
              type="file"
              id="fileInput"
              onChange={handleChange}
              className="w-full h-full opacity-0 cursor-pointer"
            />
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400">Click to upload an image</span>
            </div>
          </label>
        )}
      </div>
      <div className="text-container w-1/2 bg-white bg-opacity-75 rounded-lg p-4">
        <p className="font-bold text-xl mb-2">{props.name}</p>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <p>{props.location}</p>
      </div>
    </div>
  );
};

export default Event;

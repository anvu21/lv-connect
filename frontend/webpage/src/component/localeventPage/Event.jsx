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

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    setComments([
      {
        id: "1",
        user: "User 1",
        date: "11/09/2023",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc consequat interdum varius sit amet mattis vulputate. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Ut sem nulla pharetra diam sit amet nisl. Massa ultricies mi quis hendrerit dolor magna eget est. Integer eget aliquet nibh praesent tristique. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Vel quam elementum pulvinar etiam. Convallis posuere morbi leo urna. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Tortor vitae purus faucibus ornare. At augue eget arcu dictum varius duis.",
      },
    ]);
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

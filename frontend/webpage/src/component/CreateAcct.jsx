import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AuthPage.css'; // Assuming you have basic CSS for layout
import Navbar from "./Navbar.jsx";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from './styles.module.css';

const CreateAcct = () => {
  const [file, setFile] = useState(null);

  const handleCamera = () => {
    document.getElementById('fileInput').click();
      // Check if the file input has any selected file
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      fileInput.click();
    } else {
      // Display an error message or handle the case when no file is selected from the camera
      console.log("No file selected from the camera.");
    }
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  
    // show a preview of the image
    let preview = document.getElementById('imagePreview');
    preview.src = URL.createObjectURL(e.target.files[0]);
  };

	const [data, setData] = useState({
		
		username: "",
		password: "",
    groupId: "",
    bio: "",
    user_type: "USE"

    
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
	  
	const handleSubmit = async (e) => {
		e.preventDefault();

    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('groupId', 1);
    formData.append('bio', data.bio);
    formData.append('bio', data.user_type);

		try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/signup`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
		  
      

		  navigate("/login");
		  console.log(response.data);
		} catch (error) {
		  if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
		  ) {
			setError(error.response.data.message);
		  }
		}
	};

  
  return (
    <div>
      <div className={styles.screen}>
        <div className='w-full'>
          <Navbar />
        </div>
        

        <div className={styles.signup_box}>
          <div className={styles.signup_text}>Create a new account</div>
          <div className={styles.input_contain}>
            
            <input
              type="text"
              placeholder="New Username"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={styles.enter}
            />
            <input
              type="text"
              placeholder="New Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.enter}
            />
            
            <textarea
              type="text"
              placeholder="Bio"
              name="bio"
              onChange={handleChange}
              value={data.bio}
              className={styles.bio}
            ></textarea>
            <textarea
              type="text"
              placeholder="user_type"
              name="user_type"
              onChange={handleChange}
              value={data.user_type}
              className={styles.bio}
              style={{display:"none"}}
            ></textarea>
            
            {error && <div className={styles.error_msg}>{error}</div>}
            
            <button type="submit" className={styles.signup_btn_pos} onClick={handleSubmit}>
              <div className={styles.signup_btn}>Sign Up</div>  
            </button>  
          </div>

          <button className={styles.acct_btn_pos}>
            <a className={styles.acct_btn} href="/login">Have an account?</a>
          </button>
        </div>
        
      </div>
    </div>
  )
};

export default CreateAcct;
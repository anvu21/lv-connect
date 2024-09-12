import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddVolEvent = (props) => {
    const [data, setData] = useState({ text: "", up_down: "" });

    const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]: input.value });
      console.log(data);
    };
  
    const handleCamera = () => {
      document.getElementById('fileInput').click();
    };
  
    const [imageFile, setImageFile] = useState(null);
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    
      // show a preview of the image
      let preview = document.getElementById('imagePreview');
      preview.src = URL.createObjectURL(e.target.files[0]);
    };

    const submit = async (e) => {
        const text = document.getElementById("text").value;
        const title = document.getElementById("title").value;

        const groupid = "VOL";

        if(title == ""){
            window.alert("Please enter a title");
            return;
        }
        if(text == ""){
            window.alert("Please enter a text");
            return;
        }
        
        //props.setAdd(false);
        const formData = new FormData();
        formData.append('image', file);
        formData.append('text', text);
        formData.append('title', title);
        formData.append('post_type', groupid);

        try {
          const response = await axios.post(`https://vl-connect-4cbc265ba027.herokuapp.com/images/posts/volunteer`, formData, {
            // const response = await axios.post(`${import.meta.env.VITE_APP_SOCKET_URL}/images/upload/v2`, formData, {
              headers: {
                'auth-token': localStorage.getItem('token'),
                'Content-Type': 'multipart/form-data'
              }
            });
              
            setData({ text: ""});
            setFile(null);
            document.getElementById('imagePreview').src = "";
            //fetchPosts();
            window.location.reload()
          } catch (error) {
            console.error(error);
            alert('Could not create post');
          }



    }
    const cancel = () => {
        document.getElementById("text").value = "";
        document.getElementById("title").value = "";

        props.setAdd(false);
    }

    return (
        <>
        <div className='bg-gray-200 m-2'>
            <div className='flex flex-col items-start justify-around'>
                <div className='m-2 w-full flex justify-between'>
                    <label htmlFor="name">Name: *</label>
                    <input required className='mr-5' type="text" id="name" name="name" style={{width:'420px'}}/>
                </div>
                <div className='m-2 w-full flex justify-between'>
                    <label htmlFor="date">Date: *</label>
                    <input required  className='mr-5' type="date" id="date" name="date" style={{width:'420px'}}/>
                </div>
                <div className='m-2 w-full flex justify-between'>
                    <label htmlFor="location">Location: *</label>
                    <input required className='mr-5' type="text" id="location" name="location" style={{width:'420px'}}/>
                </div>
                <div className='m-2 w-full flex justify-between'>
                    <label htmlFor="description">Description: *</label>
                    <textarea required className='mr-5' id="description" name="description" rows="4" cols="50" ></textarea>
                </div>
                <div className='m-2 w-full flex justify-between'>
                    <label htmlFor="image">Image: </label>
                    <input  className='mr-5' id="image" name="image" type="file" accept="image/*" />
                </div>
            </div>
            <button className="m-2 border-black border rounded-md py-1 px-2" id="contentSave" onClick={submit}>Save</button>
            <button className="m-2 border-black border rounded-md py-1 px-2" id="contentSave" onClick={cancel}>Cancel</button>
        </div>
        </>
    )
}
export default AddVolEvent;
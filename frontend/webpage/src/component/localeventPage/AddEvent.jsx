import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEvent = (props) => {
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

        const groupid = "EVE";

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
            const response = await axios.post(`${import.meta.env.VITE_APP_SOCKET_URL}/images/upload/v2`, formData, {
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
                    <label htmlFor="location">Title: *</label>
                    <input required className='mr-5' type="text" id="title" name="title" style={{width:'420px'}}/>
                </div>
                <div className='m-2 w-full flex justify-between'>
                    <label htmlFor="text">text: *</label>
                    <textarea required className='mr-5' id="text" name="text" rows="4" cols="50" ></textarea>
                </div>
                <div className='m-2 w-full flex justify-between'>
                    <label htmlFor="image">Image: </label>
                    <input  className='mr-5' id="image" name="image" type="file" accept="image/*" />
                </div>
            </div>

            
            <button className="m-2 border-black border rounded-md py-1 px-2" id="contentSave" onClick={submit}>Save</button>
            <button className="m-2 border-black border rounded-md py-1 px-2" id="contentSave" onClick={cancel}>Cancel</button>


            <input 
          type="file" 
          id="fileInput" 
          style={{ display: "none" }} // hide the input
          onChange={handleFileChange} // call the function to handle the file when it changes
        />
        <button className="bg-transparent p-1" onClick={handleCamera}>
          <svg className="w-8 h-8 fill-current text-neutral-500 hover:text-neutral-700" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 487">
            <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z
              M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9
              v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z
              M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z
              M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"/>
          </svg>
        </button>
        
      
      
      <div className='flex justify-center items-center'>
        <img id="imagePreview" className="max-h-[400px] mb-1"/>
      </div>


        </div>
        </>
    )
}
export default AddEvent;
import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEvent = (props) => {

    const submit = () => {
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;
        if(name == ""){
            window.alert("Please enter a name");
            return;
        }
        if(date == ""){
            window.alert("Please enter a date");
            return;
        }
        if(description == ""){
            window.alert("Please enter a description");
            return;
        }
        if(location == ""){
            window.alert("Please enter a location");
            return;
        }
        props.setAdd(false);
    }
    const cancel = () => {
        document.getElementById("description").value = "";
        document.getElementById("name").value ="";
        document.getElementById("date").value ="";
        document.getElementById("location").value ="";
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
                    <input required className='mr-5'  type="date" id="date" name="date" style={{width:'420px'}}/>
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
export default AddEvent;
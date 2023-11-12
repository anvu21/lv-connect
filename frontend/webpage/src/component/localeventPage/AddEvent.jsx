import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEvent = () => {

    const submit = () => {
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;
        console.log(name + date);
    }

    return (
        <>
        <div className='bg-gray-200 m-2'>
            <div className='flex flex-col items-start justify-around'>
                <div className='m-2'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div className='m-2'>
                    <label htmlFor="date">Date: </label>
                    <input type="date" id="date" name="date"/>
                </div>
                <div className='m-2'>
                    <label htmlFor="location">Location: </label>
                    <input type="text" id="location" name="location"/>
                </div>
                <div className='m-2'>
                    <label htmlFor="description">Description: </label>
                    <textarea id="description" name="description" rows="4" cols="50" ></textarea>
                </div>
            </div>
            <button className="m-2 border-black border rounded-md py-1 px-2" id="contentSave" onClick={submit}>Save</button>
        </div>
        </>
    )
}
export default AddEvent;
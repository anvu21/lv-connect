import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddComment = (props) => {

    const submit = () => {
        const description = document.getElementById("description").value;
        props.setAdd(false);
    }

    return (
        <>
        <div className='bg-gray-200 m-2'>
            <div className='flex flex-col items-start justify-around'>
                <div className='m-2'>
                    <label htmlFor="description">Comment: </label>
                    <textarea id="description" name="description" rows="4" cols="50" ></textarea>
                </div>
            </div>
            <button className="m-2 border-black border rounded-md py-1 px-2" id="contentSave" onClick={submit}>Save</button>
        </div>
        </>
    )
}
export default AddComment;
import styles from './styles.module.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Event from "./Event.jsx";
import NavBar from "../Navbar.jsx"

const localEvent = () => {
  
 
  
  return (
    <>
      <NavBar />
      <div>
        <h1 className='my-5 text-3xl'>Local Events</h1>
        <Event name="TestName" date="12/13/2023" location="27 Memorial Dr W, Bethlehem, PA 18015"
          posted="12/01/2023"/>
        <Event name="TestName" date="12/13/2023" location="27 Memorial Dr W, Bethlehem, PA 18015"
          posted="12/01/2023"/>
      </div>
    </>
  )
}

export default localEvent;



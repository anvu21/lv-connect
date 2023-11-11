import styles from './styles.module.css';
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Navbar from '..//Navbar';
//import PostBar from '../posts/postBar';
//import actors from '../posts/actors';
import bg from './river.webp';
import Bottombar from '..//Bottombar';

const Main = () => {
   
 
  

  
  return (
    <div className="m-0 p-0">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center" style={{ height: '75vh' }}>
                            <Navbar/>
                            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-6xl font-bold">Lehigh Valley</h1>
        </div>
      </div>
      <Bottombar/>


</div>
  );
}

export default Main;

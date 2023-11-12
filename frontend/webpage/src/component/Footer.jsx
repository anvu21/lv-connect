import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";

const Footer = (props) => {
  
  return (
    <>
    <footer className="flex flex-col justify-around items-center m-0 text-white " style={{position:"absolute", left:0, right:0, backgroundColor:"#00539b"}}>
      <div className='flex content-between justify-between'>
        <h3>Stay Informed</h3>
        <div className="flex">
          <img className='w-6' src={Facebook} alt="facebook" />
          <img className='w-6' src={Twitter} alt="twitter" />
          <img className='w-6' src={Instagram} alt="instagram" />
        </div>
      </div>
      <div className='flex my-8' style={{color:"#00539b"}}>
        <input className='mx-2' required placeholder='Name *' />
        <input className='mx-2' required placeholder='Email *' />
        <input className='mx-2' placeholder='Phone' />
        <button className='rounded-md mx-2 p-1 bg-white'>Subscribe</button>
      </div>
      <div className="flex justify-between items-center  max-w-5xl text-sm">
        <div className="mx-3 my-1">
          <h3 className='text-xl'>Contact Us</h3>
          <p>123 Main Street, Bethlehem, PA 18015</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@lvconnect.com</p>
        </div>
        <div className="mx-3 my-1">
          <h3 className='text-xl'>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/local">Local Events</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/business">Local Businesses</Link></li>
            <li><Link to="/chat">Chat Room</Link></li>
          </ul>
        </div>
        <div className="mx-3 my-1">
            <p>&copy; 2023 LVConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;



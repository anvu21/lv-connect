import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Footer = (props) => {
  
  return (
    <>
    <footer className="bg-gray-200 m-0 flex justify-between items-center" style={{position:"absolute", left:0, right:0}}>
        <div className="mx-3 my-1">
          <h3 className='text-xl'>Contact Us</h3>
          <p>123 Main Street, Lehigh, PA 18001</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@lvconnect.com</p>
        </div>
        <div className="mx-3 my-1">
          <h3 className='text-xl'>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/local">Local Events</Link></li>
            <li><Link to="/">Volunteer</Link></li>
            <li><Link to="/">Local Businesses</Link></li>
            <li><Link to="/">Chat Room</Link></li>
          </ul>
        </div>
        <div className="mx-3 my-1">
            <p>&copy; 2023 LVConnect. All rights reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Footer;



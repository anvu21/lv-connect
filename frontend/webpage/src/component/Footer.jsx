import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Logo from "../assets/Lehigh-valley-connect.png";

const Footer = (props) => {
  const emailRegex = /^(\S+)@(\S+)[.](\w+)$/;

  const phoneNumberCheck = (str) => {
    if(/^\d{3}\-\d{3}\-\d{4}$/.test(str)){ 
      return true;
    }
    if(/^1? ?\d{3} *\d{3} *\d{4}$/.test(str)){
      return true;
    }
    if(/^1?  ?\d{3}\-\d{3}\-\d{4}$/.test(str)){
      return true;
    }
    if(/^1? ?(\(\d{3}\)|\d{3}) ?\d{3}\-\d{4}$/.test(str)){
      return true;
    }
    return false;
  }
  const clearSub = () => {
    const name = document.getElementById('subName');
    const email = document.getElementById('subEmail');
    const phone = document.getElementById('subPhone');
    if(name.value == ""){
      window.alert("Please input a name");
      return;
    }
    if(email.value == ""){
      window.alert("Please enter an email");
      return;
    }
    if(!emailRegex.test(email.value)){
      window.alert("Please input a valid email address");
      return;
    }
    if(phone.value != "" && !phoneNumberCheck(phone.value)){
      window.alert("Invalid phone number");
      return;
    }
    name.value = "";
    email.value = "";
    phone.value = "";
  }
  
  return (
    <>
    <footer className="flex flex-col justify-around items-center m-0 text-white py-5" style={{position:"absolute", left:0, right:0, backgroundColor:"#00539b"}}>
      <div className='flex justify-between py-5 flex-wrap' style={{minWidth:"50vw", maxWidth: "750px"}}>
        <h3 className='text-xl'>Stay Informed</h3>
        <div className="flex">
          <a href="https://www.facebook.com"><img className='w-6 mx-1' src={Facebook} alt="facebook" /></a>
          <a href="https://www.twitter.com"><img className='w-6 mx-1' src={Twitter} alt="twitter" /></a>
          <a href="https://www.instagram.com"><img className='w-6 mx-1' src={Instagram} alt="instagram" /></a>
        </div>
      </div>
      <div className='flex my-8 py-5 flex-wrap' style={{color:"#00539b"}}>
        <input className='mx-2 rounded-md' id="subName" type="text" required placeholder='  Name *' />
        <input className='mx-2 rounded-md' id="subEmail" type="email" required placeholder='  Email *' />
        <input className='mx-2 rounded-md' id="subPhone" type="tel" placeholder='  Phone' />
        <button onClick={clearSub} type='submit' className='rounded-md mx-2 p-1 bg-white text-sm'>Subscribe</button>
      </div>
      <div className="flex justify-between items-center  max-w-5xl text-sm py-10 gap-10">
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
            <li><Link to="/volunteer-opportunities">Volunteer</Link></li>
            <li><Link to="/chat-room">Chat Room</Link></li>
          </ul>
        </div>
        <div className="mx-3 my-1 flex flex-col items-center">
          <img  className="w-24 mb-6" src={Logo} alt="logo" />
            <p>&copy; 2023 LVConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;



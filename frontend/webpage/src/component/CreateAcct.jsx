import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AuthPage.css'; // Assuming you have basic CSS for layout
import Navbar from "./Navbar.jsx";
import { Link } from 'react-router-dom';


const CreateAcct = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const variants = {
    initial: {
      x: isLogin ? 0 : "-50%",
    },
    animate: {
      x: isLogin ? 0 : "-50%",
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <><Navbar />
    <div className="flex justify-center items-center h-screen">
    <div className="max-w-2xl mx-auto ">
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 ">
      <form className="space-y-6" action="#">
        <h3 className="text-xl font-medium text-gray-900 ">Create an account!</h3>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 ">Your email</label>
          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 ">Your password</label>
          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded " required />
          </div>
          <div className="text-sm ml-3">
            <label htmlFor="remember" className="font-medium text-gray-900">Remember me</label>
          </div>
          <a href="#" className="text-sm text-blue-700 hover:underline ml-auto ">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 ">
          Have an account? <a href="#" className="text-blue-700 hover:underline "><Link to="/auth">Log in</Link></a>
        </div>
      </form>
    </div>
  </div>

  </div>
  </>
  );
};

export default CreateAcct;
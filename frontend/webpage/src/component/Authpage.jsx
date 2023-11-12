import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AuthPage.css";
import axios from "axios";

axios.defaults.baseURL = "https://your-api-base-url.com";

const AuthPage = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Spread operator
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        isLogin ? "/signin" : "/signup",
        formData
      );

      // Handle the response, e.g., store user token in state or localStorage
      console.log(response.data);
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-2xl mx-auto ">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 ">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h3 className="text-xl font-medium text-gray-900">
              Sign into your LVConnect account
            </h3> 
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 ">
              Not registered?{" "}
              <a href="/signup" className="text-blue-700 hover:underline ">
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

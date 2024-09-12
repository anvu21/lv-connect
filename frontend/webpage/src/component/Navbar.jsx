import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from './constants';
import logo from '../assets/Lehigh-valley-connect.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const userName = localStorage.getItem('name'); 
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear everything from localStorage
    window.location.reload();
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        
      <div className="flex items-center"> {/* Flex container for logo and text */}
        <img src={logo} alt="logo" className="w-8 h-8 object-contain mr-2"/> {/* Logo with right margin */}
        <div className="text-xl font-bold">
          <Link to="/" style={{ color: '#00539b' }}>LVConnect</Link>
        </div>
      </div>

      <ul className={`flex flex-col md:flex-row md:items-center absolute md:static top-16 w-full md:w-auto bg-white md:bg-transparent transition-all ease-in-out duration-300 ${toggle ? 'left-0' : 'left-[-100%]'}`}>
      {navLinks.map((link) => (
    <li
      key={link.id}
      className={`px-4 py-2 md:py-0 ${active === link.id ? 'text-[#00539b]' : 'text-[#00539b]'}`}
      onClick={() => {
        setActive(link.id);
        setToggle(false); // Close the mobile menu when a link is clicked
      }}
    >
    <Link to={link.path} className="hover:text-blue-600">{link.title}</Link>
        </li>
  ))}
  <li className="px-4 py-2 md:py-0 text-[#00539b]">
            Welcome {userName}
          </li>
          {userName ? ( // Change button to Log Out if userName exists
          <button onClick={handleLogout} className="flex items-center justify-center px-4 py-2 border rounded-full hover:bg-gray-100">
            Log Out
          </button>
        ) : (
          <button className="flex items-center justify-center px-4 py-2 border rounded-full hover:bg-gray-100">  
            <span className="ml-2"><Link to="/auth">Login</Link></span>
          </button>
        )}
</ul>


      <div className="md:hidden cursor-pointer" onClick={handleToggle}>
        <span className="block w-6 h-px mb-1 bg-gray-800"></span>
        <span className="block w-6 h-px mb-1 bg-gray-800"></span>
        <span className="block w-6 h-px bg-gray-800"></span>
      </div>


    </nav>
  );
};

export default Navbar;

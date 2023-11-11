import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from './constants';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold">
          <Link to="/" style={{ color: '#00539b' }}>Lvconnect</Link>
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
        </ul>

        <div className="md:hidden cursor-pointer" onClick={handleToggle}>
          <span className="block w-6 h-px mb-1 bg-gray-800"></span>
          <span className="block w-6 h-px mb-1 bg-gray-800"></span>
          <span className="block w-6 h-px bg-gray-800"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from './constants';
import { IconContext } from 'react-icons';

const Bottombar = () => {
    return (
        <nav className="flex justify-center items-center p-4 bg-white shadow-md">
          <ul className="flex flex-col md:flex-row">
            {navLinks.map((link) => (
              <li key={link.id} className="mx-6 my-2 text-lg md:text-xl flex items-center">
                
                <Link to={link.path} className="hover:text-blue-600">{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      );
    };

export default Bottombar;

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Main from './component/mainpage/Main';
import Local from './component/localeventPage/localEvent';

import Footer from './component/Footer.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
       
        <Routes>
       
          <Route path="/main" element={<Main />}/>
          
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/local" element={<Local />}/>

          
          <Route path="/*" element={<Navigate replace to="/main" />} />

        </Routes>
        <Footer />
      </BrowserRouter>
      

   
    </>


  )
}

export default App

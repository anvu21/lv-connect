import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Main from './component/mainpage/Main';
import Local from './component/localeventPage/localEvent';

import Chat from './component/Chat/chatroom';
import Volunteer from './component/Volunteer/volunteer';
import Auth from './component/login/Authpage';
import CreateAcct from './component/signup/CreateAcct.jsx';

import Footer from './component/Footer.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//          <Route path="/volunteer-opportunities" element={<Volunteer />}/>

  return (
    <>
       
      <BrowserRouter>
       
        <Routes>
       
          <Route path="/main" element={<Main />}/>
          
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/local" element={<Local />}/>
          <Route path="/chat-room" element={<Chat />}/>
          <Route path="/*" element={<Navigate replace to="/main" />} />
          <Route path="/auth" element={<Auth />}/>
          <Route path="/create-account" element={<CreateAcct />}/>


        </Routes>
        <Footer />
      </BrowserRouter>
      

   
    </>


  )
}

export default App

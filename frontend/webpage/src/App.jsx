import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Main from './component/mainpage/Main';
import Local from './component/localeventPage/localEvent';
import Business from './component/Business/business';

import Chat from './component/Chat/chatroom';
import Volunteer from './component/Volunteer/volunteer';
import Auth from './component/Authpage';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <BrowserRouter>
       
        <Routes>
       
          <Route path="/main" element={<Main />}/>
          
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/local" element={<Local />}/>
          <Route path="/local-business-support" element={<Business />}/>
          <Route path="/chat-room" element={<Chat />}/>
          <Route path="/volunteer-opportunities" element={<Volunteer />}/>
          <Route path="/*" element={<Navigate replace to="/main" />} />
          <Route path="/auth" element={<Auth />}/>

        </Routes>
      </BrowserRouter>

    </div>



  )
}

export default App

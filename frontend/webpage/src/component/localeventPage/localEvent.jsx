import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Event from "./Event.jsx";
import NavBar from "../Navbar.jsx"

const localEvent = () => {

  const [events, setEvents] = useState([]);
  useEffect( () => {
    setEvents([...events, {
      "id": "1",
      "name": "TestName",
      "date": "12/13/2023",
      "location": "27 Memorial Dr W, Bethlehem, PA 18015",
      "posted": "11/01/2023"
    },
    {
      "id": "2",
      "name": "TestName2",
      "date": "01/26/2024",
      "location": "730 High St, Easton, PA 1804",
      "posted": "11/10/2023"
    } ]);
  }, []);
  
  
  return (
    <>
      <NavBar />
      <div>
        <h1 className='my-5 text-3xl'>Local Events</h1>
        {
          events.map(event => (
            <Event name={event.name} date={event.date} location={event.location}
              posted={event.posted} key={event.id}/>
          ))
        }
      </div>
    </>
  )
}

export default localEvent;



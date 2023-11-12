import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Event from "./Event.jsx";
import NavBar from "../Navbar.jsx";
import AddEvent from './AddEvent';

const localEvent = () => {

  const [events, setEvents] = useState([]);
  useEffect( () => {
    setEvents([...events, {
      "id": "1",
      "name": "TestName",
      "date": "12/13/2023",
      "location": "27 Memorial Dr W, Bethlehem, PA 18015",
      "posted": "11/01/2023",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci ac auctor augue mauris. In fermentum posuere urna nec tincidunt. A pellentesque sit amet porttitor. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas maecenas pharetra. Habitant morbi tristique senectus et netus et malesuada fames. Condimentum mattis pellentesque id nibh. Mi proin sed libero enim sed faucibus. Amet purus gravida quis blandit turpis cursus. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Eu consequat ac felis donec et odio pellentesque diam. Felis imperdiet proin fermentum leo vel orci."
    },
    {
      "id": "2",
      "name": "TestName2",
      "date": "01/26/2024",
      "location": "730 High St, Easton, PA 1804",
      "posted": "11/10/2023", 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a. Varius sit amet mattis vulputate enim nulla aliquet. Amet mattis vulputate enim nulla aliquet porttitor. Nec nam aliquam sem et tortor. Volutpat lacus laoreet non curabitur. Mattis aliquam faucibus purus in massa tempor nec. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Morbi non arcu risus quis varius quam quisque. Porttitor leo a diam sollicitudin tempor id eu nisl. Malesuada fames ac turpis egestas maecenas pharetra convallis. Faucibus turpis in eu mi bibendum neque."
    } ]);
  }, []);
  
  
  return (
    <>
      <NavBar />
      <div className='w-11/12 flex flex-col' style={{marginLeft:'auto', marginRight:'auto'}}>
        <h1 className='my-5 text-3xl'>Local Events</h1>
        {
          events.map(event => (
            <Event name={event.name} date={event.date} location={event.location}
              posted={event.posted} description={event.description} key={event.id}/>
          ))
        }
        <AddEvent />
      </div>
    </>
  )
}

export default localEvent;



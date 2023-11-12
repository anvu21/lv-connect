import NavBar from "../Navbar.jsx";
import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import VolunteerEvent from "./VolunteerEvent.jsx";
import AddVolEvent from "./AddVolEvent.jsx";

const Volunteer = () => {

    const [events, setEvents] = useState([]);

    const [addEvent, setAddEvent] = useState(false);

    useEffect( () => {
        setEvents([...events, {
        "id": "1",
        "name": "Thanksgiving Volunteering at Trinity Soup Kitchen",
        "date": "11/25/2023",
        "location": "75 E Market Street, Bethlehem, PA 18018",
        "posted": "11/01/2023",
        "description": "Come give back at the soup kitchen! Spend your holidays helping those who need. We will be serving and cooking food and cleaning up."
        },
        {
        "id": "2",
        "name": "Trash cleanup at the Lehigh River",
        "date": "11/19/2024",
        "location": "730 High St, Easton, PA 1804",
        "posted": "11/10/2023", 
        "description": "Meet at the Lehigh River, we have a goal to collect >= 10 lbs of trash."
        },
        {
          "id": "3",
          "name": "Volunteer after-school tutor for elementary school students",
          "date": "11/21/2023",
          "location": "730 High St, Easton, PA 1804",
          "posted": "11/15/2023", 
          "description": "The Caring Place Youth Development Center is looking for a high-school or college student willing to read to and tutor elementary school students.",
        } ]);
    }, []);


    return (
        <>
        <NavBar />
        <div className="w-11/12 flex flex-col items-center" style={{marginLeft:'auto', marginRight:'auto'}}>
            <h1 className='my-5 text-3xl'>Volunteer Opportunities</h1>
            {addEvent && 
              <AddVolEvent setAdd={setAddEvent} />
            }
            {!addEvent && 
              <>
                <button className='rounded-md mx-2 my-1 p-1 border border-black w-48' onClick={() => setAddEvent(true)}>Add an Opportunity</button>
              </>
            }
            {
              events.map(event => (
                <VolunteerEvent name={event.name} date={event.date} location={event.location}
                  posted={event.posted} description={event.description} key={event.id}/>
              ))
            }
        </div>
        </>
    )
}
export default Volunteer;
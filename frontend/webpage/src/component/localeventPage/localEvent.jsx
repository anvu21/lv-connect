import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Event from "./Event.jsx";
import NavBar from "../Navbar.jsx";
import AddEvent from './AddEvent';

const localEvent = () => {

  const [events, setEvents] = useState([]);

  const [addEvent, setAddEvent] = useState(false);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {

    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/images/posts/local`, {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });
      const fetchedPosts = response.data;
      //const combinedPosts = [...actors, ...fetchedPosts];
      const sortedPosts = fetchedPosts.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
    
      setEvents(sortedPosts);
      console.log(sortedPosts);

    } catch (error) {
      console.error('Fetching posts failed:', error);
    }
  };

  useEffect(() => {
    fetchPosts();

  }, []);

  /* {
      "id": "1",
      "name": "Karaoke Night",
      "date": "12/13/2023",
      "location": "27 Memorial Dr W, Bethlehem, PA 18015",
      "posted": "11/01/2023",
      "description": "Karaoke night at the local bar. Come join us for a night of fun and singing."
    },
    {
      "id": "2",
      "name": "Lehigh Lafayette Game",
      "date": "11/18/2023",
      "location": "Goodman Stadium, Lehigh University",
      "posted": "11/10/2023", 
      "description": "The 158th meeting of Lehigh and Lafayette. Come cheer on your school in the oldest rivalry in college football",
    } ]);
  }, []);
  */
  
  return (
    <>
      <NavBar />
      <div className='w-11/12 flex flex-col items-center' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <h1 className='my-5 text-3xl'>Local Events</h1>
        {addEvent &&
          <AddEvent setAdd={setAddEvent} />
        }
        {!addEvent &&
          <>
            <button className='rounded-md mx-2 my-1 p-1 border border-black w-40' onClick={() => setAddEvent(true)}>Add an Event</button>
          </>
        }
        {
          events.map(event => (
            <div key={event.id} className="w-full mb-4">
              <Event name={event.title} date={event.created_at} 
                posted={event.created_at} description={event.content}
                image={event.imageUrl} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default localEvent;



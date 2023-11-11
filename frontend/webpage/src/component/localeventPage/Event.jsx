import styles from './styles.module.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EventComment from './EventComment';
import Comments from './Comments.png';

const Event = (props) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  }
  return (
    <>
    <div className="bg-gray-100 text-left rounded-lg my-3" style={{ color: '#00539b' }}>
        <p className='mx-4 py-3'>{props.name}</p>
        <p className='mx-7'>{props.description}</p>
        <img src={Comments} onClick={toggleComments} className='w-5 cursor-pointer'/>
        <div className="flex justify-between">
            <p className='m-3'>Date: {props.date}</p>
            <p className='m-3'>{props.location}</p>
            <p className='m-3'>Posted: {props.posted}</p>
        </div> 
    </div>
    { showComments &&
        <EventComment user="User 1" date="11/09/2023" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc consequat interdum varius sit amet mattis vulputate. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Ut sem nulla pharetra diam sit amet nisl. Massa ultricies mi quis hendrerit dolor magna eget est. Integer eget aliquet nibh praesent tristique. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Vel quam elementum pulvinar etiam. Convallis posuere morbi leo urna. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Tortor vitae purus faucibus ornare. At augue eget arcu dictum varius duis."/>
    }
    </>
  )
}

export default Event;



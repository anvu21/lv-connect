import React from 'react';

const VolunteerEvent = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6" style={{ width: '600px' }}>
      <h2 className="text-2xl font-bold mb-4">{props.name}</h2>
      <p className="text-gray-600 mb-4">{props.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-blue-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
          <p className="text-gray-700">Date: {props.date}</p>
        </div>
        <p className="text-gray-700">{props.location}</p>
        <p className="text-gray-700">Posted: {props.posted}</p>
      </div>
    </div>
  );
}

export default VolunteerEvent;

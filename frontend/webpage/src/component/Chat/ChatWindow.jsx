import styles from './styles.module.css';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import io from 'socket.io-client';
import axios from "axios";

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socket = useRef(null);
  const chatWindowRef = useRef(null);
  const user = localStorage.getItem('name');

  useEffect(() => {
    // Set up the socket connection
    socket.current = io(`${import.meta.env.VITE_APP_SOCKET_URL}`, {
      path: '/ws',
      query: { token: localStorage.getItem('token') },
    });

    // Fetch historic messages when the component mounts
    //fetchMessages();

    
    socket.current.emit('join conversation');

    socket.current.emit('fetch old messages');

    socket.current.on('old messages', (oldMessages) => {
      // Transform oldMessages to match the structure of the messages state
      const transformedMessages = oldMessages.map(message => ({
        id: message.id,
        content: message.content,
        sender: message.username,
        timestamp: new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }));
    
      // Set the messages state to the transformed old messages
      setMessages(transformedMessages);
    });
    socket.current.on('chat message', (newMessage) => {
      const transformedMessage = {
        id: newMessage.id, // Make sure newMessage has an id
        content: newMessage.content,
        sender: newMessage.sender_name, // Assuming the server sends sender_name
        timestamp: new Date(newMessage.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prevMessages) => [...prevMessages, transformedMessage]);
    });

    socket.current.on('connect_error', (err) => {
      console.error('connection error:', err.message);
    });

    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat window when new messages are added
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    const newMessage = {
      content: message,
      sender: user
    };

    socket.current.emit('chat message', newMessage);
    setMessage(''); // Clear the input field after sending
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const fetchMessages = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_APP_SOCKET_URL}/lvconnect/messages`); // Use environment variable for the URL
        if (response.ok) {
            const data = await response.json();
            setMessages(data);
        } else {
            console.error('Failed to fetch messages:', response.statusText);
        }
    } catch (error) {
        console.error('An error occurred while fetching messages:', error);
    }
};

  return (
    <div className="h-full p-4" style={{ width: '100vw', backgroundColor: '#f5f7fa' }}>
      <div className="h-full bg-white border border-gray-300 rounded shadow-md">
        <div className="p-4 flex flex-col h-full">
          <h1 className="text-3xl font-bold mb-4 border-b border-gray-300 text-gray-800">Community Forum</h1>
          <div className="flex-grow overflow-y-auto" ref={chatWindowRef}>
            {/* Messages */}
            <div className="flex flex-col space-y-4 px-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col items-${msg.sender === user ? 'end' : 'start'}`}
                >
                  <div
                    className={`${
                      msg.sender === user
                        ? 'bg-blue-100 text-blue-800 rounded-t-lg rounded-bl-lg items-end break-all'
                        : 'bg-gray-200 text-gray-800 rounded-t-lg rounded-br-lg items-start break-all'
                    } py-2 px-4 max-w-x1 shadow-md text-left`}
                  >
                    {msg.content}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    {msg.sender} - {msg.timestamp}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none"
              placeholder="Tell us your thoughts..."
              value={message}
              onChange={handleMessageChange}
              onKeyPress={handleKeyPress}
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded focus:outline-none hover:bg-teal-600"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

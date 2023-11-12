import styles from './styles.module.css';
import React, { useState, useEffect, useRef,useMemo  } from 'react';
import io from 'socket.io-client';

const ChatWindow = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const socket = useRef(null);
    const chatWindowRef = useRef(null);
    const user = localStorage.getItem('name');
    const conversationId = useMemo(() => 'general', []); // Set a constant conversationId for the general conversation
  
    useEffect(() => {
      // set the current reference to the socket connection
      socket.current = io(`${import.meta.env.VITE_APP_SOCKET_URL}`, {
        path: '/ws',
        query: { token: localStorage.getItem('token') }
      });
  
      // Join the conversation room
      socket.current.emit('join conversation', conversationId);
  
      socket.current.on('old messages', (oldMessages) => {
        // Transform oldMessages to match the structure of the messages state
        const transformedMessages = oldMessages.map(message => ({
          id: message.id,
          content: message.content,
          sender: message.sender_name,
          receiver_name: 'General', // Set the receiver_name for the general conversation
          timestamp: new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }));
  
        // Set the messages state to the transformed old messages
        setMessages(transformedMessages);
      });
  
      socket.current.on('chat message', (msg) => {
        console.log('received a message:', msg);
        socket.current.emit('fetch old messages', { group_id: localStorage.getItem('groupID'), receiver_name: 'General', user_id: localStorage.getItem('userID') });
      });
  
      socket.current.on('connect_error', (err) => {
        console.error('connection error:', err.message);
      });
  
      socket.current.emit('fetch old messages', { group_id: localStorage.getItem('groupID'), receiver_name: 'General', user_id: localStorage.getItem('userID') });
  
      return () => {
        if (socket.current) {
          socket.current.close();
        }
      };
    }, [conversationId]);
  
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
          sender: localStorage.getItem('name'),
          // Add any other relevant message properties
        };
      
        try {
          const response = await fetch('http://your-backend-url/api/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any necessary headers, such as authentication tokens
            },
            body: JSON.stringify(newMessage),
          });
      
          if (!response.ok) {
            // Handle errors, maybe show an error message to the user
            console.error('Failed to post message:', response.statusText);
          } else {
            // Clear the input field after successful post
            setMessage('');
            console.log('Message posted successfully');
          }
        } catch (error) {
          console.error('An error occurred while posting the message:', error);
        }
    };
      

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevents the default Enter key behavior (e.g., newline in a textarea)
          handleSendMessage();
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
                    {messages.slice().map((msg) => (
                        <div
                        key={msg.id}
                        className={`flex flex-col items-${msg.sender === user ? 'end' : 'start'}`}
                        >
                        <div
                            className={`${
                            msg.sender === user
                                ? 'bg-blue-100 text-blue-800 rounded-t-lg rounded-bl-lg items-end break-all'
                                : 'bg-gray-200 text-gray-800 rounded-t-lg rounded-br-lg items-start break-all'
                            } py-2 px-4 custom-message-width shadow-md text-left`}
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
  
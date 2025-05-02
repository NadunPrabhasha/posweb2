// src/components/User.js
import React, { useState } from 'react';
import Slideshow from "./Slideshow";
import ChatBot from "./ChatBot";
import chatbotIcon from '../assets/images/chatboticon.png';
import '../assets/styles/Dashboard.css';

function User() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="dashboard">
      <Slideshow />

      <img
        src={chatbotIcon}
        alt="Chatbot Icon"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          zIndex: 999,
        }}
        onClick={toggleChat}
      />

      {showChat && <ChatBot />}
    </div>
  );
}

export default User;

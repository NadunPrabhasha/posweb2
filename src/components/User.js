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

      {/* Chatbot Icon in bottom-right corner */}
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
          zIndex: 1000,
        }}
        onClick={toggleChat}
      />

      {/* Chatbot Interface appears above the icon, from the right */}
      {showChat && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',     // Appears just above the icon
            right: '20px',
            zIndex: 1000,
          }}
        >
          <ChatBot />
        </div>
      )}
    </div>
  );
}

export default User;

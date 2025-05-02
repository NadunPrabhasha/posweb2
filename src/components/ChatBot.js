// src/components/ChatBot.js
import React, { useState } from 'react';
import '../assets/styles/ChatBot.css'; // Make sure this file exists

const defaultQuestions = [
  "What is a CPU?",
  "What does RAM do?",
  "What is a GPU?",
  "How to choose a good computer?",
];

const answers = {
  "What is a CPU?": "The CPU (Central Processing Unit) is the brain of the computer that performs instructions.",
  "What does RAM do?": "RAM (Random Access Memory) temporarily stores data your computer is currently using.",
  "What is a GPU?": "GPU (Graphics Processing Unit) is mainly used to render images and videos.",
  "How to choose a good computer?": "Consider CPU speed, RAM size, storage type, and your needs like gaming or work.",
  "What is a motherboard?": "The motherboard connects all the parts of a computer together.",
  "What is an SSD?": "SSD (Solid State Drive) is a fast storage device with no moving parts.",
  "What is an HDD?": "HDD (Hard Disk Drive) is a storage device that uses spinning disks to store data.",
  "What is a monitor?": "A monitor is a screen that displays the visual output from your computer.",
  "How to speed up my computer?": "Remove unused programs, use an SSD, and increase RAM if possible.",
  "What is antivirus software?": "Antivirus software protects your computer from viruses and malware."
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showDefaults, setShowDefaults] = useState(true);

  const addMessage = (sender, text) => {
    setMessages(prev => [...prev, { sender, text }]);
  };

  const handleSend = (text) => {
    const question = text || input.trim();
    if (!question) return;

    addMessage('user', question);

    const response = answers[question] || "Sorry, I don't know the answer to that question yet.";
    setTimeout(() => {
      addMessage('bot', response);
    }, 500);

    setInput('');
    setShowDefaults(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">Ask Me Anything!</div>

      <div className="chatbot-messages">
        {showDefaults && (
          <div className="default-questions">
            {defaultQuestions.map((q, i) => (
              <button key={i} className="default-question" onClick={() => handleSend(q)}>
                {q}
              </button>
            ))}
          </div>
        )}

        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'user' ? 'right' : 'left'}`}>
            <div className={`bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={() => handleSend()}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;

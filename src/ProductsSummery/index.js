import React, { useState } from 'react';
import './index.css'; // Optional CSS for styling

const Summary = () => {
  const [activeTab, setActiveTab] = useState('plants'); // 'plants' is default active

  // Sample text for each tab
  const plantsContent = `Plants improve air quality, reduce stress, and create a calm environment. They add life to any space and are perfect for home or office settings. Caring for plants can also be a rewarding hobby.`;
  
  const potsContent = `Pots are essential for plants as they provide a controlled environment for growth. From traditional clay pots to modern designs, the right pot can enhance the aesthetic appeal and health of your plants.`;

  return (
    <div className="summary-container">
      <div className="tab-buttons">
        {/* Buttons to toggle content */}
        <button
          className={`tab-button ${activeTab === 'plants' ? 'active' : ''}`}
          onClick={() => setActiveTab('plants')}
        >
          Plants
        </button>
        <button
          className={`tab-button ${activeTab === 'pots' ? 'active' : ''}`}
          onClick={() => setActiveTab('pots')}
        >
          Pots
        </button>
      </div>

      {/* Content that changes based on the active tab */}
      <div className="content">
        {activeTab === 'plants' && <p>{plantsContent}</p>}
        {activeTab === 'pots' && <p>{potsContent}</p>}
      </div>
    </div>
  );
};

export default Summary;

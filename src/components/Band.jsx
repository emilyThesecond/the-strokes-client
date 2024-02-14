import React, { useState } from 'react'
import {members}  from '../data/band'

const Band = () => {
  // Define state to track which card is flipped
  const [flipped, setFlipped] = useState(Array(members.length).fill(false));

  // Function to toggle the flipped state of a card
  const toggleFlipped = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div>
      <h1>The Band</h1>
      <div className="band-container">
        {/* Map through each band member and create a card */}
        {members.map((member, index) => (
        <div> 
            <h3>{member.name}</h3>

          <div key={index} className={`card ${flipped[index] ? 'flipped' : ''}`} onClick={() => toggleFlipped(index)}>
            <div className="front">
              <img src={member.imageUrl} alt={member.name} />
            </div>
            <div className="back">
              <p>{member.info}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Band;

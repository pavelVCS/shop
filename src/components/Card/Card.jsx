import React from 'react';
// components
// import Button from '../Button/Button';
import './card.scss';

function Card({ title, description, handleCardButton, card }) {
  const handleAddToCard = () => {
    handleCardButton({ title, description });
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCard}>
        {card ? 'remove from card' : 'add to card'}
      </button>
    </div>
  );
}

export default Card;

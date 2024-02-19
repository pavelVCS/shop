import React from 'react';
// components
import Button from '../Button/Button';
import './card.scss';

function Card({ title, description, handleCardButton, card }) {
  const handleAddToCard = () => {
    handleCardButton({ title, description });
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Button type="teal" onClick={handleAddToCard}>
        {card ? 'remove' : 'add to cart'}
      </Button>
    </div>
  );
}

export default Card;

import React from 'react';
// components
// import Button from '../Button/Button';
import './card.scss';

function Card({ title, description, setCardData }) {
  const handleAddToCard = () => {
    setCardData([{ title, description }]);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCard}>add to card</button>
    </div>
  );
}

export default Card;

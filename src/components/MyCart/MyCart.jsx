import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { handleSort } from '../../utils/sortUtils';
// components
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';

function MyCard() {
  const { cartData, setCartData, handleRemoveFromCard } =
    useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(cartData, direction);
    setCartData(sortedData);
  };

  return (
    <main className="custom-container">
      <SortButtons handleSortData={handleSortData} />

      {cartData.map(({ title, description }) => (
        <Card
          key={title}
          title={title}
          description={description}
          handleCardButton={handleRemoveFromCard}
          card={true}
        />
      ))}
    </main>
  );
}

export default MyCard;

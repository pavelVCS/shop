import React, { useState } from 'react';
import { mockData } from './mockData';
// components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';

import './App.scss';

function App() {
  const [tab, setTab] = useState('all'); // possible options: 'all', 'card', 'favorite'
  const [cardData, setCardData] = useState([]);
  const [data, setData] = useState(mockData);

  const handleAddToCard = (item) => {
    setCardData([...cardData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setData(filteredData);
  };

  const handleRemoveFromCard = (item) => {
    setData([item, ...data]);

    const filteredCardData = cardData.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setCardData(filteredCardData);
  };

  return (
    <>
      <Navbar setTab={setTab} />
      {tab === 'all' && (
        <Main data={data} setData={setData} setCardData={handleAddToCard} />
      )}
      {tab === 'card' && (
        <MyCard cardData={cardData} setCardData={handleRemoveFromCard} />
      )}
    </>
  );
}

export default App;

import React, { useState } from 'react';
// components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';

import './App.css';

function App() {
  const [tab, setTab] = useState('all'); // possible options: 'all', 'card', 'favorite'
  const [cardData, setCardData] = useState([]);

  return (
    <>
      <Navbar setTab={setTab} />
      {tab === 'all' && <Main setCardData={setCardData} />}
      {tab === 'card' && (
        <MyCard cardData={cardData} setCardData={setCardData} />
      )}
    </>
  );
}

export default App;

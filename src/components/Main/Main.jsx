import React from 'react';
// components
import Card from '../Card/Card';

import './main.scss';

function Main({ setCardData, data, setData }) {
  const handleSortData = (direction) => {
    const sortedData = data.toSorted((a, b) => {
      let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

      if (fa < fb) return direction === 'az' ? -1 : 1;
      if (fa > fb) return direction === 'az' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  return (
    <main className="container">
      <div className="main-action-btn">
        <button
          onClick={() => {
            handleSortData('az');
          }}
        >
          Sort A-Z
        </button>
        <button onClick={handleSortData}>Sort Z-A</button>
      </div>

      {data.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          setCardData={setCardData}
        />
      ))}
    </main>
  );
}

export default Main;

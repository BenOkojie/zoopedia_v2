import React from 'react';

const HintList: React.FC = () => {
  const hints = ['It has fur', 'It lives in trees', 'It eats bananas'];

  return (
    <ul>
      {hints.map((hint, index) => (
        <li key={index}>{hint}</li>
      ))}
    </ul>
  );
};

export default HintList;
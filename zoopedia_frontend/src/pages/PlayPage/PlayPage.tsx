import React from 'react';
import GuessInput from './components/GuessInput';
import HintList from './components/HintList';
import Lives from './components/Lives';

const PlayPage: React.FC = () => {
  return (
    <div>
      <Lives />
      <HintList />
      <GuessInput />
    </div>
  );
};

export default PlayPage;
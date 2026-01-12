import React, { useState } from 'react';

const GuessInput: React.FC = () => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle guess submission
    console.log('Guess:', guess);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button type="submit">Guess</button>
    </form>
  );
};

export default GuessInput;
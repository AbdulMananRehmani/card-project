import React, { useState } from 'react';

function convertToWaveArray(numbers) {
  // Sort the array in ascending order
  numbers.sort((a, b) => a - b);

  // Swap adjacent elements to create the wave form
  for (let i = 0; i < numbers.length - 1; i += 2) {
    const temp = numbers[i];
    numbers[i] = numbers[i + 1];
    numbers[i + 1] = temp;
  }

  return numbers;
}

function App() {
  const [inputNumbers, setInputNumbers] = useState([]);
  const [waveArray, setWaveArray] = useState([]);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    setInputNumbers([...inputNumbers, value]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const waveArray = convertToWaveArray(inputNumbers);
    setWaveArray(waveArray);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Enter the number of integers:
          <input type="number" onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      {waveArray.length > 0 && (
        <div>
          <h3>Wave Array:</h3>
          <p>{waveArray.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function Phone() {
  const [phoneState, setPhoneState] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  const changeColor = () => {
    setPhoneState(prev => ({ ...prev, color: "blue" }));
  };

  return (
    <div>
      <h3>My Phone</h3>
      <p><strong>Brand:</strong> {phoneState.brand}</p>
      <p><strong>Model:</strong> {phoneState.model}</p>
      <p><strong>Color:</strong> <span style={{ color: phoneState.color }}>{phoneState.color}</span></p>
      <p><strong>Year:</strong> {phoneState.year}</p>

      <button onClick={changeColor}>Change Color to Blue</button>
    </div>
  );
}

export default Phone;
import React, { useState } from 'react';
import Garage from './Garage';

function Car() {
  const carInfo = { name: "Ford", model: "Mustang" };
  const [color, setColor] = useState("Red");

  return (
    <div>
      <h3>This car is a <span style={{ color: 'blue' }}>{color}</span> {carInfo.model}</h3>
      <Garage size="small" />
    </div>
  );
}

export default Car;
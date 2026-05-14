import React from 'react';

function Garage(props) {
  return (
    <h4>Who lives in my <span style={{ color: 'green' }}>{props.size}</span> Garage?</h4>
  );
}

export default Garage;
import React from 'react';
import data from '../data/exampleData.json';

function Example2() {
  return (
    <div>
      <h3>Skills</h3>
      <ul>
        {data.Skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Example2;
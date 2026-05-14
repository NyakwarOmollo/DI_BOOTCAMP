import React from 'react';
import data from '../data/exampleData.json';

function Example3() {
  return (
    <div>
      <h3>Experiences</h3>
      {data.Experiences.map((exp, index) => (
        <div key={index} className="border p-3 mb-3">
          <strong>Company:</strong> {exp.company} <br />
          <strong>Role:</strong> {exp.role}
        </div>
      ))}
    </div>
  );
}

export default Example3;
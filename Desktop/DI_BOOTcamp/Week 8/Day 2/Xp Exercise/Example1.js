import React from 'react';
import data from '../data/exampleData.json';

function Example1() {
  return (
    <div>
      <h3>Social Medias</h3>
      <ul>
        {data.SocialMedias.map((media, index) => (
          <li key={index}>{media}</li>
        ))}
      </ul>
    </div>
  );
}

export default Example1;
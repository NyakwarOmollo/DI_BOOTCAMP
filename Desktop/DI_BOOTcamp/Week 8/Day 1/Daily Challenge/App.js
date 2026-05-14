import React, { useState } from 'react';
import FormComponent from './FormComponent';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false,
    vegetarian: false,
    kosher: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const params = new URLSearchParams();
    
    Object.keys(formData).forEach(key => {
      if (formData[key] !== '' && formData[key] !== false) {
        params.append(key, formData[key]);
      }
    });

    window.location.href = `/?${params.toString()}`;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>React Form Container</h1>
      
      <FormComponent 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
      />
    </div>
  );
}

export default App;
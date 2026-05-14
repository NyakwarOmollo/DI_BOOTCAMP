import React from 'react';

function FormComponent({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      
      <input 
        type="text" 
        name="firstName" 
        placeholder="First Name" 
        value={formData.firstName} 
        onChange={handleChange}
        required 
      />

      <input 
        type="text" 
        name="lastName" 
        placeholder="Last Name" 
        value={formData.lastName} 
        onChange={handleChange}
        required 
      />

      <input 
        type="number" 
        name="age" 
        placeholder="Age" 
        value={formData.age} 
        onChange={handleChange}
        required 
      />

      <div>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            checked={formData.gender === 'male'} 
            onChange={handleChange}
          /> Male
        </label>
        <label style={{ marginLeft: '15px' }}>
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            checked={formData.gender === 'female'} 
            onChange={handleChange}
          /> Female
        </label>
      </div>

      <select name="destination" value={formData.destination} onChange={handleChange} required>
        <option value="">Select Destination</option>
        <option value="Japan">Japan</option>
        <option value="Thailand">Thailand</option>
        <option value="Brazil">Brazil</option>
        <option value="France">France</option>
      </select>

      <div>
        <label>
          <input 
            type="checkbox" 
            name="lactoseFree" 
            checked={formData.lactoseFree} 
            onChange={handleChange}
          /> Lactose Free
        </label>
      </div>

      <div>
        <label>
          <input 
            type="checkbox" 
            name="vegetarian" 
            checked={formData.vegetarian} 
            onChange={handleChange}
          /> Vegetarian
        </label>
      </div>

      <div>
        <label>
          <input 
            type="checkbox" 
            name="kosher" 
            checked={formData.kosher} 
            onChange={handleChange}
          /> Kosher
        </label>
      </div>

      <button type="submit" style={{ padding: '12px', fontSize: '16px' }}>
        Submit
      </button>
    </form>
  );
}

export default FormComponent;
import React from 'react';

function DatePicker({ selectedDay, setSelectedDay }) {
  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div className="card date-picker-card">
      <label htmlFor="planner-date">Select Day</label>
      <input
        id="planner-date"
        type="date"
        value={selectedDay}
        onChange={handleDayChange}
      />
    </div>
  );
}

export default DatePicker;

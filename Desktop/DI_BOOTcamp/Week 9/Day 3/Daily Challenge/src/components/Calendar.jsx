import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDay } from '../features/tasksSlice.js';

function Calendar() {
  const selectedDay = useSelector((state) => state.tasks.selectedDay);
  const dispatch = useDispatch();

  return (
    <div className="calendar-card">
      <h2>Select a Day</h2>
      <input
        type="date"
        value={selectedDay}
        onChange={(event) => dispatch(selectDay(event.target.value))}
      />
    </div>
  );
}

export default Calendar;

import { useDispatch, useSelector } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../features/ageSlice.js';

function AgeControls() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.age.loading);

  const handleAgeUp = (event) => {
    event.preventDefault();
    dispatch(ageUpAsync());
  };

  const handleAgeDown = (event) => {
    event.preventDefault();
    dispatch(ageDownAsync());
  };

  return (
    <form className="card controls-card" onSubmit={(e) => e.preventDefault()}>
      <button type="button" onClick={handleAgeUp} disabled={loading}>
        Age Up
      </button>
      <button type="button" onClick={handleAgeDown} disabled={loading}>
        Age Down
      </button>
      {loading && <p className="hint">Please wait while the age updates...</p>}
    </form>
  );
}

export default AgeControls;

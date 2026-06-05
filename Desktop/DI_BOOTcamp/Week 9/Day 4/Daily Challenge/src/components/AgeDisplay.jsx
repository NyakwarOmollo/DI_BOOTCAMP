import { useSelector } from 'react-redux';

function AgeDisplay() {
  const age = useSelector((state) => state.age.age);
  const loading = useSelector((state) => state.age.loading);

  return (
    <div className="card display-card">
      <h2>Current Age</h2>
      <div className="age-value">{loading ? 'Updating...' : age}</div>
      {loading && <div className="spinner" aria-label="Loading"></div>}
    </div>
  );
}

export default AgeDisplay;

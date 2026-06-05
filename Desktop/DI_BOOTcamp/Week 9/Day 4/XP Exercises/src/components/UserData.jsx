import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../features/user/userSlice';

function UserData() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <section className="user-card">
      {loading && <p className="status">Loading user data...</p>}
      {error && <p className="status status-error">Error: {error}</p>}

      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
          <div className="address">
            <strong>Address:</strong>
            <p>{user.address.street}, {user.address.suite}</p>
            <p>{user.address.city} - {user.address.zipcode}</p>
          </div>
        </div>
      ) : (
        !loading && !error && <p className="status">No user data loaded yet.</p>
      )}
    </section>
  );
}

export default UserData;

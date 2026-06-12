import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './app/store';
import { logout, setCredentials } from './features/auth/authSlice';
import { useEffect, useState } from 'react';
import { setStories } from './features/stories/storiesSlice';
import type { Story } from '../../types';

function HomePage() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state: RootState) => state.auth);
  const stories = useSelector((state: RootState) => state.stories.stories);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!token) {
      dispatch(setStories([]));
      return;
    }

    fetch('http://localhost:5000/stories', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        if (!res.ok) throw new Error('Unable to load stories');
        return res.json();
      })
      .then((data) => dispatch(setStories(Array.isArray(data) ? data : [])))
      .catch(() => dispatch(setStories([])));
  }, [dispatch, token]);

  const createStory = async () => {
    const res = await fetch('http://localhost:5000/stories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ title, content }),
    });
    if (res.ok) {
      const story = await res.json();
      dispatch(setStories([story, ...stories]));
      setTitle('');
      setContent('');
    }
  };

  return (
    <div style={{ padding: 24, maxWidth: 1100, margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Collaborative Storytelling</h1>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Home</Link>
          {!user ? <Link to="/login">Login</Link> : <button onClick={() => dispatch(logout())}>Logout</button>}
        </nav>
      </header>
      <p>Write, share, and collaborate on stories with a simple auth flow and live story board.</p>
      {user ? (
        <section style={{ display: 'grid', gap: 12, marginTop: 16 }}>
          <h2>Create a story</h2>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Story title" />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Tell your story..." rows={5} />
          <button onClick={createStory}>Save story</button>
        </section>
      ) : (
        <p>Sign in to begin collaborating.</p>
      )}
      <section style={{ marginTop: 20 }}>
        <h2>Stories</h2>
        {stories.map((story: Story) => (
          <article key={story.id} style={{ border: '1px solid #ddd', borderRadius: 10, padding: 14, marginBottom: 10 }}>
            <h3>{story.title}</h3>
            <p>{story.content}</p>
            <small>By {story.author_name || 'Author'}</small>
          </article>
        ))}
      </section>
    </div>
  );
}

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const user = useSelector((state: RootState) => state.auth.user);

  const submit = async () => {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const json = await res.json();
    if (!res.ok) return setError(json.message || 'Login failed');
    dispatch(setCredentials({ user: json.user, token: json.accessToken }));
    setError('');
  };

  if (user) return <Navigate to="/" replace />;

  return (
    <div style={{ maxWidth: 420, margin: '40px auto' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button onClick={submit}>Sign in</button>
      <p>Need an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

function SignupPage() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const user = useSelector((state: RootState) => state.auth.user);

  const submit = async () => {
    const res = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    const json = await res.json();
    if (!res.ok) return setError(json.message || 'Registration failed');
    dispatch(setCredentials({ user: json.user, token: json.accessToken }));
    setError('');
  };

  if (user) return <Navigate to="/" replace />;

  return (
    <div style={{ maxWidth: 420, margin: '40px auto' }}>
      <h2>Sign up</h2>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button onClick={submit}>Create account</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

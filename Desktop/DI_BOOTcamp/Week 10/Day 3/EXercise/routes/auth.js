const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const router = express.Router();

const users = [];
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret-key';

function signAccessToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: '15m' }
  );
}

function signRefreshToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username },
    JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );
}

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  if (username.length < 3 || username.length > 20) {
    return res.status(400).json({ message: 'Username must be 3 to 20 characters long.' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
  }

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: Date.now(), username, password: hashedPassword };
  users.push(user);

  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  res.cookie('accessToken', accessToken, { httpOnly: true, sameSite: 'lax' });
  res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'lax' });

  return res.status(201).json({
    message: 'User registered successfully.',
    user: { id: user.id, username: user.username },
    accessToken,
    refreshToken,
  });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const user = users.find((entry) => entry.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  res.cookie('accessToken', accessToken, { httpOnly: true, sameSite: 'lax' });
  res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'lax' });

  return res.json({
    message: 'Login successful.',
    user: { id: user.id, username: user.username },
    accessToken,
    refreshToken,
  });
});

router.get('/profile', auth, (req, res) => {
  res.json({ message: 'Authenticated user profile.', user: req.user });
});

router.post('/refresh', (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token missing.' });
  }

  jwt.verify(refreshToken, JWT_REFRESH_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired refresh token.' });
    }

    const accessToken = signAccessToken({ id: decoded.id, username: decoded.username });
    res.cookie('accessToken', accessToken, { httpOnly: true, sameSite: 'lax' });

    return res.json({ message: 'Access token refreshed.', accessToken });
  });
});

router.post('/logout', (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  return res.json({ message: 'Logout successful. Tokens cleared.' });
});

module.exports = router;

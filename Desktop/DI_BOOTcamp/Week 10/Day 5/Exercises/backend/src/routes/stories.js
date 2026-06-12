const express = require('express');
const { getStories, createStory, updateStory, deleteStory } = require('../controllers/storyController');
const { authenticateToken } = require('../helpers/auth');

const router = express.Router();

router.get('/stories', authenticateToken, getStories);
router.post('/stories', authenticateToken, createStory);
router.patch('/stories/:id', authenticateToken, updateStory);
router.delete('/stories/:id', authenticateToken, deleteStory);

module.exports = router;

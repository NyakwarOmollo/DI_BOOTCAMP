const { pool } = require('../db/pool');

exports.getStories = async (_req, res, next) => {
  try {
    const result = await pool.query(`
      SELECT s.id, s.title, s.content, s.created_at, s.updated_at,
             u.id AS author_id, u.username AS author_name
      FROM stories s
      JOIN users u ON u.id = s.author_id
      ORDER BY s.created_at DESC
    `);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

exports.createStory = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ message: 'Title and content are required.' });

    const result = await pool.query(
      'INSERT INTO stories (title, content, author_id) VALUES ($1, $2, $3) RETURNING *',
      [title, content, req.user.userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

exports.updateStory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const current = await pool.query('SELECT author_id FROM stories WHERE id = $1', [id]);
    if (!current.rows.length) return res.status(404).json({ message: 'Story not found.' });

    if (current.rows[0].author_id !== req.user.userId) {
      return res.status(403).json({ message: 'You can only edit your own story.' });
    }

    const result = await pool.query(
      'UPDATE stories SET title = COALESCE($1, title), content = COALESCE($2, content), updated_at = NOW() WHERE id = $3 RETURNING *',
      [title, content, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

exports.deleteStory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const current = await pool.query('SELECT author_id FROM stories WHERE id = $1', [id]);
    if (!current.rows.length) return res.status(404).json({ message: 'Story not found.' });

    if (current.rows[0].author_id !== req.user.userId) {
      return res.status(403).json({ message: 'Only the author can delete this story.' });
    }

    await pool.query('DELETE FROM stories WHERE id = $1', [id]);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

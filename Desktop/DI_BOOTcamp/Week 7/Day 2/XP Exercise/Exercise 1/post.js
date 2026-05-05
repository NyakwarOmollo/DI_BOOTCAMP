// models/Post.js
import pool from '../config/db.js';

class Post {
    static async create(title, content) {
        const result = await pool.query(
            'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
            [title, content]
        );
        return result.rows[0];
    }

    static async findAll() {
        const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
        return result.rows;
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async update(id, title, content) {
        const result = await pool.query(
            'UPDATE posts SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
            [title, content, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
}

export default Post;
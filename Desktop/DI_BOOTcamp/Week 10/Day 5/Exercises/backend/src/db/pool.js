const fs = require('fs');
const path = require('path');
const { Pool: RealPool } = require('pg');
const { newDb } = require('pg-mem');

const useRealDb = Boolean(process.env.DATABASE_URL && process.env.DATABASE_URL.trim());

let pool;

if (useRealDb) {
  pool = new RealPool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });
} else {
  const db = newDb();
  const { Pool } = db.adapters.createPg();
  pool = new Pool();

  const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  pool.query(schema).catch(() => undefined);
}

module.exports = { pool };

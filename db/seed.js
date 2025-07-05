const pool = require('./db');

async function seed() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      text TEXT NOT NULL,
      username TEXT NOT NULL,
      added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await pool.query(`
    INSERT INTO messages (text, username) VALUES
    ('test messagae 1', 'Khoi'), ('message 2', 'Trang')
    ON CONFLICT DO NOTHING;
  `);

  console.log('Database seeded');
  process.exit();
}

seed();

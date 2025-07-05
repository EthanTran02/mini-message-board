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
    ('Yo, just binged a whole season of that new sci-fi show. So dope!', 'NightOwl23'), ('Dude, found this sick taco spot downtown. Gotta hit it up!', 'SunnyVibes88')
    ON CONFLICT DO NOTHING;
  `);

  console.log('Database seeded');
  process.exit();
}

seed();

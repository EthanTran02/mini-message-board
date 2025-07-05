const pool = require('./db');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function addMessage(text, username) {
  await pool.query('INSERT INTO messages (text, username) VALUES ($1, $2)', [
    text,
    username,
  ]);
}

async function getDetailMessage(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);
  return rows[0];
}

module.exports = { getAllMessages, addMessage, getDetailMessage };

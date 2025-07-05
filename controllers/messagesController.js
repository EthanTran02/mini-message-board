const db = require('../db/query');

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('messages', { messages: messages });
}

async function addMessages(req, res) {
  const user = req.body.name;
  const text = req.body.message;
  await db.addMessage(text, user);

  res.redirect('/');
}

async function getDetailMessage(req, res) {
  const index = parseInt(req.params.id);
  const message = await db.getDetailMessage(index);
  res.render('detail', { detailMessage: message });
}

module.exports = { getMessages, addMessages, getDetailMessage };

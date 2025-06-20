// Mocked data
const messages = [
  {
    text: 'Hi there!',
    user: 'Amado',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

exports.getMessages = (req, res) => {
  res.render('messages', { messages: messages });
};

exports.addMessages = (req, res) => {
  const user = req.body.name;
  const text = req.body.message;

  messages.push({ text: text, user: user, added: new Date() });

  res.redirect('/');
};

exports.getDetailMessage = (req, res) => {
  const index = parseInt(req.params.id);

  if (index >= 0 && index < messages.length) {
    res.render('detail', { detailMessage: messages[index] });
  } else {
    res.redirect('/');
  }
};

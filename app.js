const express = require('express');
const app = express();
const PORT = 3000;

// ROUTER
const messagesRouter = require('./routes/messagesRouter.js');
const formRouter = require('./routes/formRouter.js');

// Setup ejs and css
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Sever
app.use('/', messagesRouter);
app.use('/new', formRouter);

app.listen(PORT, () => {
  console.log('running on Port: ' + PORT);
});

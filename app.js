const express = require('express');
const app = express();
const PORT = 3000;

// ROUTER
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');

// Setup ejs and css
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/new', newRouter);

app.listen(PORT, () => {
  console.log('running on Port: ' + PORT);
});

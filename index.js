const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/hw', (req, res) => {
  res.send('Hello World 2!');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Our app is running on port ${ port }`);
});

console.log("Hi");

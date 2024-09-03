const express = require('express');
// const path = require('path');
const data = require('./data');
const app = express();
// const dotenv = require('dotenv').config()
const cors = require('cors')

app.use(cors())
// app.use(express.static(path.join(__dirname, 'gooses_images')));

app.get('/api/products', (req, res) => {
  res.send(data.products)
});

app.get("/", (req, res) => {
    res.send("Welcome")
  });


const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
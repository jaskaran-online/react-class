require('dotenv').config();
const express = require('express');
const path = require('path');
const chatRoutes = require('./chatbot/routes/chatRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/api', chatRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
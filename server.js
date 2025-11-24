const express = require('express');
const path = require('path');
const createRouter = require('./routes/router');

const app = express();

// Serve static files (HTML/CSS)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/pdfs', express.static(path.join(__dirname, 'pdfs')));
app.use('/', createRouter());

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});

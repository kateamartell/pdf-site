const express = require('express');
const path = require('path');
const { getPdfList } = require('../modules/pdfDiscovery');
const { isValidPdf, getPdfPath } = require('../modules/pdfValidation');

function createRouter() {
  const router = express.Router();

  // Homepage
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

  // JSON PDF list (metadata)
  router.get('/api/pdfs', (req, res) => {
    const pdfs = getPdfList();
    res.json(pdfs);
  });

  // Serve PDFs safely using sendFile()
  router.get('/pdfs/:filename', (req, res) => {
    const filename = req.params.filename;

    if (!isValidPdf(filename)) {
      return res.status(404).send('PDF not found');
    }

    const fullPath = getPdfPath(filename);
    res.sendFile(fullPath);
  });

  // 404 handler
  router.use((req, res) => {
    res.status(404).send('Page not found');
  });

  return router;
}

module.exports = createRouter;

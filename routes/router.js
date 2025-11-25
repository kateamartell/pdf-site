
const express = require('express');
const path = require('path');
const fs = require('fs');
const { getPdfList } = require('../modules/pdfDiscovery');

function createRouter() {
  const router = express.Router();

  // Return the list of PDFs
  router.get('/api/pdfs', (req, res) => {
    res.json(getPdfList());
  });

  // Serve an individual PDF with sendFile()
  router.get('/pdfs/:filename', (req, res) => {
    const filename = req.params.filename;
    const allowed = getPdfList().find(pdf => pdf.filename === filename);

    if (!allowed) {
      return res.status(404).send('PDF not found or not allowed');
    }

    const fullPath = path.join(__dirname, '..', 'pdfs', filename);

    fs.access(fullPath, fs.constants.R_OK, err => {
      if (err) return res.status(404).send('File missing');
      res.sendFile(fullPath);
    });
  });

  return router;
}

module.exports = createRouter;



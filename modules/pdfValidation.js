const fs = require('fs');
const path = require('path');

const pdfDir = path.join(__dirname, '..', 'pdfs');

function isValidPdf(filename) {
  if (filename.includes('..') || filename.includes('/')) return false;
  return fs.existsSync(path.join(pdfDir, filename));
}

function getPdfPath(filename) {
  return path.join(pdfDir, filename);
}

module.exports = { isValidPdf, getPdfPath };

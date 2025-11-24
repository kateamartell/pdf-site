const fs = require('fs');
const path = require('path');

const pdfDir = path.join(__dirname, '..', 'pdfs');
const metadataPath = path.join(__dirname, '..', 'data', 'pdfMetadata.json');

function getPdfList() {
  const filesOnDisk = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));

  const raw = fs.readFileSync(metadataPath, 'utf-8');
  const metadata = JSON.parse(raw);

  return metadata
    .filter(item => filesOnDisk.includes(item.filename))
    .map(item => ({
      filename: item.filename,
      title: item.title,
      description: item.description,
      url: `/pdfs/${item.filename}`
    }));
}

module.exports = { getPdfList };

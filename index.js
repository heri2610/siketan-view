const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
const port = 5000; // Ganti dengan port yang sesuai

// Gunakan serveStatic untuk melayani file statis dari direktori dist
app.use(serveStatic(path.join(__dirname, 'dist')));

// Sisipkan logika routing untuk mengarahkan permintaan ke API Express Anda
app.get('/api/data', (req, res) => {
  // Lakukan permintaan ke API Express Anda yang ada di VM hosting
  // Misalnya, jika API berjalan di port 3000 di VM, maka lakukan permintaan seperti ini:
  // fetch('http://localhost:3000/api/data')
  // Kemudian kirimkan respon dari API sebagai respon ke permintaan React
});
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
// Jalankan server Express
app.listen(port, () => {
  console.log(`Server Express berjalan di http://localhost:${port}`);
});

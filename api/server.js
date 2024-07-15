const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Servir imágenes estáticas
app.use('/images', express.static(path.join(__dirname, 'images')));

// Ruta para obtener una lista de imágenes
app.get('/api/images', (req, res) => {
  const images = [
    { nombre: 'poleras.jpg', url: 'http://localhost:3000/images/poleras.jpg' },
    { nombre: 'pantalones.jpg', url: 'http://localhost:3000/images/pantalones.jpg' },
    { nombre: 'zapatillas.jpg', url: 'http://localhost:3000/images/zapatillas.jpg' },
    { nombre: 'jockeys.jpg', url: 'http://localhost:3000/images/jockeys.jpg' }
  ];
  res.json(images);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

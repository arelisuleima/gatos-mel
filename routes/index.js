const express = require('express');
const router = express.Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
  res.render('home', { title: 'Wiki de Gatos' });
});

// Ruta para la página "About"
router.get('/about', (req, res) => {
  res.render('about', { title: 'Acerca de' });
});

module.exports = router;
const Cat = require('../models/gato');

// Ruta para mostrar el formulario
router.get('/add-cat', (req, res) => {
  res.render('add-cat', { title: 'Agregar un Nuevo Gato' });
});

// Ruta para manejar el formulario de agregado
router.post('/add-cat', (req, res) => {
  const newCat = new Cat(req.body);
  newCat.save()
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send(err));
});

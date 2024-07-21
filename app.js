const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars'); // Importa el motor de vistas
const app = express();
const port = 3000;

// Configuración de Handlebars
app.engine('hbs', engine({ 
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutsDir: path.join(__dirname, 'views', 'layouts') 
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Datos en memoria (Ejemplo)
const cats = [
  { id: 1, name: 'Gato 1', description: 'Descripción del Gato 1' },
  { id: 2, name: 'Gato 2', description: 'Descripción del Gato 2' }
];

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('index', { title: 'MEL' });
});

app.get('/cats', (req, res) => {
  res.render('cats', { title: 'Gatos', cats });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Sobre Nosotros' });
});

// Manejo de errores 404
//app.use((req, res) => {
  //res.status(404).render('404', { title: 'Página No Encontrada' });
//});

// Iniciar el Servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

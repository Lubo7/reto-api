const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const UserRouter = require('./routes/userRouter');
const PeliculaRouter = require('./routes/peliculaRoutes');
const PedidoRouter = require('./routes/pedidoRoutes');

//Rutas
router.use('/api', UserRouter); //Login, register, findOne , Delete
router.use('/pelicula', auth, PeliculaRouter); // CRUD de peliculas
router.use('/pedido', auth, PedidoRouter); // CRUD de pedidos

module.exports = router;
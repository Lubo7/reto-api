const express = require('express');
const router = express.Router();

//Importo Controllers
const peliculaController = require("../controllers/peliculaController");
  
router.post("/", peliculaController.create); // EndPoint de crear una pelicula
router.get("/", peliculaController.findAll); // EndPoint de buscar todas las peliculas
router.get("/:id", peliculaController.findById); // EndPoint de buscar una pelicula por id
router.get("/titulo/:titulo", peliculaController.findByTitulo); // EndPoint de buscar una pelicula por titulo
router.get("/genero/:genero", peliculaController.findByGenero); // EndPoint de buscar una pelicula por genero
router.get("/actor/:actor", peliculaController.findByActor); // EndPoint de buscar una pelicula por actor
// router.get('/ciudad/:ciudad', peliculaController.findByCiudad); // EndPoint de buscar una pelicula por ciudad
// router.get('/ciudad/:ciudad/disponible/:diponible', peliculaController.getByAlquiler); // EndPoint si una pelicula esta diponible por ciudad


module.exports = router;
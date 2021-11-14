const db = require("../models");
const Pelicula = db.peliculas;

const PeliculaController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
// Create and Save a new Pelicula
PeliculaController.create = (req, res) => {

  if (req.user.user.rol == "admin") {// HACEMOS QUE SOLO PUEDA CREARLO EL ADMINISTRADOR
    // Validate request

    console.log('tmc -> ' , req );

    if (!req.body.titulo) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Create a Pelicula
    const pelicula = new Pelicula({
      titulo: req.body.titulo,
      precio: req.body.precio,
      duracion: req.body.duracion,
      genero: req.body.genero,
      actorPrincipal: req.body.actorPrincipal
    });

    // Save Pelicula in the database
    pelicula
      .save(pelicula)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });

  } else {
    res.send({
      message: `You dont have permissions to delete any movie..`
    });
  }

};


//-------------------------------------------------------------------------------------
// Retrieve all Cities from the database.
PeliculaController.findAll = (req, res) => {
  const titulo = req.query.titulo;
  var condition = titulo ? { titulo: { $regex: new RegExp(titulo), $options: "i" } } : {};

  Pelicula.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Cities."
      });
    });
};


//-------------------------------------------------------------------------------------
// Find a single Pelicula with an id
PeliculaController.findById = (req, res) => {
  const id = req.params.id;

  Pelicula.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Pelicula with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Pelicula with id=" + id });
    });
};

//-------------------------------------------------------------------------------------
// Find a single Pelicula by titulo

PeliculaController.findByTitulo = (req, res) => {

  const titulo = req.params.titulo;
  Pelicula.findOne({ titulo: titulo })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Pelicula with titulo " + titulo });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Pelicula with titulo=" + titulo });
    });
};

//-------------------------------------------------------------------------------------
// Find a single Pelicula by genero

PeliculaController.findByGenero = (req, res) => {

  const genero = req.params.genero;
  Pelicula.findOne({ genero: genero })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Pelicula with genero " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Pelicula with genero=" + id });
    });
};

//-------------------------------------------------------------------------------------
// Find a single Pelicula by actorPrincipal

PeliculaController.findByActor = (req, res) => {

  const actor = req.params.actor;
  Pelicula.findOne({ actorPrincipal: actor })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Pelicula with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Pelicula with id=" + id });
    });
};


module.exports = PeliculaController;
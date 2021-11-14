const db = require("../models");
const Pedido = db.pedidos;

const PedidoController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
// Create and Save a new Pedido
PedidoController.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Pedido
  const pedido = new Pedido({
    fechaAlquiler: req.body.fechaAlquiler,
    fechaDevolucion: req.body.fechaDevolucion,
    peliculaId: req.body.peliculaId,
    precio: req.body.precio,
    clienteId: req.body.clienteId
  });

  // Save Pedido in the database
  pedido
    .save(pedido)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


//-------------------------------------------------------------------------------------
// Retrieve all Pedidos from the database.
PedidoController.findAll = (req, res) => {
  const pelicula = req.query.pelicula;
  var condition = pelicula ? { pelicula: { $regex: new RegExp(pelicula), $options: "i" } } : {};

  Pedido.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Pedidos."
      });
    });
};



module.exports = PedidoController;
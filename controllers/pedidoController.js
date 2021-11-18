const db = require("../models");
const Pedido = db.pedidos;

const PedidoController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
// Create and Save a new Order
PedidoController.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an Order
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
          err.message || "Some error occurred while creating the order."
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

// Find a Order with a userId
PedidoController.findByUser = (req, res) => {
  const userId = req.params.clienteId;
  Pedido.find({clienteId: userId})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Movie with title=" + userId });
    });
  };

  PedidoController.findOne = (req, res) => {
    const id = req.params.id;
    Pedido.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Order with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Order with id=" + id });
      });
  };

module.exports = PedidoController;
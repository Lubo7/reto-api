const express = require('express');
const router = express.Router();

//Importo Controllers
const  pedidoController = require("../controllers/pedidoController");
  
router.post("/", pedidoController.create); // EndPoint de crear pedido
router.get("/", pedidoController.findAll); // EndPoint de buscar todos los pedidos

module.exports = router;
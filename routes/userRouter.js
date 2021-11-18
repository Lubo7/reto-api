const express = require('express');
const router = express.Router();

//Importo modelo de datos
const userController = require('../controllers/userController');


router.post('/signup', userController.signUp); //EndPoint de crear usuario
router.post('/signin', userController.signIn); //EndPoint de logear usuario
router.get("/:id", userController.findOne);  //EndPoint buscar perfil de usuario
// router.update("/:id", userController.update); //EndPoint de actualizar de usuario
// router.patch("/:id", userController.patch); //EndPoint de borrar usuario

module.exports = router;
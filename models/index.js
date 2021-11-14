const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.pedidos = require("./pedidoModel")(mongoose);
db.peliculas = require("./peliculaModel")(mongoose);
db.users = require("./userModel.js")(mongoose);

module.exports = db;
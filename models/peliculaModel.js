module.exports = mongoose => {
  const Pelicula = mongoose.model(
    "peliculas",
    mongoose.Schema(
      {
        titulo: String,
        precio: Number,
        duracion: Number,
        genero: String,
        actorPrincipal :String,
        ciudad : String,
        disponible : Boolean
      },
      { timestamps: true }
    )
  );

  return Pelicula;
};



module.exports = mongoose => {
    const Pedido = mongoose.model(
      "pedidos",
      mongoose.Schema(
        {
          fechaAlquiler: String,
          fechaDevolucion: String,
          peliculaId: String, 
          precio: Number,
          clienteId: String
        },
        { timestamps: true }
      )
    );
  
    return Pedido;
  };
module.exports = mongoose => {
    const Pedido = mongoose.model(
      "pedidos",
      mongoose.Schema(
        {
          fechaAlquiler: String,
          fechaDevolucion: String,
          peliculaId: String, 
          precio: Number,
          clienteId: String,
          activo: Boolean,
          usuario:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
          }
        },
        { timestamps: true }
      )
    );
  
    return Pedido;
  };
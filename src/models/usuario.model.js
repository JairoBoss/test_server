const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    apellido: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Usuario", UsuarioSchema);

const Usuario = require("../models/usuario.model");

exports.createUsuairo = (req, res) => {
  const { nombre, apellido } = req.params;
  if (!nombre) {
    res.status(400).send({
      message: "El usuario debe de tener un nombre",
    });
  }

  const usuarioNuevo = new Usuario({
    nombre: nombre,
    apellido: apellido,
  });

  usuarioNuevo.save((err, usuarioNuevo) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el usuario ${usuarioNuevo.nombre}`,
      });
    } else {
      res.status(200).send(usuarioNuevo);
    }
  });
};

exports.findOne = (req, res) => {
  Usuario.findById(req.params.id).exec((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de recuperar el usuario con id ${req.params.id}`,
      });
    } else {
      res.status(200).send(data);
    }
  });
};

exports.findAll = (req, res) => {
  Usuario.find().exec((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de recuperar todos los usuarios`,
      });
    } else {
      res.status(200).send(data);
    }
  });
};

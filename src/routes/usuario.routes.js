module.exports = (app) => {
  const router = require("express").Router();
  const UsuarioController = require("../controllers/usuario.controller.js");

  router.get("/nombre/:nombre/:apellido", UsuarioController.createUsuairo);
  
  router.get("/", UsuarioController.findAll);
  
  router.get("/:id", UsuarioController.findOne);
  
  app.use("/api/usuario", router);
};

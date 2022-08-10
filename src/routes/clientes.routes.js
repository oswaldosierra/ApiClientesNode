const express = require("express");
const clientes = require("../models/clientes");
const router = express.Router();
const Cliente = require("../models/clientes");

router.get("/", async (req, res) => {
  const clientes = await Cliente.find();
  console.log(clientes);
  res.json(clientes);
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  const { nombres, apellidos } = req.body;
  const cliente = new Cliente({ nombres, apellidos });
  await cliente.save();
  res.json("ok");
});

router.put("/:id", async (req, res) => {
  const { nombres, apellidos } = req.body;
  const newCliente = { nombres, apellidos };
  await Cliente.findByIdAndUpdate(req.params.id, newCliente);
});

router.delete("/:id", async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.json("ok");
});

router.get("/:id", async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  res.json(cliente);
});

module.exports = router;

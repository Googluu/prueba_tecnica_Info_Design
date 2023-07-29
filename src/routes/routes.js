const express = require("express");
const router = express.Router();
const historical = require("../controllers/historical.controller");

router.get("/", (req, res) => {
  res.json({
    status: 200,
  });
});

router.post("/tramos", async (req, res) => {
  await historical.getHistTramos(req.body, (resp) => {
    res.json(resp);
  });
});

router.post("/cliente", async (req, res) => {
  await historical.getHistCliente(req.body, (resp) => {
    res.json(resp);
  });
});

router.post("/tramos-cliente", async (req, res) => {
  await historical.getTramosCliente(req.body, (resp) => {
    res.json(resp);
  });
});

// Rutas para obtener datos utilizando métodos GET

router.get("/tramos", async (req, res) => {
  await historical.getHistTramos(req.query, (resp) => {
    res.json(resp);
  });
});

router.get("/cliente", async (req, res) => {
  await historical.getHistCliente(req.query, (resp) => {
    res.json(resp);
  });
});

router.get("/tramos-cliente", async (req, res) => {
  await historical.getTramosCliente(req.query, (resp) => {
    res.json(resp);
  });
});

module.exports = router;

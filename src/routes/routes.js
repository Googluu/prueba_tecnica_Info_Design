const express = require('express');
const router = express.Router();
const historical = require('../controllers/historical.controller');

router.get('/', (req, res) => {
    res.json({
        status: 200,
    })
});

router.post('/tramos', async (req, res) => {
    await historical.getHistTramos(req.body, (resp) =>{
        res.json(resp)
    });
});

router.post('/cliente', async (req, res) => {
  await historical.getHistCliente(req.body, (resp) =>{
      res.json(resp)
  });
});

router.post('/tramos-cliente', async (req, res) => {
  await historical.getTramosCliente(req.body, (resp) =>{
      res.json(resp)
  });
});

module.exports = router;
const express = require('express');

const router = express.Router();

const { addClient, getClients } = require('../controllers/client.js');

router.get('/', getClients);
router.post('/add', addClient);

module.exports = router;

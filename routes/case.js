const express = require('express');

const router = express.Router();

const { addCase, getCases } = require('../controllers/case.js');

router.get('/', getCases);
router.post('/add', addCase);

module.exports = router;

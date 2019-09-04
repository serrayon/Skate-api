const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint => 'api/v1/users'

// GET User Profile
router.get('/:id', authRequired, ctrl.users.show);

router.get('/', ctrl.users.index);

module.exports = router;

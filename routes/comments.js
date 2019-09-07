const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired')

// TODO Put back in later
router.get('/', ctrl.comments.index);
// router.get('/:id', ctrl.comments.show);
router.post('/', authRequired, ctrl.comments.create);
// router.post('/', ctrl.comments.create);

module.exports = router;
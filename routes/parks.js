const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// show all cities
router.get('/', ctrl.parks.index);
// router.get('/', (req, res) => {
//   res.json({ status: 200, message: 'Success' })
// });

// show one city
router.get('/:id', ctrl.parks.show);

// router.post('/:id', authRequired, ctrl.cities.createPost)

module.exports = router;
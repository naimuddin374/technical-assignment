const router = require('express').Router()

// Import Controller
const { store, update } = require('../controllers/eventController');

router.put('/:id', update)
router.delete('/:id', update)
router.post('/', store)


module.exports = router
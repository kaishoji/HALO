const express = require('express');
const router = express.Router();

// @route   GET api/flights
// @desc    get available flights
// @access  public
router.post('/', (req, res) => res.send('Flight route'));
    
module.exports = router;
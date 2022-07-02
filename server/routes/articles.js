const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of articles')
  })
router.get('/post', (req, res) => {
    res.send('a single article')
  })

module.exports = router;
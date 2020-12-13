const router = require('express').Router();

router.get('/books', async (req, res) => {
    // eslint-disable-next-line
    console.log(req, res);
    res.json({hi: 'world'})
});

module.exports = router;

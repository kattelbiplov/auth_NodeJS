const express = require('express');
//const authController = require('../controllers/auth');
const router = express.Router();



router.post('/register', (req, res, err) => {

    if (!err) {
        console.log(req.body);
    } else {
        console.log(err)
    }
})

module.exports = router;
let obj = require('./logger.js')

const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {

    //obj.printMyMassage("thorium ")
       console.log(obj.url)

    res.send('My first ever api!')
});

module.exports = router;
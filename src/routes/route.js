let obj = require('../logger/logger.js')

const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {

    //obj.printMyMassage("thorium ")
       console.log(obj.welcome)

    res.send('welcome to my application. I am komal and a part of FunctionUp Thorium cohort')
});

module.exports = router;
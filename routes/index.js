var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("Hello world");
    res.send("Helllow");
});

module.exports = router;

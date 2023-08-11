var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.send("soy la pagina de nosotros");
});

module.exports = router;
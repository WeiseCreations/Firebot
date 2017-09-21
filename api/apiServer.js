var express = require("express");
var bodyParser = require("body-parser");
var api = express();

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(api);

api.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

var server = api.listen(7473, function () {
    console.log("Listening on port %s...", server.address().port);
});
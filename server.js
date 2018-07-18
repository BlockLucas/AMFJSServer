var express = require('express'),
    port = process.env.PORT || 3000;

var app = express();

app.use(express.json());

app.listen(port);

var routes = require('./api/routes/routes');
routes(app);

var amf = require('amf-client-js')
amf.AMF.init().then ( function () {
    console.log("AMF.init completed");
})

console.log('AMF JS server started, port: ' + port);

'use strict';

var parser = require('./parser.js').parser;
var validator = require('./validator.js').validator;
var resolver = require('./resolver.js').resolver;


exports.parse = function(req, res) {
    var filePath = req.body.path;
    var apiKind = req.body.apiKind;
    console.log("path = " + filePath);
    console.log("apiKind = " + apiKind);

    parser.parse(apiKind, "file", filePath).then(
        function(unit) {
            console.log("Parse OK");
            res.send("Parse OK")
        },
        function(exception) {
            console.log("Parse Exception");
            console.log(exception);
            res.send("Parse Error")
            // res.send(exception)
        }
    )
};

exports.validate = function(req, res) {
    var filePath = req.body.path;
    var apiKind = req.body.apiKind;
    console.log("path = " + filePath);
    console.log("apiKind = " + apiKind);

    parser.parse(apiKind, "file", filePath).then(
        function(unit) {
            console.log("Parse OK");
            validator.validate(apiKind, unit).then(
                function(report) {
                    console.log("Validation conforms = " + report.conforms);
                    res.set('Content-Type', 'application/json');
                    let reportJson = {
                        conforms: report.conforms
                    };
                    reportJson["results"] = [];
                    for (var i = 0, len = report.results.length; i < len; i++) {
                        let r = report.results[i];
                        let rj = {
                            message: r.message,
                            validationId: r.validationId,
                            level: r.level,
                            location: r.location,
                            position: r.position.toString()
                        };
                        reportJson["results"].push(rj)
                    }
                    res.send(JSON.stringify(reportJson, null, 2))
                },
                function(exception) {
                    console.log("Validation Exception");
                    console.log(exception);
                    res.status(500);
                    res.send("Validation Error")
                }
            )
        },
        function(exception) {
            console.log("Parse Exception");
            console.log(exception);
        }
    )
};

exports.resolve = function(req, res) {
    var filePath = req.body.path;
    var apiKind = req.body.apiKind;
    console.log("path = " + filePath);
    console.log("apiKind = " + apiKind);

    parser.parse(apiKind, "file", filePath).then(
        function(unit) {
            console.log("Parse OK");
            try {
                resolver.resolve(apiKind, unit);
                console.log("Resolution OK");
                res.send("Resolution OK")
            } catch(err) {
                console.log("Resolution Error");
                console.log(err);
                res.send("Resolution Error")
            }
        },
        function(exception) {
            console.log("Parse Exception");
            console.log(exception);
        }
    )
};

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
                    if (report.conforms) {
                        console.log("Validation OK");
                        console.log(report.toString());
                        res.send("Validation OK")
                    } else {
                        console.log("Validation Error");
                        console.log(report.toString());
                        res.send("Validation not conform")
                    }
                },
                function(exception) {
                    console.log("Validation Exception");
                    console.log(exception);
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

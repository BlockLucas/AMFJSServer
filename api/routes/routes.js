'use strict';
module.exports = function(app) {
    var amfController = require('../controllers/amf/amfController');

    // Routes
    app.route('/amf/parse').post(amfController.parse);
    app.route('/amf/validate').post(amfController.validate);
    app.route('/amf/resolve').post(amfController.resolve);
};

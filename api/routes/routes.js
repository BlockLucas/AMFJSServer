'use strict';
module.exports = function(app) {
    var controller = require('../controllers/controller');

    // Routes
    app.route('/parse').post(controller.parse);
    app.route('/validate').post(controller.validate);
    app.route('/resolve').post(controller.resolve);
};

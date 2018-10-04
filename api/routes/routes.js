import amfController from '../controllers/amf/controller'

export default function routes(app) {
    app.route('/amf/parse').post(_ => amfController.parse);
    app.route('/amf/validate').post(_ => Validator.validate);
    app.route('/amf/resolve').post(_ => amfController.resolve);
}

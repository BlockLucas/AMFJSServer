import {AMF} from 'amf-client-js';

export default class Validator {
    static validate(apiKind, doc) {
        const profile = Validator.getProfile(apiKind);
        const messageStyle = Validator.getMessageStyle(apiKind);

        return AMF.Core.validate(doc, profile, messageStyle)
    };

    static getProfile(apiKind) {
        if (apiKind === "RAML 1.0") return AMF.ProfileNames.RAML;
        if (apiKind === "RAML 0.8") return AMF.ProfileNames.RAML08;
        if (apiKind === "OAS 2.0") return AMF.ProfileNames.OAS;
        return AMF.ProfileNames.AMF
    };

    static getMessageStyle(apiKind) {
        if (apiKind === "RAML 1.0") return AMF.MessageStyles.RAML;
        if (apiKind === "RAML 0.8") return AMF.MessageStyles.RAML08;
        if (apiKind === "OAS 2.0") return AMF.MessageStyles.OAS;
        return AMF.MessageStyles.AMF
    }
};

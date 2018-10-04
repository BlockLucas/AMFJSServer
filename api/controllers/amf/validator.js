var amf = require('amf-client-js');

var validator = {
    validate: function (apiKind, doc) {
        var profile = this.getProfile(apiKind);
        var messageStyle = this.getMessageStyle(apiKind);

        return amf.Core.validate(doc, profile, messageStyle)
    },

    getProfile: function (apiKind) {
        if (apiKind === "RAML 1.0") return amf.ProfileNames.RAML;
        if (apiKind === "RAML 0.8") return amf.ProfileNames.RAML08;
        if (apiKind === "OAS 2.0") return  amf.ProfileNames.OAS;
        return amf.ProfileNames.AMF
    },

    getMessageStyle: function (apiKind) {
        if (apiKind === "RAML 1.0") return amf.MessageStyles.RAML;
        if (apiKind === "RAML 0.8") return amf.MessageStyles.RAML08;
        if (apiKind === "OAS 2.0") return  amf.MessageStyles.OAS;
        return amf.MessageStyles.AMF
    }
};

exports.validator = validator;
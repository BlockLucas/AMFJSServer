var amf = require('amf-client-js');

var resolver = {
    resolve: function (apiKind, unit, resolutionPipeline) {
        var resolver = this.getResolver(apiKind);
        return resolver.resolve(unit, resolutionPipeline)
    },

    getResolver: function (apiKind) {
        if (apiKind === "RAML 1.0") return amf.Core.resolver("RAML 1.0");
        if (apiKind === "RAML 0.8") return amf.Core.resolver("RAML 0.8");
        if (apiKind === "OAS 2.0") return  amf.Core.resolver("OAS 2.0");
        return amf.Core.resolver("AMF Graph")
    }
};

exports.resolver = resolver;
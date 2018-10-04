import {AMF} from 'amf-client-js';

export default class Resolver {
    static resolve(apiKind, unit, resolutionPipeline) {
        const resolver = Resolver.getResolver(apiKind);
        return resolver.resolve(unit, resolutionPipeline)
    };

    static getResolver(apiKind) {
        if (apiKind === "RAML 1.0") return AMF.Core.resolver("RAML 1.0");
        if (apiKind === "RAML 0.8") return AMF.Core.resolver("RAML 0.8");
        if (apiKind === "OAS 2.0") return AMF.Core.resolver("OAS 2.0");
        return AMF.Core.resolver("AMF Graph")
    }
};

import {AMF} from 'amf-client-js';

export default class Parser {
    static parse(apiKind, mode, content) {
        if (mode === 'text') {
            return this.parseString(apiKind, content)
        } else {
            return this.parseFile(apiKind, content)
        }
    };

    static parseFile(apiKind, url) {
        console.log("Parsing file...");
        const parser = Parser.getParser(apiKind);
        return parser.parseFileAsync(url)
    };

    static parseString(apiKind, api) {
        console.log("Parsing string...");
        const parser = Parser.getParser(apiKind);
        return parser.parseStringAsync(api)
    };

    static getParser(apiKind) {
        console.log(apiKind);
        if (apiKind === "RAML 1.0") return AMF.Core.parser("RAML 1.0", "application/yaml");
        if (apiKind === "RAML 0.8") return AMF.Core.parser("RAML 0.8", "application/yaml");
        if (apiKind === "OAS 2.0") return AMF.Core.parser("OAS 2.0", "application/json");
        return AMF.Core.parser("AMF Graph", "application/ld+json")
    }
};
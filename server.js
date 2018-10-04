import {AMF} from 'amf-client-js';
import express from 'express';
const port = process.env.PORT || 3000;
import routes from './api/routes/routes';

const app = express();
app.use(express.json());
app.listen(port);
routes(app);

AMF.init().then(function () {
    console.log("AMF.init completed");
});

console.log('AMF JS server started, port: ' + port);

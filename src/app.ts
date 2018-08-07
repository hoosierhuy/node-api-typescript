import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { CrmRoutes } from './routes/crmRoutes';

class App {
    public app: express.Application;
    public routePrv: CrmRoutes = new CrmRoutes();
    public mongoDbUrl: string = 'mongodb://localhost:27017/CRMdb'; // If CRMdb doesn't exists, this will create a new db called CRMdb

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        // application/json type post data
        this.app.use(bodyParser.json());

        // application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoDbUrl, { useNewUrlParser: true });
    }
}

export default new App().app;

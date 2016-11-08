import {AtExpress} from 'at-express';
import {Injectable} from 'fluency-injection';

@Injectable
export class PortfolioAPI {
  constructor() {
    const atExpress = new AtExpress();
    atExpress.scanGlob('**/routes/**/*.routes.js');
    atExpress.setPort(process.env.PORT || 8081);
    atExpress.start().then(() => {
      console.log('Started server.');
    });
  }
}

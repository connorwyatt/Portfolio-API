import {Application, RequestHandler} from 'express';
import {Inject, Injectable} from 'fluency-injection';
import {JSON_BODY_PARSER_TOKEN, REST_APP_TOKEN} from './tokens';

@Injectable
export class PortfolioAPI {
  constructor(
      @Inject(REST_APP_TOKEN) restApp: Application,
      @Inject(JSON_BODY_PARSER_TOKEN) jsonBodyParser: RequestHandler) {
    restApp.listen(8081, () => {
      console.log(`Application is listening on port 8081`);
    });

    restApp.use(jsonBodyParser);
  }
}

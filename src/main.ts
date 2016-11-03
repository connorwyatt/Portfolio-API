import 'reflect-metadata';
import {json} from 'body-parser';
import * as Express from 'express';
import {bootstrap, provide} from 'fluency-injection';
import {PortfolioAPI} from './app/PortfolioAPI';
import {JSON_BODY_PARSER_TOKEN, REST_APP_TOKEN} from './app/tokens';

provide(REST_APP_TOKEN, {useValue: Express()});

provide(JSON_BODY_PARSER_TOKEN, {useValue: json()});

bootstrap(PortfolioAPI);

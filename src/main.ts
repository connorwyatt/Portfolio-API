import 'reflect-metadata';
import {json} from 'body-parser';
import {bootstrap, provide} from 'fluency-injection';
import {PortfolioAPI} from './app/PortfolioAPI';
import {JSON_BODY_PARSER_TOKEN} from './app/tokens';

provide(JSON_BODY_PARSER_TOKEN, {useValue: json()});

bootstrap(PortfolioAPI);

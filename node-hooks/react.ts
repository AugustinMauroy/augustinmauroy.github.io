// @ts-ignore not backported to 22 and we are on 23
import { register, registerHooks } from 'node:module';
import 'global-jsdom/register';

registerHooks('nodejs-loaders/dev/alias', import.meta.url);
register('@nodejs-loaders/tsx', import.meta.url);
register('@nodejs-loaders/css-module', import.meta.url);

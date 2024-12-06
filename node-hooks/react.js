import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
import 'global-jsdom/register';

register('nodejs-loaders/testing/css-module', pathToFileURL('./'));

import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
import jsdom from 'jsdom';

register('nodejs-loaders/testing/css-module', pathToFileURL('./'));

// We doesn't need to load any html/css because it's handle by testing-library
const { document } = new jsdom.JSDOM().window;

/**
 * Make the JSDOM global objects available to the Node.js environment.
 */
global.document = document;
global.window = document.defaultView;

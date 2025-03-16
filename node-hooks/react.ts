import { register } from 'node:module';
import { GlobalRegistrator } from '@happy-dom/global-registrator';

register('@nodejs-loaders/alias', import.meta.url);
register('@nodejs-loaders/tsx', import.meta.url);
register('@nodejs-loaders/css-module', import.meta.url);

GlobalRegistrator.register({
  url: 'http://localhost:3000',
  width: 1920,
  height: 1080,
});

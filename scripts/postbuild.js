import { copyFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { styleText } from 'node:util';

const buildDir = resolve('out');

Promise.all([
  copyFile(join(buildDir, 'en.html'), join(buildDir, 'index.html')),
  copyFile(join(buildDir, 'en/404.html'), join(buildDir, '404.html')),
])
  .then(() => {
    console.log(`${styleText('green', '✓')} Post build script completed`);
  })
  .catch(console.error);

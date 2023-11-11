import fs from 'node:fs/promises';
import path from 'node:path';

const basePath = path.join(process.cwd(), 'i18n', 'locales');

try {
  const allMessageFiles = await fs.readdir(basePath);

  for (const value of allMessageFiles) {
    const filePath = path.join(basePath, value);
    const fileContent = JSON.parse(await fs.readFile(filePath, 'utf-8'));

    const orderedContent = Object.keys(fileContent)
      .sort()
      .reduce((obj, key) => {
        obj[key] = fileContent[key];
        return obj;
      }, {});

    await fs.writeFile(
      filePath,
      JSON.stringify(orderedContent, null, 2) + '\n',
      'utf8'
    );
  }
  // eslint-disable-next-line no-console
  console.info('Files have been read, sorted, and written successfully.');
} catch (error) {
  console.error('Error occurred: ', error);
}

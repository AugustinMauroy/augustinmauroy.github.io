export const getAcronymFromString = (str: string) =>
  [...(str.trim().match(/\b(\w)/g) || '')].join('').toUpperCase();

export const stringToSlug = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

import getMessages from '../getMessage';

describe('getMessages', () => {
  it('should return the messages for the specified language', () => {
    const messages = getMessages('fr');
    expect(messages).toBeTruthy();
  });

  it('should throw an error if the default language file is not found', () => {
    jest.spyOn(process, 'cwd').mockReturnValue('/path/to/invalid/dir');
    expect(() => getMessages('en')).toThrowError(
      'No language file found, searchfile /path/to/invalid/dir/i18n/locales/en.json'
    );
  });
});

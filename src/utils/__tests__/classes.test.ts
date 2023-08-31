import { classes } from '../classes';

describe('Classes', () => {
	const input = ['a', 'b', 'c'];
	const expected = 'a b c';

	it('should return a string', () => {
		expect(typeof classes(input)).toBe('string');
	});

	it('should return a string with the expected value', () => {
		expect(classes(input)).toBe(expected);
	});
});

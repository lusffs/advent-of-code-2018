const { part1 } = require('./');

test('change of +1, +1, +1 should equal 3', () => {
  const input = "+1\n+1\n+1\n";
  expect(part1(input)).toBe(3);
});

test('change of +1, +1, -2 should equal 0', () => {
  const input = "+1\n+1\n-2\n";
  expect(part1(input)).toBe(0);
});

test('change of -1, -2, -3 should equal -6', () => {
  const input = "-1\n-2\n-3\n";
  expect(part1(input)).toBe(-6);
});

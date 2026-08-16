const { sum } = require('./index');

describe('Foundations Exercise: Sum Function', () => {
  it('should correctly add two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(10, 20)).toBe(30);
  });

  it('should correctly add negative numbers', () => {
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(-5, 5)).toBe(0);
  });

  it('should correctly add zero', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, 0)).toBe(0);
  });
});

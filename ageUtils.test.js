// ageUtils.test.js
const { isAdult } = require('./ageUtils');

test('debería devolver true si la persona tiene más de 18 años', () => {
    expect(isAdult(20)).toBe(true);
});

test('debería devolver false si la persona tiene menos de 18 años', () => {
    expect(isAdult(15)).toBe(false);
});

it('should return true if the person is exactly 18 years old', () => {
    expect(isAdult(18)).toBe(true);
})
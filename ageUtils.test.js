// ageUtils.test.js
const { esMayorDeEdad } = require('./ageUtils');

test('debería devolver true si la persona tiene más de 18 años', () => {
    expect(esMayorDeEdad(20)).toBe(true);
});

test('debería devolver false si la persona tiene menos de 18 años', () => {
    // IMPLEMENTAR
});

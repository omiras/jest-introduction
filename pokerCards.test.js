// TODO: Importar selectCard !!
const { selectCard } = require('./pokerCards');

it('should select a card if it exists in the card array and then remove it', () => {
    const deck = ['A♠', '2♠', '3♠', '4♠', '5♠'];

    const selectedCard = selectCard(deck, '3♠');

    expect(selectedCard).toBe('3♠');
    expect(deck).not.toContain('3♠');
    expect(deck).toHaveLength(4);
});

it('should select a card if it exists as the first element of the array and then remove it', () => {
    // Preparar el test (Arrange)
    const deck = ['A♠', '2♠', '3♠', '4♠', '5♠'];

    // Ejecutar la función (Act)
    const selectedCard = selectCard(deck, 'A♠');

    // Realizar las aserciones (Assert)
    expect(selectedCard).toBe('A♠');
    expect(deck).not.toContain('A♠');
    expect(deck).toHaveLength(4);
});

it('should return undefined if you try to select card that does not exists in the array. The array should remain same length and the card should still be present', () => {
    // Preparar el test (Arrange)
    const deck = ['A♠', '2♠', '3♠', '4♠', '5♠'];

    // Ejecutar la función (Act)
    const selectedCard = selectCard(deck, '8♠');

    // Realizar las aserciones (Assert)
    expect(selectedCard).toBe(undefined);
    expect(deck).not.toContain('8♠');
    expect(deck).toStrictEqual(['A♠', '2♠', '3♠', '4♠', '5♠']);

    expect(deck).toHaveLength(5);
});

// Dos tests más, cuando el array de cartas tan solo tiene un elemento
it('should return the only only card of an array with one element and leave the array empty', () => {
    // Preparar el test (Arrange)
    const deck = ['A♠'];

    // Ejecutar la función (Act)
    const selectedCard = selectCard(deck, 'A♠');

    // Realizar las aserciones (Assert)
    expect(selectedCard).toBe('A♠');
    expect(deck).toHaveLength(0);
})

it('should return undefined if the array has only one element and we do not select the only card. The array should remain untouched.', () => {
    // Preparar el test (Arrange)
    const deck = ['A♠'];

    // Ejecutar la función (Act)
    const selectedCard = selectCard(deck, 'Q♠');

    // Realizar las aserciones (Assert)
    expect(selectedCard).toBe(undefined);
    expect(deck).toStrictEqual(['A♠']);
    expect(deck).toHaveLength(1);

})
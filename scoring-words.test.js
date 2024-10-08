const { high } = require('./scoring-words');

it('should return taxi for "man i need a taxi up to ubud"', () => {
    const words = "man i need a taxi up to ubud";

    const maxPointsWord = high(words);

    expect(maxPointsWord).toBe("taxi");
})

it('should return volcano for "what time are we climbing up the volcano"', () => {
    const words = "what time are we climbing up the volcano";

    const maxPointsWord = high(words);

    expect(maxPointsWord).toBe("volcano");
})


it('should return semynak for \'take me to semynak\'', () => {
    const words = "take me to semynak";

    const maxPointsWord = high(words);

    expect(maxPointsWord).toBe("semynak");
})

it('should return the first word in case the second would score the same', () => {
    const words = "aa b"; // ambas puntuan 2 puntos pero debo devolver la primera

    const maxPointsWord = high(words);

    expect(maxPointsWord).toBe("aa");
})

it('should return the only word in the case the string has only one word', () => {
    const words = "pepe";

    const maxPointsWord = high(words);

    expect(maxPointsWord).toBe("pepe");
})

it('should return a word with all the vowels in case there is one present', () => {
    const words = "I think education is the most valuable investment in a modern state";

    const maxPointsWord = high(words);

    expect(maxPointsWord).toBe("education");
})




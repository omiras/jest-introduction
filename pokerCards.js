function shuffleDeck(deck) {
    return deck.sort(() => Math.random() - 0.5); // Función para mezclar el array
}

function selectCard(deck, card) {
    const cardIndex = deck.indexOf(card);
    if (cardIndex > -1) {
        const removedCard = deck.splice(cardIndex, 1)[0]; // Elimina la carta
        shuffleDeck(deck); // Mezcla la baraja después de eliminar la carta
        return removedCard; // Devuelve la carta eliminada
    }
    return undefined; // La carta no estaba en la baraja
}


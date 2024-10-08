# Usando JEST para probar nuestro código

Recuerda instalar las dependencias con 
`npm install`

¡Atención! Los ejercicios están en diferentes carpetas.


## Scoring Words

### Iteración 1A: Escribir los tests

Una de nuestras compañeras han implementado un algoritmo  y queremos probar mediante test automatizados si realmente funcionan. **NO MIRES** el fichero _scoring-words.js_. Puees leer el enunciado original en este [enlace](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272) 

Implementa los tests automatizados en _scoring-words.test.js_. Concretamente nos han dicho que es suficiente probar para los tests para los siguientes casos:

```
high('man i need a taxi up to ubud') --> valor esperado 'taxi'
high('what time are we climbing up the volcano') --> Valor esperado: 'volcano'
high('take me to semynak') --> Valor esperado: 'semynak'
high('aa b') --> Valor esperado: 'aa'
```

Escribe un test cada vez y ejecútalo con: 
Para ejecutar los tests:
`npm test`

El último test debería fallar. Abre el fichero _scoring-words.js_ y trata de solucionarlo

## [Difícil] Nueva funcionalidad: Las vocales ganan

Quieren implementar una nueva funcionalidad. Si una palabra contiene en algún momento *todas las vocales*, esa palabra gana a todas las demás y hay que devolverla inmediatamente

1. Escribe un test en scoring-words.test.js para probar esta nueva funcionalidad
2. Implementa la funcionalidad en scoring-words.js

Ejemplo:

`high("I think education is the most valuable investment in a modern state") --> valor esperado: 'education'` 


## Poker Cards

Desde la empresa _Poker de Pikachus_ han implementado una funcionalidad por la vamos a implementar la lógica de seleccionar una carta de una baraja de cartas, eliminarla. Además, tras seleccionar la carta, la baraja debe ser mezclada.

La funcionalidad se encuentra en el fichero _pokerCards.js_ y en principio debería ser correcta. 

1. Exportar la función que permite seleccionar una carta
2. Escribir los tests necesarios.  Algunos casos de uso posibles son los siguientes

```
selectCard(['A♠', '2♠', '3♠', '4♠', '5♠'], '3♠'); // Devuelve '3♠'
selectCard(['A♥', 'K♦', '10♣', 'J♠'], 'A♥'); // Devuelve 'A♥'
selectCard(['7♠', '8♦', '9♣'], '10♣'); // Devuelve undefined (la carta no está en la baraja)

```

3. Piensa que tras seleccionar una carta, _el array de cartas es mazclado aleatoriamente_. Es posible que el método .toBe [no sea suficiente](https://jestjs.io/es-ES/docs/next/expect#tocontainitem) para probar que todo funciona según lo esperado.

## Fototeca: Comprobar si una imagen está repetida

1. Abre tu proyecto de la fototeca
2. Encapsula la funcionalidad de comprobar si una URL está repetida en tu array de fotografías en una función
3. Mueve esa función a utils/utils.js. Algo así como

```
// utils.js

/**
 * Comprueba si una imagen está repetida en el array.
 * @param {Array} images - Array de objetos de imagen.
 * @param {string} url - URL de la imagen a comprobar.
 * @returns {boolean} - True si la imagen está repetida, false de lo contrario.
 */
function isImageRepeated(images, url) {
    return images.some(i => i.url.toLowerCase() === url.toLowerCase());
}

module.exports = { isImageRepeated };

```
4. Sigue usando la función en tu fototeca y asegúrate que todo funciona bien
5. Instala Jest
6. Crea varios tests unitario para comprobar la funcionalidad
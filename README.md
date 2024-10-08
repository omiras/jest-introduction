# Usando JEST para probar nuestro código

Recuerda instalar las dependencias con 
`npm install`

## Is Adult

Hemos implementado una función que prueba si una persona es mayor de edad o no (mayor de 18 años). 

1. El primer test está hecho
2. Falta implementar el segundo test, que está preparado
3. Faltaría un caso interesante en el cual comprobamos que pasa si una persona tiene exactamente 18 años




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
`npm run test-scoring-words`

El último test debería fallar. Abre el fichero _scoring-words.js_ y trata de solucionarlo

## [Difícil] Nueva funcionalidad: Las vocales ganan

Quieren implementar una nueva funcionalidad. Si una palabra contiene en algún momento *todas las vocales*, esa palabra gana a todas las demás y hay que devolverla inmediatamente

1. Escribe un test en scoring-words.test.js para probar esta nueva funcionalidad
2. Implementa la funcionalidad en scoring-words.js

Ejemplo:

`high("I think education is the most valuable investment in a modern state") --> valor esperado: 'education'` 


## Poker Cards

Desde la empresa _Poker de Pikachus_ han implementado un juego de cartas de poker. Han implementado la lógica de seleccionar una carta de una baraja de cartas y eliminarla de la misma. Además, tras seleccionar la carta, la baraja debe ser mezclada. Suponemos que *no puede haber* cartas repetidas, y el array de cartas siempre tiene al menos una carta.


La funcionalidad se encuentra en el fichero _pokerCards.js_ y en principio debería ser correcta. Puedes examinar el código sin problema. Luego debes:

1. Exportar la función que permite seleccionar una carta ()
2. Escribir los tests necesarios.  Algunos casos de uso posibles son los siguientes, pero puede haber más tests interesantes:


```
selectCard(['A♠', '2♠', '3♠', '4♠', '5♠'], '3♠'); // Devuelve '3♠' y lo elimina del array de cartas
selectCard(['A♥', 'K♦', '10♣', 'J♠'], 'A♥'); // Devuelve 'A♥' y lo elimina del array de cartas
selectCard(['7♠', '8♦', '9♣'], '10♣'); // Devuelve undefined (la carta no está en la baraja)

```

3. Piensa que tras seleccionar una carta, _el array de cartas es mazclado aleatoriamente_. Es posible que el método .toBe [no sea suficiente](https://jestjs.io/es-ES/docs/next/expect#tocontainitem) para probar que todo funciona según lo esperado.

<details>
  <summary>Ayuda 1</summary>
  Para el <code>selectCard(['A♠', '2♠', '3♠', '4♠', '5♠'], '3♠'); // Devuelve '3♠' y lo elimina del array de cartas` el test debería </code>

  1. Ejecutar la función selectCard y guardar la carta devuelta en una variable
  2. Comprobar is la carta devuelta es exactamente la carta seleccionada
  3. Comprobar que la carta seleccionada NO está ya en el array de cartas
  4. Adicionalmente, podríamos comprobar el tamaño del array a ver si es el esperado.
</details>

Para ejecutar los tests:
`npm run test-poker-cards`


<details>
  <summary>Solución primer test posible</summary>
    <img src="https://oscarm.tinytake.com/media/16c1727?filename=1728399924905_TinyTake08-10-2024-05-05-30_638639967309794202.png&sub_type=thumbnail_preview&type=attachment&width=797&height=296"></img>
</details>



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
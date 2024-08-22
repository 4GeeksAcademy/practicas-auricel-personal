//                              metodos array

//¿Cómo declarar un array?
let myArray = []; // Lista vacia
let myArray = ["Apple", "Orange", "Donkey"]; // Con 3 elementos tipo string
let myArray = new Array(1,2,3,4,5); // ¡No uses esto! Lee a continuación para saber por qué

//Añadiendo elementos (función push)
let myArray = ['Pedro', 'Juan', 'Maria'];
    myArray.push('Chris');
    console.log(myArray); // Esto imprimirá ['Pedro', 'Juan', 'Maria', 'Chris'];

/* En el caso de la iteración de arrays, podemos usarlo para recorrer cada uno de los elementos del array, 
usando la longitud del array como condición.*/

let frutas = ['🍎', '🍌', '🍓']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}

/* También podrías recorrer el array en orden inverso, empezando desde el último elemento hasta el primero,
 usando i-- en lugar de i++.*/

let frutas = ['🍎', '🍌', '🍓']

for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]) // imprime el elemento en la posición i inverso ['🍓', '🍌','🍎' ]
} 
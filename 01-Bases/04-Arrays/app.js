// Declarar un array 

const autos = ['BMW','Volvo','Ferrari']; // array de tipo string
//                        0       1       2      
console.log(autos); // ['BMW','Volvo','Ferrari']
console.log(autos[0]); // BMW
console.log(autos[1]); // Volvo
console.log(autos[2]); // Ferrari

// Modificar una posicion del array

autos[3] + 'Mercedez Benz'; // ['BMW','Volvo','Mercedez Benz']


// Los array en JS pueden contener distintos tipo de datos
const persona = ['Lionel','Messi',34, true];
console.log(persona);

const empty = []; // Declaramos un array vacio
empty [0] = 'Milanesa';
empty [1] = 'Tomate';
empty [2] = 'Papas';
empty [3] = 'Lechuga';

/********* Metodos de Arrays*********/
const frutas = ['Naranjas', 'Mandarinas', 'Manzanas' , 'Bananas'];

// El largo de un array
console.log(frutas.length);

// Agregar un elemento al final del array (push)

frutas.push('Peras');
console.log(frutas);

// Eliminar un elemento al final de un array
frutas.pop();
console.log(frutas);

// Agrega unelemento al principio del array (unshift)
frutas.unshift('Sandias');
console.log(frutas);

// Eliminar un elemento al principio de un array
frutas.shift('Sandias');
console.log(frutas);


// Fusionar un array (concat)
const verduras = ['Lechuga','Papa','Morron','Acelga']
const mix = frutas.contact(verduras);
console.log(mix);


// Ordenar un array alfabeticamente
const ABC = ['c','b','a']
console.log(ABC); // Antes del metodo sort

ABC.sort(ABC);
console.log(ABC); // Despues del metodo sort

// revertir un array (reverse)
console.log(frutas.reverse);

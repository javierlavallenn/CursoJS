// Variables

// Vieja forma de declarar variables
var name = "javier"; // Scope global

// Nueva forma de declarar variables
let day = "monday"; // Scope local
const age = 17; // Scope mixto (global y local)

const fullName = "Javier Lavallen"; // type string
console.log(`Mi nombre es: ${fullName}`);

const PI = 3.141592; // type float
let street = 315; // type int
let istTrue = true; // type boolean

/******************** Ejercicios*******************/

// 0) Solicitar al usuario su nombre y mostrarlo por consola. Luego Mostrar un alert que salude
//   diciendo Hola y el nombre de la persona. Luego solicitar el apellido y que salude por
//   consola con el nombre completo (Ej: Hola Florencia Andres).

// Solicitamos al usuario que ingrese dos numeros
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

// Luego saludamos al usuario y mostramos el nombre y el apellido por consola
console.log(`Hola  ${nombre} ${apellido} `);



// 1) Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos.

// Solicitamos al usuario que ingrese dos numeros
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));

// Creamos la variable suma, para sumar los datos que el usuario ingrese
let suma = numero1 + numero2;

// Mostramos por consola la suma total de los numeros ingresados
console.log(`La suma total es ${suma}  `);



// 2) Solicitar al usuario la edad que cumple o cumplió este año y calcular en qué año nació y
//  mostrar un mensaje por consola (Ej: Usted nació en 1974)

// Pedimos al usuario que ingrese su edad cumplida
let edad = parseInt(prompt("Ingresa la edad que cumplio este año"));

// Creamos una variable y le restamos el año actual a la edad ingresada
let año = 2022 - edad;

// Mostramos por consola el año en que nacio
console.log(`Usted nacio en el año: ${año}`);



// 3) Mostrar al usuario su balance de cuenta (Numero asignado por nosotros). Consultar 
//    cuánto dinero desea retirar y mostrar el nuevo balance.

// Creamos un avariable con un valor asignado por nosotros y otra vcariable pidiendo que ingrese el dinero a retirar
let cuenta = 50000;
let balance = parseInt(prompt('Cuanto dinero desea retirar?'));
// Creamos una variable total, y restamos el valor de cuenta al de balance
let total = cuenta - balance;

// Imprimimos el total por consola
console.log(`Su nuevo balance de cuenta es: ${ total}`);



// 4) Solicitar al usuario 3 notas, calcular el promedio y mostrarlo por consola.

// Solicitamos al usuario 3 notas
let nota1 = parseInt(prompt('Ingrese la primer nota'))
let nota2 = parseInt(prompt('Ingrese la segunda nota'))
let nota3 = parseInt(prompt('Ingrese la tercer nota'))

// Creamos una variable totalNotas para sumar las 3 notas ingresadas
let totalNotas  = nota1 + nota2 + nota3 ;
// Creamos la variable promedio para dividir las notas sumadas anteeriormente
let promedio =  totalNotas / 3;
// Mostramos por pantalla el promedio de las notas
console.log(`El promedio de notas es: ${ promedio}`);


// 5) Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y 
// pasarlo a pies, centimetros y pulgadas. Mostrar por consola los tres resultados.

let metros = parseInt(prompt('Ingrese la medida en metros'));
// Mostramos por consola  las medidas en metros
console.log(`La medida en metros es: ${metros}`);

let pies = metros * 3;
// Mostramos por consola las medidas en pies
console.log(`La medida en pies es: ${pies}`);

let cm = metros * 100;
// Mostramos por consola la medidas en centimetros
console.log(`La medida en centimetros es: ${cm}`);

let pulgadas = metros * 39
// Mostramos por consola las medidas en pulgadas
console.log( `La medida en pulgadas es: ${pulgadas}`);


// 6) Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar 
// al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.

let n1 = parseInt(prompt('Ingrese un numero'));
let n2 = parseInt(prompt('Ingrese otro nuemero'));
let resultado = n1 + n2;
// Mostramos el resultado de la suma por consola
console.log(`EL resultado de la suma es: ${resultado}`);

// Creamos una nueva variable y pedimos al usuario un tercer numero
let n3 = parseInt(prompt('Ingrese un tercer numero'));

// Creamos la variable sumaTotal para sumar el resultado de n1 + n2 y multiplicarlo por n3
let sumaTotal = n1 + n2 * n3

// Mostramos por consola la suma total
console.log(`El resultado final es: ${sumaTotal}`);


// 7) Armar un conversor de minutos a segundos. Solicitar al usuario un número de minutos y 
// mostrar por alert la cantidad de segundos a la que equivale.

// Creamos dos variables, una para pedirle al usuario que ingrese los minutos y la otra para el resultado de la multiplicacion
let conversor = parseInt(prompt('Ingrese una cantidad de minutos'));
let resultados = conversor *60;
// Creamos el alert mostrando los resultados con un mensaje en pantalla
alert (`La cantidad de segundos es: ${resultados}`);





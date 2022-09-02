// Variables

// Vieja forma de declarar variables
var name = javier; // Scope global

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

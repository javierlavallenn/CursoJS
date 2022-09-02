// Condicionales

let email = "Tomas@gmail.com";

// Esto es una condicion

if (email === "Tomas@gmail.com") {
  // Si el email es correcto  ejecuta este bloque de codigo
  console.log(` Email: ${email}`);
  let isCorrect = true;
  console.log("El email es correcto :" + isCorrect);
} else {
  //Si el email no es correcto ejecuta este bloque de codigo
  console.log(` El email${email} no es correcto`);
  //
}

let hunger = true;
let thirst = true;

if (hunger === true) {
  console.log("tengo hambre");
}

// if(hunger === false)
if (!hunger) {
  console.log("No tengo hambre");
}

//if(hunger === true && thirst === true)
if (hunger || thirst) {
  console.log("tengo hambre y sed");
}

if (hunger != false) {
  console.log("Hunger es distinto de false");
}
if (hunger != true) {
  console.log("Hunger es igual a true");
}

/**************************Ejercicios***************************/

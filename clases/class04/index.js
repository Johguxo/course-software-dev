console.log("hola, soy Johann")
const a = 5;
const b = 6;

console.log(a+b);

for (let i = 3 ; i <= 10 ; i = i + 2) {
  console.log("Numero: ", i)
}

for (let i = 5 ; i < 20 ; i = i + 3 ) {
  console.log("Numero: ", i)
}
//Empiece en 20, que sea mayor que 2 y que disminuya de 2 en 2.
for (let i = 20 ; i > 2 ; i = i - 2 ) {
  console.log("Number: ", i )
}

console.log("----------------------")

let m, n;
m = 20/a;
n = 20/b;
if (m == 4) {
  console.log("El resultado de m es 4")
}

if ( n == 4 ) {
  console.log("El resultado de n es 4")
} else {
  console.log("El resultado de n es distinto de 4")
}
console.log("----------------------")

//Tengo una clase de alumnos con edades de 9 a los 28 años, quiero saber 
//cuantos de ellos tienen edades "pares"

let count = 0;
for (i = 9 ; i <= 28 ; i++) {
  if ( i % 2 == 0 ) {
    count++;
  }
}
console.log("La respuesta es: ", count)
console.log("----------------------")

//Tengo amigos con edades de 20 a los 58 años, quiero saber 
//cuantos de ellos tienen edades multiplos de 4

count = 0;
for (i = 20 ; i <= 58 ; i++) {
  if ( i % 4 == 0 ) {
    count++;
  }
}
console.log("La respuesta es: ", count)


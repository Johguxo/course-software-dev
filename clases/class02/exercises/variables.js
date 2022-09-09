var x = 20;

console.log(x);

let y = 25;

console.log(y);

const a = 30;

console.log(a);

//Puntos importantes

let m;

console.log(m); //undefined

let n = true;

console.log(n);

n = false;

console.log(n);

n = 0

console.log(n);

// Incrementar o disminuir valores

let score = 20;
score = score - 5;
console.log(score);
score--
console.log(score);

score = score + 2;
console.log(score);
score++;
console.log(score);

const p = 20;
//Es error, por que p es una constante, no cambia!!
//p = 15;
//console.log(p);

//SCOPE DE UNA VARIABLE
function suma(a) {
  console.log("La suma es:", a+2)
}

suma(3);
suma(6);



function varTest() {
  var x = 30;
  if (true) {
    var x = 50;
    console.log("la variable x: ", x)
  }
  console.log("la variable x otra vez: ", x)
}

varTest();

function letTest() {
  let y = 30;
  if (true) {
    let y = 50;
    console.log("la variable y: ", y)
  }
  console.log("la variable y otra vez: ", y);
}

letTest();

//CONDICIONES
if (5 < 3) {
  console.log("es verdadero")
} else {
  console.log("es falso")
}

if ('21' == 21) {
  console.log("es verdura")
} else {
  console.log("es fake")
}

//BUCLES

for (let i = 0 ; i <= 5 ; i++) {
  console.log(i)
}

//Arrays
let array = ['A', 'B', 'C', 'D'];

console.log(array)

console.log("Cantidad de elementos: ", array.length)
console.log(array[2]) //'C'

for (let i = 0; i < array.length; i++) {
  console.log("El valor de la posición",i, "es: ", array[i])
}


let arr = [2,3,4];

console.log(arr);

arr.push(5);

console.log(arr);

arr.push("johann");

console.log(arr);

let list = [];
for (let i = 3 ; i < 10 ; i++) {
  list.push(i)
}
console.log(list);
console.log("La lista tiene: ", list.length , " elementos")

//Crear una lista del 20 al 150, pero solo con numeros multiplos de 3

let list_mult = [];
for (let i = 20 ; i <= 150 ; i++) {
  if ( i % 3 == 0) {
    list_mult.push(i)
  }
}
console.log("La lista tiene: ", list_mult.length , " elementos")
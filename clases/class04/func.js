function sum(a,b) {
  const result = a + b;
  return result
}

function division(a,b) {
  const result = a / b;
  return result;
}

console.log(sum(4,6));
console.log(division(7,3))

//Lista del 3 al 20 y cada elemento de esta lista va a sumarse con el numero de su indice y eso genera elementos
//en otra lista

let list = [];
for ( let i = 3 ; i <= 20; i++ ){
  list.push(i);
}

//console.log(list)
//console.log(list.length)
let list_2 = [];
let value, result;
for ( let i = 0 ; i < list.length ; i++ ) {
  value = list[i];
  //console.log("valor: ",value," indice: ",i, " suma: ", value+i)
  if (i == 0) {
    result = sum(value,i);
  } else {
    result = sum(value,i) + division(value,i);
  }
  
  list_2.push(result)
}
console.log(list_2)


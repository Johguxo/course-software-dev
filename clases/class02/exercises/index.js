console.log("Johann✨")
console.log(funcionSuma(2,3),"asdas")

let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let form = document.getElementById("form")

form.addEventListener("submit", function funcionSubmit(event) {
  console.log(event)
})



function funcionSuma(a,b) {
  return a+b;
}

const funcionSumaOtraOpcion = (a,b) => {
  return a+b;
}


console.log(funcionSumaOtraOpcion(4,5))

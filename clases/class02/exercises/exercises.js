//Ejercicio:
//Convertidor de temperatura: Crea una página web 
//que pida al usuario la temperatura en 
//grados Celsius (°C), utilizando console(), 
//y devuelva, en la consola, 
//la temperatura en grados Farenheit (°F) 
//utilizando console.log(). 
//La fórmula matemática para pasar de 
//°C a °F es: 
//T(°F) = ( T(°C) × 1.8 ) + 32.


function tempCtoF(celsius) {
  fare = ( celsius * 1.8 ) + 32;
  console.log("Los grados de ", celsius,"°C en F es: ", fare)
}

tempCtoF(25);

//EJERCICIO 2
//Ganancias y pérdidas: Crea un programa que 
//pide los ingresos, los costos y el % de impuestos, 
//y calcula la ganancia después de impuestos.

//ganancia = ingresos - costos + ingresos*impuestos%

//gan(20,4,30) --> 22

function gain(income,costs,taxes){
  gain = income - costs + (income * taxes * 0.01);
  console.log("La ganancia es:",gain);
}

gain(20,4,30);

//EJERCICIO 3
//Iniciales: Crea un programa que pide el nombre y 
//apellido al usuario. El usuario debe ingresar 
//dos palabras separadas por un espacio, 
//por ejemplo: "Ana Martinez". El programa 
//debe devolver las iniciales en mayúsculas. 
//Veamos unos ejemplos: "ana martinez" 
//"Ana Martinez" devuelven las iniciales "AM".
//"Michelle Seguil" y "michelle seguil" devuelven 
//"MS".
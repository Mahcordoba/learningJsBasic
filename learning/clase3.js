// Sumas 
var numero = 1;
numeroes = numero + 1;
numero += 3;
numero ++; // este suma en uno 
// Restas 
var numero2 = 2;
numero2 = numero2 - 1;
numero2 += 2;
numero2 --; // Este resta en uno 
// multiplicacion 
var preciodeVino = 200.3

// en java script cuando hay que multiplicar numeros flotantes hay que hacer un truco ya que este puede no dar resultados exaptos hay fraworks que solucionan esto pero si usas el java puro.

// Math es para usar funciones matematicas que ya estan por defecto en js

var total = Math.round(preciodeVino * 100 * 3)/100;//truco para que salgan mas exapto sin inportar los numeros decimales.
var totalStr = total.toFixed(3); // to fixed se usa para la cantidad de numeros flotantes que quieres que aparescan en el resultado Ojo esto sale en una variable de tipo string
var total2= parseFloat(totalStr);

// Divición

var pizza = 8;
var personas = 2;
var cantidadDePizzasPorPersona = pizza / personas;
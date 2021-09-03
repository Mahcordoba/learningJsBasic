//Existen varios tipos de datos primitivos en js y estos son los siguinetes con el ES6 se agrego uno nuevo que es el simbol toca investigar mas al respecto
//Boolean:  // false/true
//Null:  // nulo o "vacío"
//Undefined: // Cuando una variable es declarada pero aún no tiene un valor asignado 
//Number: // 383839
//String:  // "esto es una string"```

//En esta clase se hablo de los comparadores == y ===

var numero = 2, numeroSrt = '2'
console.log(numero == numeroSrt) //(True) con este comparador solo evalua si son inguales independiente si son del mismo tipo no se recomienda usar este.
console.log(numero === numeroSrt)//(False) En este comparador si importa el tipo de variable y su contenido

var nombrea = 
{
    nombre: 'Miguel'
}
var nombreb = 
{
    nombre: 'Miguel'
}
console.log(nombrea==nombreb) 
console.log(nombrea===nombreb) 
// En objectos los dos van a dar false así a simple vista se vean iguales pero como estos objectos tienen diferentes espacios en memoria los va acaptar como diferentes. 
//para que sean true o se clona el objecto y seran iguales. 


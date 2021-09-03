// Por convención en java scrept para escribir textos se usa la comilla simple
// los punto y comas son obcionales.
var nombre;

nombre = 'Miguel';
var apellido = 'Herrera';
edad = 28;
console.log(`Hola ${nombre} ${apellido}`);
console.log('y su edad es: ' + edad);

edad = '29 años';
console.log('perdon es de ' + edad);

// Ojo en js el lenguaje no es estrictamente tipado lo que hace que las variables cambien su tipo en funcion de lo que se nesesite en el ejemplo anterior la variable edad primero era numerica y luego termino siendo de texto, en este ejemplo tambien se puede obserbar que edad no se le puso var a la hora de declarar y esta funciona normalmente y es que por defecto js crea el var recuerda en js existen tres tipos de variables var let y const 
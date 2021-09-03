var nombre = "Miguel";
var apellido = "Herrera"
// para asignar nombres de funciones y variables se usa el cameCase por convencion en js

// link para leer mas sobre las convenciones de js https://tutobasico.com/convenciones-javascript/

//Para trasformar un texto en mayusculas
var nombreEnMayusculas= nombre.toUpperCase();
// para trasformar un texto en minusculas
var apellidoEnMinusculas=apellido.toLowerCase();
//para obtener tamaños en un string.
var cantidadDeLetrasDelNombre= nombre.length;
//para obtener un caracter en expecifico 
var primeraLetraDelNombre = nombre.charAt(0); 

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

// Other funtion 
//Esta se usa para cuando necesitas mas de dos caracteres selecionas la posicion donde quieres empezar y cuantos caracteres quieres conseguir.
var str = nombre.substr(1,2);
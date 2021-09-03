//Los objetos se crean con {}.
// En lado izquierdo se pone la llave esta puede ser un string o un numero. En el lado derecho se pone el valor de la llave, en este ejemplo una llave es edad y su valor es 28.
// estos tambine pueden tener funciones 
var miguel = 
{
    nombre : 'Miguel',
    apellido: 'Herrera',
    edad: 28
}
var paola = 
{
    nombre: 'Paola',
    apellido: 'Herrera',
    edad:26
}
// funtion con versión larga 
function imprimirNombreEnMayusculas(persona)
{
    console.log(persona.nombre.toUpperCase())
}
imprimirNombreEnMayusculas(miguel)
// Funcion con una version mas corta podemos llamar atributos de un objeto desde los parametros de una funcion pero ojo si se hace esto el objeto que se envia siempre debe tener esto si de casualidad no se envia este enviara un error a la consola. Para seleccionar un atributo de un objecto en los parametros de una función dentro de las llaves se escribe {} y dentro se escribe el parametro que se necesita. 
function imprimirNombreToUpper({ nombre })
{
    console.log(nombre.toUpperCase())
}

imprimirNombreToUpper(paola)
// Mas de funciones objetos
function imprimirEdad(persona)
{
    // var edad = persona.edad
    var { edad } = persona
    console.log(edad)
}
//En la funcion de arriba creamos un na variable con corchetes, esto se usa para obtener un valor del objeto referente a la variable en este caso era edad.

// mas sobre objectos y funciones comportamientos js

function edadEvil (persona)
{
    persona.edad += 1
}// esta función modificara la edad del objeto en cuestion, esto se hace por si quieres modificar el objecto original 
function edadBack ({ edad })
{
    edad += 1
}// este no modificara la edad del objecto 
function edad (persona)
{
    return{
        ...persona, //en esta linea de codigo lo que se esta diciendo es que copias todo el objecto de persona y retornalo
        edad: persona.edad + 1, // Esto para modificar puntos especificos del codigo
        altura: 1.64 // Tambien se le pueden agregar nuevos atributos al objecto
    }
}

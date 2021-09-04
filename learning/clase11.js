var personas = [
    {
        nombre: "Miguel",
        estatura: 1.65,
        cantidadLibros: 10
    },
    {
        nombre: "Paola",
        estatura: 1.60,
        cantidadLibros: 23
    },
    {
        nombre: "Andres",
        estatura: 1.80,
        cantidadLibros: 35
    },
    {
        nombre: "Deivid",
        estatura: 1.75,
        cantidadLibros: 45
    },
    {
        nombre: "Felipe",
        estatura: 1.85,
        cantidadLibros: 1
    }
]

const esAlta = ({estatura}) => estatura >= 1.8
// filter nos ayuda a buscar en un array la condicion que nesecitemos ojo esta condicion debe escribirse como una funcion
var personasFiltradas = personas.filter(esAlta)

const esBaja = ({estatura}) => estatura <=1.79
var personasFiltrada = personas.filter(esBaja)

// map es otra funcion de los array que nos permite modificar un array 

const alturaCm = persona => ({// esto lo usamos para cuando queremos retornal algo que lleve bloque
    ...persona,
    estatura: persona.estatura * 100
})
var personasCm = personas.map(alturaCm)
console.log(personasCm)
console.table(personas)// te imprime en consola un tabla con los datos. 
//Las diferencia entre filter() y map() radica en sus callbacks, o sea en lo que retornan.
// filter(): retornará 1 subconjunto de un Array.
// map(): retornará un nuevo Array basándose en otro de referencia.

// reduce es otra funcion de los arrays 
//El método reduce() nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.

const libros = (acum, {cantidadLibros}) => acum + cantidadLibros
var totalDeLibros = personas.reduce(libros, 0)
console.log(totalDeLibros)
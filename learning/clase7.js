//Las constantes se por convencion se escriben en mayusculas y con _ para separar las palabras.
var persona1 = 
{
    name: 'Sacha',
    edad: 28,
    profecion: 'ingeniero'
}
var persona2 = 
{
    name: 'Pepito',
    edad: 15
}
const MAYORIA_DE_EDAD=18

function esMayorEdad(persona)
{
    return persona.edad >= MAYORIA_DE_EDAD 
}

function esAdulto(persona)
{
    if(esMayorEdad(persona))
    {
        console.log(`${persona.name} es mayor de edad`)
    }else
    {
        console.log(`${persona.name} es menor de edad`)
    }
}
// Este codigo tambien se puede escribir en Arrow functions
// Un pequeña explicación 
//En esta clase aprenderemos a utilizar Arrow Functions que permiten una nomenclatura más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas. 
//Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves en ciertas ocaciones

const esMayorEdadZwei = persona => persona.edad >= MAYORIA_DE_EDAD 

function acceso(persona)
{
    if(esMayorEdadZwei(persona))
    {
        console.log('Acceso permitido')
    }else
    {
        console.log('Acceso denegado')
    }
}
// En js se pueden mandar como atributos, funciones se le escribe como fn como en el ejemplo siguiente.
class Persona 
{
    constructor(nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    saludar(fn)
    {
        var { nombre, apellido }= this
        console.log(`Hola me llamo ${nombre} ${apellido} `)
        if(fn)
        {
            fn()
        }
    }
}
function responderSaludo()
{
    console.log(`y soy desarrollador`)
    console.log(`Oh! mira que bien no sabia que eras desarrollador`)
}

var pepito = new Persona ('Pepito', 'Perez', 19)
var sacha = new Persona ('Sacha', 'Lifsyc', 28)

pepito.saludar()
sacha.saludar(responderSaludo)

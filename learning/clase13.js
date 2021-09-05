// En js no existe la heencia, existe algo llamado la herencia prototipal y aquí mostramos las dos formas de poder usarla
// herencia prototipal vieja oldscoold
function heredaDe(prototipoHijo, prototipoPadre)
{
    var fn = function () {} // fn o noop por convencion se escriben así estas funciones para decir que no hacen nada
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}// esta funcion se encarga de hacer la herencia prototypal 
function Persona(nombre, apellido,altura)
{
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function ()
{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function ()
{
    return this.altura > 1.80
}

function Desarrollador(nombre,apellido)
{
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona) // Esta función declarada siempre tiene que ir arriba de las funciones que se vayan a rescribir de la clase hija si no esta arriba sera las funciones del padre las que van a sobreescribir a las de la hija.

Desarrollador.prototype.saludar = function ()
{
    console.log(`Hi! my name is ${this.nombre} i am programador/a`)
}

// en ECMAScript 2015 se añade las clases pero siguen siendo prototipos  pero se comportan mas como clases y así se escriben 

class Persona2 
{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar () // No hay necesidad de escribir funtion para definir que es una función
    {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto()
    {
        return this.altura > 1.80
    }
}

class Desarrollador2 extends Persona2 
{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }
    saludar()
    {
        console.log(`Hi! my name is ${this.nombre} i am programador/a`)
    }
}
 var ejemplo1 = new Persona2('Miguel', 'Herrera', 1.65)
 var ejemplo2 = new Desarrollador2('Pepito','perez',1.80)

 ejemplo1.saludar()
 ejemplo2.saludar()

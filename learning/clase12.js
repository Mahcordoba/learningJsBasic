//Las clases son funciones cuya sintaxis tiene dos componentes:
// --expresiones
// --declaraciones 
// Esto se le conoce como crear un prototipo.

function Persona(nombre, apellido,altura)
{
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
// Para agregar funciones podemos utilizar 
Persona.prototype.saludar = function ()
{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.verificarAltura = function ()
{
    return this.altura >= 1.80
}

Persona.prototype.soyAlto = function ()
{
    if(this.verificarAltura()){
        console.log('Soy alto')
    }else
    {
        console.log('Soy bajo')
    }
}

var ejemplo = new Persona('Miguel','Herrera',1.85)
ejemplo.soyAlto()
// Cosas que hay que tener en cuenta las arrow funtion en las clases tienen problemas con el this ya que invocan windows y no al objeto recien creado así no hay que usarlas  
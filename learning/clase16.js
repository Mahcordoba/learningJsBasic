const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true }
// $ con este simbolo estamos invocando el jqueri
$.get(lukeUrl,opts,function (luke, prueba){
    console.log(arguments)//Este nos ayuda a mirar que argumentos nos llegan.
    console.log(`Hola yo soy, ${luke.name}`)
    console.log(prueba)
    //como funciona el get va a la direccion que le dimos, opts no se que hace este parametro, accede a la funcion, de la direccion de email mandan una respuesta la funcion recibe unos parametros los cuales son rellenados por argumentos que nos da la funcion get del jqueri el nos envia un array con la posicion 0 los datos que nos dio el servidor, el 1 de si tubo exito o no y tercero otros datos.
    //Como vemos en la función luke recibe los parametros de la posición 0 y prueba los de la posicion 1 y si pusieramos otro recibiria los de la posicion 3. 
})
// Ahora vamos a pedir multiples personajes 
const onPeopleResponse = function (persona)
{
    console.log(`Hola, yo soy ${persona.name} :v`)
}
function obtenerPersonaje(id)
{
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}` 
    $.get(url,opts,onPeopleResponse)
}

for(let i = 1; i<= 5; i++)
{
    obtenerPersonaje(i)
}
console.log("Vuelvo a llamar :V")
for(let i = 1; i<= 5; i++)
{
    obtenerPersonaje(i)
}
// como vemos tenemos dos for que hacen lo mismo pero sus respuestas son diferentes por que pasa esto como las respuestas nos las envia un servidor estan nos llegan en diferentes ordenes y recuerda el asincronismo de java es como si dejara otra pila de ejecucion de pendientes y a medida que van llegando quedan en esta pila y js quiere leer estos datos los envia segun su orden de llegada example 
// Miremolo como cuando escribimos codigo nosotros escribimos en un lista y el programa lo ejecuta de arriba hacia abajo segun como escribimos pues lo mismo pasa con la pila de ejecucion segun vallan llegando las respuestas estas que darian asi:
/*
1 luke
2 leya
3 desconocido 15
4 desconocido 12 

pero pensemos que volvemos a llamar pero esta ves nos llega asi la informacion
1 desconocido 15 
2 desconocido 12
3 luke 
4 leya 

y como js lee de arriba para abajo nos muestra en pantalla en su orden de llegada 
 */
/* Ahora miremos la siguiente solucion para que llegue la informacion en el orden que queremos */
const onPeopleResponse2 = function (persona)
{
    console.log(`Hola, yo soy ${persona.name} ::XD:::`)
}
function obtenerPersonajeInfierno(id,callback)// callbak tambien se puede escribir como cb o fn 
{
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}` 
    $.get(url,opts,onPeopleResponse2)
    if (callback)
    {
        callback()
    }
}

obtenerPersonajeInfierno(1, function(){
    obtenerPersonajeInfierno(2, function (){
        obtenerPersonajeInfierno(3)
    })
})
// con esta solucion podemos tener organizadas las ordenes de llegadas pero aqui llegamos al hellcallback como te puedes dar cuenta el codigo cada ves se va hacia la izquierda como formando una piramide ahora imagina que tienes que llamar 100 personajes y piensa que hay un error y tienes que buscarlo 


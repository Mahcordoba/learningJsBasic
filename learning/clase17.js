//Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().
//En la clase 16 en la aparte de abajo veremos el codigo que habia antes.
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id ,callback)
{
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}` 
    $.get(url,opts,callback).fail(() => console.log('Sucedio un error. No se puede obtener el personaje del id: ' + id))
}

obtenerPersonaje(1,function(personaje){
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2,function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje){
            console.log(`Hola, yo soy ${personaje.name}`)
        })
    })
})

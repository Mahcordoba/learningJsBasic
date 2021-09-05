// mirar las clases 16 y 17 para entender mas esto 
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id)
{
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}` 
        $
         .get(url,opts, function(data){// function (data) is callback
            resolve(data)
         })
         .fail(() => reject(id))
    })
}
function onError(id)
{
    console.log(`Sucedio un error al intentar obtener el personaje ${id}`)
}
obtenerPersonaje(1)
 .then(function (personaje){
    console.log(`Hola, yo soy ${personaje.name}`)
})
 .catch(onError)

// Promesas Encadenadas

obtenerPersonaje(2)
 .then(personaje2 => {
    console.log(`Hola, yo soy el personaje 2 ${personaje2.name}`)
    return obtenerPersonaje(3)
 })
 .then(personaje3 => {
    console.log(`Hola, yo soy el personaje 3 ${personaje3.name}`)
    return obtenerPersonaje(4)
 })
 .then(personaje4 => {
    console.log(`Hola, yo soy el personaje 4 ${personaje4.name}`)
    return obtenerPersonaje(5)
 })
 .then(personaje5 => {
    console.log(`Hola, yo soy el personaje 5 ${personaje5.name}`)
 })
 .catch(onError)
 // Así concadenamos mas promesas este codigo termina siendo mas facil de leer que con lo callback ya que este no se vuelve una priramide horizontal y este se mantiene en linea. 

var persona = 
{
    nombre: 'Miguel',
    apellido: 'Herrera',
    edad: 28,
    peso: 60
}

const DIAS_ANNO = 365
const AUMENTO_DE_PESO = 0.2

console.log("El peso de " + persona.nombre + " al principio de año es " + persona.peso)

function incrementarPeso(persona)
{
    persona.peso += AUMENTO_DE_PESO
}
const perdidadPeso = persona => persona.peso -= AUMENTO_DE_PESO

for (let i = 0; i<365; i++)
{
    var ramdon = Math.random()
    if(ramdon < 0.25)
    {
        incrementarPeso(persona)
    }else if(ramdon < 0.50)
    {
        perdidadPeso(persona)
    }
}
console.log(`${persona.nombre} despues de un año tiene este peso ${persona.peso}`)
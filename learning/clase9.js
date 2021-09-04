var persona = 
{
    nombre: 'Miguel',
    apellido: 'Herrera',
    edad: 28,
    peso: 60
}

const DIAS_ANNO = 365
const AUMENTO_DE_PESO = 0.3
const META = persona.peso + 3
var diasTranscurridos = 0
function incrementarPeso(persona)
{
    persona.peso += AUMENTO_DE_PESO
}
const perdidadPeso = persona => persona.peso -= AUMENTO_DE_PESO

const desjuiciado = () => Math.random() < 0.3
const juicioso = () => Math.random() < 0.5
while(persona.peso < META)
{
    if(desjuiciado())
    {
        perdidadPeso(persona)
    }else if(juicioso())
    {
        incrementarPeso(persona)
    }
    diasTranscurridos ++
}
console.log(`${persona.nombre} consiguio su meta de subir de peso en ${diasTranscurridos}`)
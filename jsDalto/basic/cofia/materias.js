class Materia{
    constructor(nombre,instructor)
    {
        this.nombre=nombre
        this.instructor=instructor
        this.alugnos=[]
    }
    agregarAlugnos(nombre)
    {
        if(this.alugnos.length<3)
        {
            this.alugnos.push(nombre)
            return `Se a inscrito correctamente a la materia ${this.nombre} el alugno ${nombre}`
        }else
        {
            return `Lamento informarte ${nombre} que este curso ya esta completo`
        }
    }
    infoMateria()
    {
        return ` 
        Materia: ${this.nombre} <br>
        Instructor: ${this.instructor} <br>
        <b>Alugnos registrados:</b> <br> ${this.alugnos.join('<br>')}`
    }
    verificarAlugno(nombre)
    {
        return this.alugnos.includes(nombre)
    }
}

const alugnosMateria = materia => materia.infoMateria()
const matematicas = new Materia('Matematicas', 'Pablo cardona')
const algebra = new Materia('Algebra', 'Pablo cardona')
const calculo = new Materia('Calculo', 'Pablo cardona')
algebra.agregarAlugnos('pepito1')
algebra.agregarAlugnos('pepito2')
algebra.agregarAlugnos('pepito3')
calculo.agregarAlugnos('pepito3')
calculo.agregarAlugnos('pepito1')
calculo.agregarAlugnos('cofia')


console.log(matematicas.agregarAlugnos('pepito'))
console.log(matematicas.agregarAlugnos('pepita'))
console.log(matematicas.agregarAlugnos('cofia'))
console.log(matematicas.agregarAlugnos('juanita'))
console.log(matematicas.verificarAlugno('cofia'))

document.write(alugnosMateria(matematicas))

const lista = [matematicas,algebra,calculo]

const clasesRegistradas = (listaMaterias,alugno) =>{
    let materiasDondeEstoy=[]
    for(verificar in listaMaterias)
    {
        if(listaMaterias[verificar].verificarAlugno(alugno))
        {
            materiasDondeEstoy.push(listaMaterias[verificar].nombre)
        }
    }

    return materiasDondeEstoy.join('<br>')
}
document.write(`<br> Cofia esta en los siguientes cursos: 
<br> 
${clasesRegistradas(lista,'cofia')}`)

function materiasDisponibles(nombreMateria,alugno)
{
    for(listica in lista)
    {
        if(lista[listica].nombre === nombreMateria)
        {
            return lista[listica].agregarAlugnos(alugno)
        }
    }
}
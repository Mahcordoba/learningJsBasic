class Apps{
    constructor(nombre,calificacion,peso,vecesDescargado)
    {
        this.nombre=nombre
        this.calificacion=calificacion
        this.peso=peso
        this.vecesDescargado=vecesDescargado
        this.instalada= false
        this.ejecucion=false
    }
    instalar()
    {
        alert('Se a instalado la app')
        this.instalada=true
    }
    desinstalar()
    {
        alert('Se a desistalado correctamente la app')
        this.instalada=false
    }
    abrir()
    {
        alert('Se esta ejecutando correctamente la app')
        this.ejecucion=true
    }
    cerrar()
    {
        if(this.instalada===true && this.ejecucion===true){
            alert('Se cerro correctamente la app')
            this.ejecucion=false
        }else
        {
            alert('Que intentas hacer por favor intenta de nuevo en algo te esta equibocando')
        }
    }
    info()
    {
        return `
        ${this.nombre} <br>
        Esta app tiene un peso de: ${this.peso} <br>
        Esta app tiene una valoración de: ${this.calificacion} <br>
        Esta app tiene un total de descargas de:${this.vecesDescargado} `
    }

}

const aplica1 = new Apps('pr1',5,'500 mb',100)
const aplica2 = new Apps('pr2',4,'650 mb',2000)
const aplica3 = new Apps('pr3',5,'700 mb',1100)
const preuba = [aplica1,aplica2,aplica3]

function recomendacion(lista)
{
    let objectoFalso = []
    for(primero of lista)
    {
        if(primero.vecesDescargado > 1000){
            objectoFalso.push(primero)
        }
    }
    let app = objectoFalso[0]
    for(primero of objectoFalso)
    {
        if(app.calificacion<primero.calificacion)
        {
            app=primero
        }
    }
    return app
}

const solucion = recomendacion(preuba)
document.write(`La app que se te recomienda es <br>${solucion.info()}`)
class Celular{
    constructor(color, peso,resolucion,fotos,ram){
        this.color = color
        this.peso = peso
        this.resolucion= resolucion
        this.fotos = fotos
        this.ram= ram
        this.encendido= false
    }
    botonEncendido()
    {
        if(this.encendido)
        {
            alert('Celular apagandose')
            this.encendido= false
        }else
        {
            alert('Celular prendiendo')
            this.encendido= true
        }
    }
    reiniciar(){
        if(this.encendido){
            alert('reiniciar celular')
        }else
        {
            alert('Prendiendo celular')
            this.encendido= true
        }
    }
    tomarFoto()
    {
        alert(`Foto tomada con la siguiente resolución ${this.fotos}`)
    }
    gravarVideo()
    {
        alert('Actualmente grabando un video')
    }
    info()
    {
        return `
            El color es: ${this.color}
            El peso es: ${this.peso}
            La resolución de su pantalla es: ${this.resolucion}
            Su camara tiene una resolución de: ${this.fotos}
            Memoria ram de: ${this.ram} 
        `
    }
}

class Gamaalta extends Celular
{
    constructor(color,peso,resolucion,fotos,ram, camaraAdicional,){
    super(color,peso,resolucion,fotos,ram)
    this.camaraAdicional= camaraAdicional
    }
    reconocimientoFacial()
    {
        alert('Te reconosco')
    }
    gravarCamaraLenta()
    {
        alert(`Grabando con la camara ${this.camaraAdicional} esta graba en camara lenta`)
    }
}
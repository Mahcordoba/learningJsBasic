const CELESTE = document.getElementById('celeste')
const VIOLETA = document.getElementById('violeta')
const NARANJA = document.getElementById('naranja')
const VERDE = document.getElementById('verde')
const BTN_EMPEZAR = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10


class Juego 
{
    constructor()
    {
        this.incializar = this.incializar.bind(this)
        this.incializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 500)
        
    }

    incializar()
    {
        this.siguienteNivel = this.siguienteNivel.bind(this) // el this que esta dentro de bind es del juego 
        this.elegirColor = this.elegirColor.bind(this)// Esto es para el this sea del juego y no otro this 
        this.toggleBtnEmpezar() 
        this.nivel = 1
        this.colores = 
        {
            CELESTE,
            VIOLETA,
            NARANJA,
            VERDE
            //Ojo estas variables se llaman igual que las constantes pero no son las mismas en js si una variable se va llamar igual a la variable que vas a usar te ahorras en declararla así repitida: repetida
        }
    } 
    toggleBtnEmpezar()
    {
        if(BTN_EMPEZAR.classList.contains('hide'))// .contain revisa si existe una clase llamada en este caso hide
        {
            BTN_EMPEZAR.classList.remove('hide')
        }else
        {
            BTN_EMPEZAR.classList.add('hide')// classList se usa para añadir clases a una etiqueta html
        }
    }
    generarSecuencia()
    {
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
        // con la secuencia de new Array podemos definir el tamaño que va a tener este 
        // recuera el map no sirve en arrays vacios por eso llenamos el array con fill
        //math.floor es para redondiar hacia abajo un numero example 3.9 quedaria en 3
    }
    siguienteNivel()
    {
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }
    transformarNumeroAColor(numero)
    {
        switch(numero)
        {
            case 0:
                return 'CELESTE'
                //Cuando esta la palabra return no hay necesidad de poner break
            case 1:
                return 'VIOLETA'
            case 2: 
                return 'NARANJA'
            case 3:
                return 'VERDE'
        }

    }
    transformarColorANumero(color)
    {
        switch(color)
        {
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja': 
                return 2
            case 'verde':
                return 3
        }
    }
    iluminarSecuencia()
    {
        //Diferencia entre el uso de let y var para la declaración de variables y cómo esta diferencia afecta el alcance de la variable dentro de un ciclo for. Se recomienda siempre el uso de let cuando se trata de estructuras for, ya que al usar var, el valor de dicha variable se va a remplazar cada vez con la última asignación que se haga, mientras que con let, conservará su valor dentro de cada iteración.
        //:::::::::RECUERDA:::::::::::
        //Siempre que sea posible debemos usar const sobre let, y let sobre var.
        for (let i = 0; i < this.nivel; i++)
        {
           const color = this.transformarNumeroAColor(this.secuencia[i])
           setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }
    iluminarColor(color)
    {
        this.colores[color].classList.add('light')
        setTimeout(() => this.apgarColor(color), 550)
    }
    apgarColor(color)
    {
        //.classList.remove se pueden quitar clases de una etiqueta html
        this.colores[color].classList.remove('light')
    }
    agregarEventosClick()
    {
        this.colores.CELESTE.addEventListener('click', this.elegirColor)
        this.colores.VERDE.addEventListener('click', this.elegirColor)
        this.colores.VIOLETA.addEventListener('click', this.elegirColor)
        this.colores.NARANJA.addEventListener('click', this.elegirColor)
    }
    eliminarEventosClick()
    {
        this.colores.CELESTE.removeEventListener('click', this.elegirColor)
        this.colores.VERDE.removeEventListener('click', this.elegirColor)
        this.colores.VIOLETA.removeEventListener('click', this.elegirColor)
        this.colores.NARANJA.removeEventListener('click', this.elegirColor)
    }
    elegirColor(ev)// se suele usar e o ev para resivir el evento 
    {
         const nombreColor = ev.target.dataset.color // target es un elemento de ev y dataset color es data-color en la etiqueta html que se le asigno esa data
         const numeroColor = this.transformarColorANumero(nombreColor)
         const nombreColorUppa = nombreColor.toUpperCase();
         this.iluminarColor(nombreColorUppa)
         if(numeroColor === this.secuencia[this.subnivel])
         {
             this.subnivel++
             if(this.subnivel === this.nivel)
             {
                 this.nivel++
                 this.eliminarEventosClick()
                if(this.nivel === (ULTIMO_NIVEL + 1))
                {
                    this.ganoElJuego()
                }else
                {
                    setTimeout(this.siguienteNivel, 2000)
                }
             }
         }else
         {
            this.perdioElJuego()
         }
    }
    ganoElJuego()
    {
        swal('Platzi', 'Felicitaciones Ganaste!', 'success')
        //Para saber mas mirar la documentacion del SweetAlert
         .then(this.incializar())
    }
    perdioElJuego()
    {
        swal('Platzi', 'lo lamentamos, perdiste el juego ☹', 'error')
         .then(() => {
            this.eliminarEventosClick() 
            this.incializar()
        })
    }
}
function empezarJuego()
{
    var juego = new Juego()
}
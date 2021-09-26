const taller =  document.getElementById('taller')
const taller2 = document.getElementById('otherTaller')
const examen =document.getElementById('examen')
const boton =document.getElementById('boton')
const resultado =document.getElementById('resultado')
const estudiante = document.getElementById('estudiante')
let taller1, taller22, examen1
let nombre = estudiante.value 

boton.addEventListener('click', (e)=>{
    e.preventDefault()
    if(validar())
    {
        let promedio = taller1 + taller22+ (examen1*2)/4
        if(promedio >= 7)
        {
            resultado.innerHTML=`Felicidades ${nombre} Aprobaste`    
        }else{
            resultado.innerHTML=`${nombre} no aprobaste la materia`    
        }
    }else {
        resultado.innerHTML=`Por favor verifique los datos ingresados, Recuerde solo debe ingresar numeros`}
})

function validar()
{
    taller1 = convertirNumero(taller.value)
    taller22 = convertirNumero(taller2.value)
    examen1 = convertirNumero(examen.value)
    console.log(taller1)
    console.log(taller22)
    console.log(examen1)
    if(taller1=== 'NaN' || taller22==='NaN' || examen1 === 'NaN'){
        return false
    }
    return true
}
const convertirNumero= texto =>
{
    let numero = Number(texto)
    if(isNaN(numero)) return 'NaN'//isNaN para verificar sin un numero es NaN 
    else return numero
}
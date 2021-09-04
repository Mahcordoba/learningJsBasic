var contador = 0
var veces = 'veces'
var vez = 'vez'

const llueve = () => Math.random() < 0.25
const imprimir = variable => console.log(`Fui a mirar a ver si llovia ${contador} ${variable}`)
do {
    contador++
} while (!llueve())


if(contador === 1)
{
    imprimir(vez)
}else 
{
    imprimir(veces)
}

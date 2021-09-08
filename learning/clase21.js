// var es la variable comun de js pero esta tiene problemas ejemplo 
for (var i = 0; i< 10; i++)
{
    console.log(i)
}
console.log(`El valor de ${i} es: `)
// como podemos observar podemos acceder a esta variable fuera del bloque for. Lo que acarrea problenas por que si hacemos lo siguiente
i = 11
console.log('el valor de i es:' + i)
// como vemos podemos pisar esa variable i y modificar su valor 
// si usamos let en ves de var este solo funcionara en el bloque de codigo example 
for ( let other = 0; other<10; other++)
{
    console.log(other)
} 
// console.log(other)
// Como puedes ver hay un error y es por que fuera del bloque for no existe la variable other y por eso no podemos acceder a su valor 
// Cuando usar const cuando no necesitemos cambiar el valor de la variable pero ojo si la variable contiene un array de numeros podemos modificar su contenido mas no sobreecribirlo example
const arrayPrueba= [1,2,3]
arrayPrueba.push(10)
// Esto si lo podemos hacer 
arrayPrueba=[1,2]
// Esto no lo podemos hacer por que estamos pisando la variable otra forma de verlo es que intentamos modificar el valor en memoria que tiene la variable pero como son diferentes referencias no se puede, en anterior caso si se puede cambiar informacion del array por que su referencia sigue siendo la misma solo que se le agrego mas información o se le quito.

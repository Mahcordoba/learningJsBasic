var nombre = 'Miguel' , edad='28';

function mostrarInformacion (n,e)
{
    console.log(`${n} y tiene ${e} años`);
};

mostrarInformacion(nombre,edad);
mostrarInformacion('Hola',73)
// la invocación de la funcion de abajo sigue funcionando
mostrarInformacion(23,"Hello")
// Hay que tener cuidado con js ya que al estar devilmente tipiado cosas como estas pueden pasar


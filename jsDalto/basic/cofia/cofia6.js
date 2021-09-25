const contenedor = document.getElementById('contenedor-llaves')


function tarjetas(llave)
{
    //Creando las etiquetas
    const tarjeta = document.createElement('DIV')
    const img = document.createElement('IMG')
    const h3 = document.createElement('H3')
    const boton = document.createElement('BUTTON')
    //Texto de las etiquetas
    const textoboton = document.createTextNode('Enviar')
    const texH3 = document.createTextNode(llave.getModelo)
    //Agregando el texto, clases y los atributos a las etiquetas
    img.setAttribute('src',llave.getImage)
    img.setAttribute('alt','llave')
    boton.setAttribute('onclick','oprimir()')
    tarjeta.classList.add('tarjeta')
    boton.classList.add('enviar')
    h3.appendChild(texH3)
    boton.appendChild(textoboton)
    //Agregando todos los elementos a la tarjeta
    tarjeta.appendChild(img)
    tarjeta.appendChild(h3)
    tarjeta.appendChild(boton)
    //Fin del proseso
    return tarjeta
}
function oprimir()
{
    alert('Me pulsaste')
}


llave1 = new llave('Llavebaticano','./llave.png')
llave2 = new llave('llavebodega','./llave2.jpeg')
llave3 = new llave('llavetres', './llave3.jpeg')

contenedor.appendChild(tarjetas(llave1))
contenedor.appendChild(tarjetas(llave2))
contenedor.appendChild(tarjetas(llave3))


/*
//Tiene problemas de seguridad así seria con innerHTML pero hay que averiguar mas por que así es muy facil
contenedor.innerHTML=`
<div class="tarjeta">
    <img src="" alt="llave1">
    <h3>Lorem</h3>
    <button class="enviar">Enviar</button>
</div>`
contenedor.innerHTML+=`
<div class="tarjeta">
    <img src="" alt="llave1">
    <h3>Lorem</h3>
    <button class="enviar">Enviar</button>
</div>`
contenedor.innerHTML+=`
<div class="tarjeta">
    <img src="" alt="llave1">
    <h3>Lorem</h3>
    <button class="enviar">Enviar</button>
</div>`
*/

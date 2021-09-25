const contenedor = document.querySelector(".contenedor")//esto tambien se puede hacer con el id es mejor con id
const item = document.createElement("LI")//Siempre deben ir en mayusculas las etiquetas 
const textDelItem = document.createTextNode("Texto que va a ir en li")
item.appendChild(textDelItem)
contenedor.appendChild(item)
//Tambien esto se puede hacer con el innerHTML como en el siguiente ejemplo
const contenedor2 = document.querySelector('.contenedor2')
contenedor2.innerHTML=`
<h2 class="hola"> La otra lista </h2>
<li> Hola mundo</li>
<li> Hello word</li>
<li> bay mundo</li>`
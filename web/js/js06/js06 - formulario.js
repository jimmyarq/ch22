console.log("hola javascript Sesion JS06")

const obtenerNombre = ( ) => prompt("Escribe tu nombre", "jimmy");

const encontrarElementById = ( ) => {
    const element = document.getElementById("titulo");
   // console.log("Datos del objeto: ", element);
   console.log("Entre las etiquetas" + element.innerHTML);
  // element.innerHTML += "Manipulacion del DOM";
   // con InnerHTML puedo agregar nuevas etiquetas

   const nombreDesarrollador = "Jimmy" //obtenerNombre() ; ToDo agregar funcion
   element.innerHTML += `<h1>${element.innerHTML} Manipulacion del <strong>DOM</strong> <em>por</em> ${nombreDesarrollador}`;
  // element.innerHTML += "JS06" + "Manipulacion del DOM";
}
encontrarElementById();

const encontrarElementsbyTagName = () =>{
    //const elements = document.getElementsByTagName("p");
    const [,introRef] = document.getElementsByTagName("p");

    //Obtenemos el indice 0
   // const introRef = elements[1].innerHTML;
    //Modificamos el contenido de introRef
    console.log(introRef?.innerHTML);
    introRef.innerHTML = 
    "Aprendiendo a <strong>usar</strong> <em>DOM</em>";
};
//encontrarElementsbyTagName();

// Funcion que me cambia a azul el estilo de las etiquetas <em>
const cambiarColorEm = ( nuevoColor ) =>{
    const elements = document.getElementsByTagName("em");
    for (let element of elements)
        //element.innerHTML = `<em style=color:#4682B4>${element.innerText}</em>`;
        element.style.color = nuevoColor;
}
cambiarColorEm("blue");

const diferenciaInnerHTMLInnerText = () =>{
    const element = document.getElementById("titulo");
    console.log(element.innerHTML);
    console.log(element.innerText);
}
diferenciaInnerHTMLInnerText();

const encontrarElementosbyClassName = ( ) =>{
    const elements = document.getElementsByClassName("subtitulo");
    for (element of elements)
    console.log(element.innerText);
}
encontrarElementosbyClassName();

//El selector universal

const encontrarElementobyQuerySelector =  ( ) =>{
    const element = document.querySelector("#subtitulo");
    console.log(element?.innerText);
}
encontrarElementobyQuerySelector();

const crearElemento = () =>{
    const newElement = document.createElement("p");
    newElement.innerHTML = `La CH22 es bien <strong>chida</strong> por
    <ul>
        <li> Diversas </li>
        <li> Listos y listas </li>
        <li> Hay clases de bienes raices </li>
        <li> Amigables </li>
        <li> La CH22 te respalda </li>    
        <li> Sin problemas en quesadillas </li>      
        <li> Aplica has compitas, no compitas </li>  
    </ul>    
    `;

    document.getElementById("datos-generation").appendChild(newElement);
    const nodoClonado = newElement(true);
    document.getElementById("noticias").appendChild(newElement);
}
crearElemento();
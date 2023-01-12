console.log("hola javascript Sesion JS03")

const datosUsuario = {nombre:"Jessica" , ciudad:"CDMX"};

//Declaracion de bloque.
{
    //Esto es una declaracion de bloque
    //en donde las variables declaradas(let, const)
    //solo tendran alcance dentro del bloque o
    // bloques anidados  dentro del bloque
    const datosUsuario = {nombre:"Wicho" , ciudad:"Aguascalientes"};
    const numPersonas = 49;
    console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`)
    {
        console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`)
        console.log(`En este momento hay ${numPersonas} escuchando a Shakira`);

    }
}

console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`)

// La variable numPersonas no esta definido
// console.log(`En este momento hay ${numPersonas} escuchando a Shakira`);

// Condicional If
/* Sintaxis
    if(condicionVerdadera) Instruccion;
    else, instruccion_en_caso contrario

    if(condicionVerdadera) {
        instrucciones;
    }
*/

const respuesta = true;//confirm("Te gusta generation?");
console.log(respuesta);
let mensaje;

if(respuesta){
    mensaje = "Entonces seras un Java Full Stack Deveorper";
   // mensaje = "ya eres un JFSD Senior?";
}
else
    mensaje = " Entonces estudia la universidad ";
console.log(mensaje);

//Operador ternario.
// Sintaxis: condicion ? condicion_verdadera : condicion_falsa;

let teamFrio = confirm("Te gusta el frio?");
let mensajeTernario = teamFrio ? "Hielo" : "Ponche;"
//console.log(`Te voy a servuir ${mensajeTernario}`)
console.log(`Te voy a servir: ${ teamFrio ? "Helado":"Ponche"}`)

// Condicional If, Else, Else If
/* Sintaxis
    if(condicionVerdadera) instrucciion;
    else if(segundaCondicion) instruccion;
    else if(terceraCondicion) instruccion;
    else instruccion;
*/
/*let marcaReloj;
if( cantante === 'Shakira' ) marcaReloj = "Rolex";
else if( cantante === 'Pique') marcaReloj = "Casio";
else if( cantante === "Jimmy") marcaReloj = "Casio";
else if( cantante === "Jimmy") marcaReloj = "Casio";*/

let nombrePersona = 'Karla';
let marcaReloj;
if( nombrePersona === 'Shakira' ) 
    marcaReloj = 'Rolex';
else if( nombrePersona === 'Pique') 
    marcaReloj = 'Casio';
else if( nombrePersona === 'Jimmy') 
    marcaReloj = 'Casio';
else 
    marcaReloj = 'Umo de Cars'

console.log(`${nombrePersona} tu reloj es ${marcaReloj}`);

// Operadores  logicos  and(&&) or (||)
/* AMD

A       B       C
true    true    true
true    false   false
*/

/* 
 Condicional Switch
  Sintaxis:
    switch(expresion){
        case valor1:
            instrucciones;
            break;
        caso valor2:
            instrucciones;
            break;
        caso valorn:
            instrucciones;
            break;
        default:
            instrucciones;
    }
*/

nombrePersona = 'Jimmy';
marcaReloj = '';

switch(nombrePersona){
    case 'Shakira':
        marcaReloj = 'Rolex';
        break;
    case 'Pique':
        marcaReloj = 'Casio';
        break;
    case 'Jimmy':
        marcaReloj = 'El Sol';
        break;
    default:
        marcaReloj =  'Uno de Cars'
}
console.log(`Switch - ${nombrePersona} tu reloj es ${ marcaReloj}`);


const nombreMes = prompt("Estaciones del año, coloca un numero");
let numeroMes = "";

switch(nombreMes){
    case '12':
        epocaDelAño = 'Invierno';
        numeroMes = 'Diciembre';
        break;
    case '1':
        epocaDelAño = 'Invierno';
        numeroMes = 'Enero';
        break;
    case '2':
        epocaDelAño = 'Invierno';
        numeroMes = 'Febrero';
        break; 
    case '3':
        epocaDelAño = 'Primavera';
        numeroMes = 'Marzo';
            break;
    case '4':
        epocaDelAño = 'Primavera';
        numeroMes = 'Abril';
            break;
    case '5':
        epocaDelAño = 'Primavera';
        numeroMes = 'Mayo';
            break; 
    case '6':
        epocaDelAño = 'Verano';
        numeroMes = 'Junio';
                break;
    case '7':
        epocaDelAño = 'Verano';
        numeroMes = 'Julio';
                break;
    case '8':
        epocaDelAño = 'Verano';
        numeroMes = 'Agosto';
                break; 
    case '9':
        epocaDelAño = 'Otoño';
        numeroMes = 'Septiembre';
                    break;
    case '10':
        epocaDelAño = 'Otoño';
        numeroMes = 'Octubre';
                    break;
    case '11':
        epocaDelAño = 'Otoño';
        numeroMes = 'Noviembre';
                    break; 
    default:
        epocaDelAño =  'Coloca un número entre 1 y 12'
}
console.log(`Estás en (${numeroMes}), número del año: ${nombreMes} y en la estación que estas es: ${epocaDelAño}`);


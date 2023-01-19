console.log("hola javascript Sesion JS04")

const nombresCH22 = ["Manuel", "Leonardo", "Melani"];
// Usando el constructor de la clase Array.
const nombresCH14 = new Array ("Abue", "Cori", "Maga", "Sebas")

console.log(nombresCH22);
console.log(nombresCH14);

const promedioEdadesCH22 = [25]
const promedioEdadesCH14 = new Array (24) // (, , , , , , , , , , ,)
console.log(promedioEdadesCH22);
console.log(promedioEdadesCH14);
// Conocer la longitud de un arreglo
console.log(`Nun de elementos ${promedioEdadesCH22}`);
console.log(`Nun de elementos ${promedioEdadesCH14}`);
// Se recomienda declarar los Arrays(objetos) con Const
// para prevenir que se cambie el tipo de dato
const armasCH22 = [" manopla", " picahielo"]; // typeof(armasCH22) object
// armasCH22 = "filero" // typeof(armasCH22) string
console.log("Lista de armas:" + armasCH22);

//Leer un elemento del arreglo
console.log(`Jessica tiene un ${armasCH22[1]+"."}`);
console.log(`Leonardo tiene una ${armasCH22[0]+"."}`);
//Cambiar un dato del arreglo
//["filero", "picahielo"];
armasCH22[0] = "filero"
console.log(`Leonardo tiene una  ${armasCH22[0]+"."}`);

let nombreClica = "Los Wichales";
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);
nombreClica[0] = "T"; // no cambia porque un string es un dato primitivo que es inmutable
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);
nombreClica = "The Wichales";

// Agregamos un nuevo dato al arreglo al final.
// Lo sig marca error, porque se le esta reasignando el tipo de dato
// armasCH22 = ["manopla", "picahielo", "machete"];

armasCH22[2] = " machete";
armasCH22[ armasCH22.length ] = ` macana`;
armasCH22.push("cadena");

console.log("Actualización de arnasCH22: " + armasCH22 + ".");
// Agregar un elelento al inicio
armasCH22.unshift(" navaja", " desarmador");
console.log("Actualización de arnas: " + armasCH22 + ".");

// Ciclo For
/*
Sintaxis
    for( instruccion Inicio; comparacion; expresion final ) Instruccion
   
    for( instruccion Inicio; comparacion; expresion final ) {
        instrucciones;
    }

    for( let i = 0, i<=10 ; 1++ ) {
        instrucciones;
    }    
*/

// Iteramos los arreglos
for ( let i = 0; i< armasCH22.length; i++){
console.log( armasCH22[i]);
console.log(`Indice armasCH22[i]`);
console.log(`Indice ${i} tiene ${armasCH22[i]}`);
}

//armasCh22.forEach( callbackFuncion )
function iterarArreglo( elemento, indice, arreglo){
    console.log( `CB - Indice ${indice} tiene ${elemento} `);
}

// armasCh22.forEach( iterarArreglo );
armasCH22.forEach( (elemento, indice, arreglo) => 
    console.log( `AF ${indice} tiene ${elemento}`));
// Va a iterar los indices del arreglo
for (let arma in armasCH22)
    console.log( `ForIn ${arma} tiene ${armasCH22[arma]}`);
// Va a iterar los elementos del arreglo
for (let arma in armasCH22)
console.log( `ForOff arma: ${arma} `);

//iterar de forma descendente las armas
for ( let i = armasCH22.length -1; i>=0; i--){
    console.log("Arma:" + armasCH22[i]);
    }

// Oara el ciclo for no es necesario indicar un incio
// la comparacion,  la expresion final
let = iteracion = 0;
for ( ; ; ){
    console.log("valor de i" + iteracion);
    if (iteracion === 10) break;
    iteracion++;
}

// la instruccion break rompe con la iteracion
// la iteracion continue continua con la iteracion

for ( let i = 0; i<=10; i++ ){
    if (i === 5 ) break;
    console.log("For con Break" + i); //0,1,2,3,4,
}

// Funcion continue

for ( let i = 0; i<=10; i++ ){
    if (i === 5 ) continue;
    console.log("For con Continue" + i); // 0.1,2,3,4,6,7,8,9,10
}
    //[ [] m [], [] ]
const participantes = [
    ["Jose", "Maria", "Pedro"], //CH1 Fila  0
    ["Tan", "Javi", "Andrea", "Santi"], //CH2 Fila 1
    ["Melanie", "Pavel" ] //CH3 Fila 2
];
                                            // Feliz Cumpleaños
                                            // Fila Columna
console.log("Persona CH3(f2) 2a persona(c1)" + participantes [2] [1] );
console.log("Persona CH3(f1) 2a persona(c0)" + participantes [1] [0] );
console.log("Persona CH3(f1) 2a persona(c0)" + participantes [0] [2] );

// Ciclo anidado

for (fila = 0 ; fila< participantes.length; fila++){
    console.log(participantes[fila]); //Iterando las filas
    for (columna = 0 ; columna< participantes[fila].length ; columna++ ){
        console.log( participantes[fila][columna] );
    }
}

// Usando break en ciclos anidados
// Dejar de mostrar lso nombres, cuando se encuentre a Tan

//Usando una variable como bandera
let continuarIteraciones = true;
for (fila = 0 ; fila< participantes.length; fila++){
        for (columna = 0 ; columna< participantes[fila].length ; columna++ ){
            console.log(`[${fila}][${columna}]`);
            if ( continuarIteraciones)
                console.log("Uso de break: " + participantes[fila][columna] );
            if ( participantes[fila][columna] === "Tan") continuarIteraciones= false;
        }
}

//Usando Break
for (let fila = 0 ; fila< participantes.length; fila++){
        for (let columna = 0 ; columna< participantes[fila].length ; columna++ ){
            console.log(`[${fila}][${columna}]`);
            console.log("Uso de break: " + participantes[fila][columna] );
            if ( participantes[fila][columna] === "Tan") break;
        }
}

//Usando Break + Label
cicloFila:
for (let fila = 0 ; fila< participantes.length; fila++){
    cicloColumna:
    for (let columna = 0 ; columna< participantes[fila].length ; columna++ ){
        console.log(`[${fila}][${columna}]`);
        console.log("Uso de break: " + participantes[fila][columna] );
        if ( participantes[fila][columna] === "Tan") break cicloFila;
    }
}

//Usando Continue + Label
cicloFila:
for (let fila = 0 ; fila< participantes.length; fila++){
    cicloColumna:
    for (let columna = 0 ; columna< participantes[fila].length ; columna++ ){
        if ( participantes[fila][columna] === "Tan") continue cicloColumna;
        console.log(`[${fila}][${columna}]`);
        console.log("Uso de continue + label: " + participantes[fila][columna] );
    }
}

/**
sintaxis:
 while ( condicion_verdadera) instruccion;

 while ( condicion_verdadera){
    instrucciones;
 }
 */
/*
let numIteracion = 0;
while (confirm("Quieres seguir iterando") ){
        console.log("iteracion n. " + numIteracion );
}*/

// Preguntar del 1 al 10 y saber si es el numero que penso el suuario
let number = 1;
/*
opcion 1
while( !confirm(`${number} es tu número?`) ) {
    number++;
}
*/

/*
opcion 1
while ( !confirm (`${number++} es tu número`) );
console.log("Tu número es el " + --number);
*/

//while ( !confirm (`${++number} es tu númer?`) );
//console.log("Tu número es el " + number);

// ciclo do-while
/*
 Sintaxis
    do {
        instrucciones;
    } while( condicion_verdadera);
*/
let valor = 0;
while( valor <5 ){
    console.log("while" + valor); // 0 ... 4
    valor++;
}

valor = 0;
do{
    console.log("do while" + valor); //  0 ... 4
    valor++;
} while( valor < 5);

valor = 10;
while( valor <5 ){
    console.log("while" + valor); // nada
    valor++;
}

valor = 10;
do{
    console.log("do while" + valor); //  10
    valor++;
} while( valor < 5);

/*
* FIFO: first input first output
* LIFO: last input first input
*/

const alimentosPerecederos = [];
//agregando una caja.
alimentosPerecederos.push("Manzanas lunes");
alimentosPerecederos.push("Manzanas miércoles");
//Sacando manzanas del lunes
console.log("Sacando a la venta: " + alimentosPerecederos.shift()); //lunes
console.log("Sacando a la venta: " + alimentosPerecederos.shift()); // miercoles

//Tenemos una ferreteria
const productos = [" desarmadores, cemento"];
// Agregó luces navideñas en Diciembre.
productos.push(" luces navideñas")
console.log("Sacando a la venta:" + productos.pop());
console.log("Sacando a la venta:" + productos.pop());
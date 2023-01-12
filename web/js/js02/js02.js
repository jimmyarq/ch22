console.log("hola javascript Sesion JS02")

/*
Funciones declaradas / funciones definidas
(function declaration / function statement)

Una caracteritica de las funciones declaradas
es que tiene hoisting (elevacion).

*/

function multiplica( a, b){
    return a * b;
}

console.log("El resultado de 5 * 10 = " + multiplica(5, 10) );

/*
 Funciones expresadas

 Las funciones expresadas (function expressions) son funciones
 que son declaradas dentro de la asignacion de una variable.

 Estas funciones pueden ser anonimas (no tienen nombre).
 Las funciones expresadas no tienen hoisting.

 */

/*  const suma = funtion ( a, b) { return a + b } */

/**
 * 
 * @param {number} a primer operador para sumar
 * @param {number} b segundo operador para sumar
 * @returns resultado de a + b;
 */
const suma = function ( a, b) {
    const result = a + b;
    return result;
};

console.log("La sumatoria de 4 + 6 =" + suma (4 , 6) );

/*
Funciones autoinvocadas

Las funciones auto invocadas o lo que es (seld-invoking funtions)
Son funciones que se ejecutan en su definicion.
Pueden ser anonimas.
*/

( function saludo(){
    console.log(" Hola, me estoy auto-invocando ");
})();

/*
 Funciones Flecha

 Una funcion flecha (arrow functions) son similares
 a las funciones expresadas, pero no requiere la palabra
 function. Ademas,  si solo tiene una instruccion y es el retorno,
 no requiere la instruccion return y las llaves {}.
*/

const restaExpresada = function (a , b){
    return a-b;
}

const resta = ( a , b ) => a - b;
console.log("La resta de 20 - 2 = " + resta(20,2));

const exponente = ( a , b ) => {
    const result = a ** b;
    return result;
}
console.log("El numero 4^3 = " + exponente(4,3));

const exponenteAlCuadrado = a => a ** 2;
console.log("El numero 4^2 = " + exponenteAlCuadrado(4) );

const imprimeSaludo = () => console.log("Hello... imprimiendo");

imprimeSaludo();

/*
Funciones con parametros inicializados

*/

function divide( a=1 , b=1){
    return a/b;
}

console.log("la division de 3/1 = " + divide(5,2));

/*
Rest Parameters
El paarmetro nest nos permite representar una serie de valores
indefinidos en los argumentos como una array.

*/

/* function sumatoriaIndefinida( a, b, c, d ){
    return a + b + c + d;
}
console.log("Sumar varios numeros:" + sumatoriaIndefinida(2,3,4,5));
*/
function sumatoriaIndefinida( a, b, ...restoDatos ){
    let sumatoria = a + b;
    for (let i = 0; i < restoDatos.lenght; i++ ){
        sumatoria = sumatoria + restoDatos[i]; // sumatoria = sumatoria + restoDatos[i];
    }
    return sumatoria;
}
console.log("Sumar varios numeros:" + sumatoriaIndefinida(2,3,6,12,24));

/*
Funciones recursivas.
Funcion recursiva es una funcion que se llama asi misma.
*/
// Factorial de 0 = 1
// Factorial de 3 = 3 * 2 * 1
// Factorial de 5 = 5 * 4 * 3 * 2 * 1
function factorialConCicloFor( a ){ 
    let total = 1;
    for (i=1; i<=a; i++){
        total *= i;
    }
    return total;
}

function factorialConRecursion( a ){
    if( a < 1 ) 
        return 1;
    return a * factorialConRecursion( a - 1)
}

console.log ("Factorial 3 = " + factorialConCicloFor(3)); //6
console.log ("Factorial 5 = " + factorialConCicloFor(5)); //120
console.log ("Factorial 3 = " + factorialConRecursion(3)); //6
console.log ("Factorial 5 = " + factorialConRecursion(5)); //120

// Hacer una recursion que muestre en consola una salido como
/*
Sakudo 1
Saludo 2
Saludo 3 ... Saludo 10

SAludo(10);
*/

function factorialConCicloFor( a ){ 
    let total = 1;
    for (i=1; i<=a; i++){
        total *= i;
    }
    return total;
}

function factorialConRecursion( a ){
    if( a < 1 ) 
        return 1;
    return a * factorialConRecursion( a - 1)
}

console.log ("Saludo  1 = " + factorialConRecursion(1,10));
console.log ("Saludo  2 = " + factorialConRecursion(2,10));
console.log ("Saludo  3 = " + factorialConRecursion(3,10));
console.log ("Saludo  4 = " + factorialConRecursion(4));
console.log ("Saludo  5 = " + factorialConRecursion(5));
console.log ("Saludo  6 = " + factorialConRecursion(6));
console.log ("Saludo  7 = " + factorialConRecursion(1-7));
console.log ("Saludo  8 = " + factorialConRecursion(8,1));
console.log ("Saludo  9 = " + factorialConRecursion(9,0));
console.log ("Saludo 10 = " + factorialConRecursion(10,0));

function greetings(a){
    if (a > 1){
        greetings(a-1)
        return console.log("grettings = " + a);
    }
    else{
        return console.log("greetings" + a);
    }
}

console.log(greetings(10));

function saludo( cantidad, iteracion=1 ){
    console.log("saludo" + iteracion);
    if( iteracion >= cantidad) 
        return 1;
    return saludo( cantidad, iteracion+1 );
}
saludo(10);
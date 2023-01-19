console.log("hola javascript Sesion JS05")


//Operador de asignacion
let estadoDiminutoDeMexico = "Tlaxcala";
{
    let espaniol = ingles = rumano = turco = vasco = chino = true;
    let japones = true ; let cholo = false; // variable global no declaradas

}

console.log("Francisco habla ingles = " + ingles);
console.log("Francisco habla rumano = " + rumano);
console.log("Francisco habla turco = " + turco);
console.log("Francisco habla vasco = " + vasco);
console.log("Francisco habla chino = " + chino);

// console.log("Francisco habla español = " + espaniol);

// Operadores aritméticos
// multiplicacion
let metrosCuadrados = 10 * 30; //300;
//  Tenemos 2 terrenos
// metroscuadrados = metrosCuadrados * 2;
// Operadores simplicficados
metrosCuadrados *= 2;

// division
// dividimos el terreno entre 3 hijos
metrosCuadrados /=3;
console.log("m2 de 3 terrenos " + metrosCuadrados );

// residuio%
// Quiero saber si los metrosCuadrados son multiplo de 2
let esMultiplo2 = metrosCuadrados % 2 === 0 ? " Si":"No";// 0
console.log("La cantidad es múltiplo de 2?" + esMultiplo2 );

esMultiplo2 = metrosCuadrados % 2 ? "No":" Si";// 0
console.log("La cantidad es múltiplo de 2?" + esMultiplo2 );

esMultiplo2 = !(metrosCuadrados % 2) ? " Si":" No";// 0
console.log("La cantidad es múltiplo de 2?" + esMultiplo2 );

// Resta
let precioTerreno = 90000;
let precioM2 =  precioTerreno/300;
console.log(`Precio del metro cuadrado: ${precioM2}(MXN) pesitos`);
let cantidadPagada = 30000;
let cantidadRestante = precioTerreno - cantidadPagada;
console.log(`Cantidad restante: $${cantidadRestante} pesos`);
// Se abono $10,000.
console.log(`Cantidad restante: $${cantidadRestante -= 10000}  pesos`);

//Suma
//
/*let costoEscrituras = precioTerreno * 0.08;
*/
const costoEscrituras = precioTerreno * 0.08;
precioTerreno += costoEscrituras;
console.log("Terreno + escrituras $" + precioTerreno);

//console.log("Terreno + escrituras: $" + (precioTerreno += precioTerreno * 0.08));

//Concatenacion  de strings
let nombre = " Alan";
nombre += " García"; // nombre = nombre + "garcía"
console.log("Nombre personas CH22:" + nombre);

// Operadores de incremenento y decremento
// preincremento  ++variable  ,  postincremento  variable++
// predecremento  --variable, postdecremento variable--

numClavosParaMiCasa = 100;
numClavosParaMiCasa++;
console.log("Número de clavos para mi casa: " + numClavosParaMiCasa); //101
++numClavosParaMiCasa; // 102
console.log("Número de clavos para mi casa: " + numClavosParaMiCasa); //102
console.log("Número de clavos para mi casa: " + numClavosParaMiCasa++);
console.log("Número de clavos para mi casa: " + ++numClavosParaMiCasa);
//-----------------
let respuestasExamen = 95;
//Agregamos punto extra
console.log("Resultado final: "+ respuestasExamen++); // 95 -> var = 96

respuestasExamen = 82;
do{
    console.log("Resultado: " + respuestasExamen); //  ultimo valor 101
}while( respuestasExamen++ <=100 )
console.log("Resultado  final: " + respuestasExamen); // ulimo vaos 102

respuestasExamen = 82;
do{
    console.log("Resultado2: " + respuestasExamen); //  ultimo valor 100
}while( ++respuestasExamen <=100 )
console.log("Resultado  final2: " + respuestasExamen); // ulimo vaos 101

respuestasExamen = 82;
do{
    console.log("Resultado3: " + respuestasExamen); //  ultimo valor 100
    // ++respuestasExamen o ++respuestasExamen
}while( ++respuestasExamen <=100 )
console.log("Resultado  final3: " + respuestasExamen); // ulimo vaos 101

let nivelSuenio = 99;
if ( ++nivelSuenio === 100) console.log("1. Me voy a  mimir en la sesión");

nivelSuenio = 99;
if ( nivelSuenio++ === 100) console.log("2. Me voy a  mimir en la sesión");
console.log("3. Me voy a  mimir en la sesión" + nivelSuenio); //100

// Pre incremento
let x = 10;
x = x + 1;
console.log(x); //++x

// Post incremento
let y = 10;
console.log(y); //y++
y = y + 1;
//------------------
x = 3;
y = x++;
console.log(`x:${x} y:${y}`); // x:4 y:3

x = 3;
y = ++x;
console.log(`x:${x} y:${y}`);  // x:4 y:4

// operadores relacionales
/*
* <= mayor o igual que
* >= mayor o igual que
* < mayor que
* > menor que
*/
let numPerfumes = 10;
if ( numPerfumes > 10 ) console.log("1. Que legancia la de francia");
if ( numPerfumes >= 10 ) console.log("2. Que legancia la de francia");
if ( numPerfumes < 10 ) console.log("3. Que legancia la de francia");
if ( numPerfumes <= 10 ) console.log("4. Que legancia la de francia");

let numMatriculaPavel = 10025;
if ( numPerfumes == 10025 ) console.log("1. Pavel esta aprobado");
if ( numPerfumes === 10025 ) console.log("2. Pavel esta en nivel fase 5");
if ( numPerfumes >= 10025 ) console.log("3. Pavel esta en CUCEI");
if ( numPerfumes <= 10025 ) console.log("4. Que legancia la de francia");

//Operadores lógicos
// && (and) || or
let numRebosos = 3;
let teGustaReboso = true;
let vivesEnElExtranjero = true;
if (numRebosos>5 || teGustaReboso) console.log("Te regalo uno de Oaxaca");

if (numRebosos>5 || teGustaReboso && vivesEnElExtranjero )
    console.log("Te regalo uno de Oaxaca");

{
numRebosos = 3;
let teGustaReboso = false;
let vivesEnElExtranjero = false;
if (numRebosos>5 || teGustaReboso) console.log("Te regalo uno de Oaxaca");

if (numRebosos>5 || teGustaReboso && vivesEnElExtranjero )
    console.log("Te regalo uno de Oaxaca");
}

// Operadores de corto circuito
// OP1 && OP2 Si OP1 = true,  se realiza el resultado de OP2
let online = true
let mensaje = "Estamos en linea "
let respuesta = online && mensaje;
console.log(`respuesta:` + respuesta);

let edadPersona = 18;
mensaje = "Puede votar"
console.log("La persona puede votar? " + edadPersona >= 18 && mensaje );

// OP1 || OP2 Si OP1 = true, se realiza el resultado de OP1

let isOnline = true;
let isActive = true;

if( isOnline){
    if (isActive)
        console.log("Estamos in");
}

if (isOnline && isActive)
console.log("Estamos in");

isOnline && isActive && console.log("Estamos in")

let edadMiSobrina = 20;
console.log( edadMiSobrina>18 && "Puede votar" );
let numDeQuesadillasAComer = 3;
let guisado = "huitlacoche"

console.log( "Montse comerá quesadilla de: " + numDeQuesadillasAComer&&guisado );

let nombreConductor = "";
let tieneLicenciaConducir = true;
let edadConductor = 50;

const seRentaAuto = nombreConductor && tieneLicenciaConducir && edadConductor>60;
console.log("Resultado: " + seRentaAuto);

{
let nombreConductor = "Pax";
let tieneLicenciaConducir = true;
let edadConductor = 50;

let seRentaAuto = nombreConductor && tieneLicenciaConducir && edadConductor<60;
console.log("Resultado: " + seRentaAuto);}

const datosQuesadilla = {
    tortilla: "maiz",
    tieneQueso: true,
    pica: "poquito"
}

const picaLaQuesadilla = datosQuesadilla.pica && "Pisca mucho";
console.log(picaLaQuesadilla);
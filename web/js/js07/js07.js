console.log("hola javascript Sesion JS07")

const introduccion = () =>{
    console.log(("01.- Bienvenido a CH22"));
}

const desarrollo = () => {
    console.log("02.- Adelante, pasen");
}

/*const desarrolloAsincrono = () => {
    setTimeout( ()=> console.log("Asincrono, adelante"), 2000);
}
*/
const desarrolloAsincrono = (delay) => {
    setTimeout( ()=> console.log("Asincrono, adelante"), 2000);
}
let idInterval;
const setIntervalAsincrono = (delay=2000) =>{
    let contador = 0;
    idSetInterval = setInterval( ()=> console.log(`Rockstar ${++contador}`) , delay);
}

const stopIntervalAsincrono = () =>{
    setTimeout ( ()=> {
        console.log("Se detiene el intervalo");
        clearInterval(idSetInterval);
    } , 10_010 );
}

const despedida = () => {
    console.log("03.- Nos vemos luego");
}

//Programacion Sincrona
introduccion();
desarrollo();
despedida();

//Programacion Aincrona
introduccion();
desarrolloAsincrono(2000) ;
desarrolloAsincrono(6000);
setIntervalAsincrono(2000);
stopIntervalAsincrono();
despedida(); // Esta instrucción no espera a que finalice  la función asincrona

const refStartInterval = document.getElementById("start-interval");
const refStopInterval = document.getElementById("stop-interval");

let idCounter;
refStartInterval.addEventListener('click', (event)=>{
    console.log(event);
    let counter=0;
    refStartInterval.disabled = true;
    refStopInterval.disabled = false;
    idCounter = setInterval( ()=>console.log(`Contador ${++counter}`), 1000 );
} );

function stopCounter(e){ //event
    console.log(e);
    console.log("Se detiene el contador");
    clearInterval(idCounter);
    refStartInterval.disabled = false;
    refStartInterval.disabled = true;
}
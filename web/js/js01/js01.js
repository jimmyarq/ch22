console.log("ejemplo JS01")

/* Son 7 datos primitivos de Jaavscript
- String ( "Hola Mundo" )

- Number ( 1500 )
Los mumeros  se yutlizn 64 bit para almacenarlo
pero solo se utiilizan 53 casillas

- BigInt ( 1250n )
Convertir un dato numerico a BigInt
let bigIntVar = BigInt( maxNumber );
bigInitVar + 1m

- Boolean ( True / False )

- Undefined (  )
Un dato no se define el tipo de dato, 
- Null
Intencionalmente se borra el tipo de dato.
- Symbol

Tipo de datos object:
- Object
let myObject = {};
- Array
Const MyArray = [];
Funciones

*/

let myObject = { clave: "Valor", edad: 18, 5:5 };
console.log(myObject.edad);
const propiedad = 'edad';
console.log(myObject[ propiedad] );
console.log(myObject[ '5'] );

// Conversiones de datos de String a Number
/*
parseInt
parseFloat
*/

// Convesiones de datos number a string
( 1234 ).toString( radix )


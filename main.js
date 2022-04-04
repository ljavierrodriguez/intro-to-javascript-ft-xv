/* Declarar variables en javascript
var 
let 
const 

Syntax:

   var | let | const variableName = value;


Data Types:

    String = "" | '' | ``
    Number = 1 -1 1.5 -1.8 
    Boolean = true | false
    Undefined = undefined

    Object:
        Array = [] | Array()
        Literal Object = { atributo: valor }
        Null = null

*/

var nombre = "Luis"; // Asignacion de un valor

//let nombre = "Pedro";

const PI = 3.1416;

//PI = 2.5;


let name = "John";
let lastname = 'Doe'
let fullname = `John Doe`;

let age = 50;
let salary = 1500.35;
let grade = -10;

let single = false;
let enter = true;

let active = undefined;
let nuevo;


let $status = ["active", "inactive", "canceled", "suspended", "approved"];
//let status = new Array("active", "inactive", "canceled", "suspended", "approved");

let alumno = {
    nombre: 'Benjamin',
    apellido: 'Larenas',
    edad: 22,
    solter: true,
    notas: [1, 2, 3],
    materias: [{ id: 1, materia: 'Matematica' }, { id: 2, materia: 'Fisica' }],
    direccion: {
        calle: 'Santiago',
        codigo_postal: 1222,
        region: 'RM'
    }
}

let currentUser = null;

console.log(typeof (name));
console.log(typeof (lastname));
console.log(typeof (fullname));

console.log(typeof (age));
console.log(typeof (salary));
console.log(typeof (grade));

console.log(typeof (single));
console.log(typeof (enter));

console.log(typeof (active));
console.log(typeof (prueba));
console.log(typeof (nuevo));

console.log(typeof ($status));
console.log(Array.isArray($status));


console.log(typeof (alumno));

console.log(typeof (currentUser));

console.log($status[3])

$status[2] = "hidden";

console.log($status);

console.log(alumno["edad"]);
console.log(alumno.edad);
console.log(alumno.direccion.region);
console.log(alumno["direccion"].region);
console.log(alumno["direccion"]["region"]);

/*
Tipo de Operaciones

+
-
*
/
%
**

Tipo de Operadores Logicos (&& (and), || (or), ! (not))

true && true  // true
true && false // false
false && false // false

true || true // true
true || false // true 
false || false // false

!true && !true  // false
!true && !false // false
!false && !false // true

!true || !true // false
!true || !false // true 
!false || !false // true


Tipo de Comparacion

=== Igual que (valida si el valor y el tipo de datos es el mismo) 5 === '5' // false
== Igual que (valida si el valor es el mismo) 5 == '5' // true
!== Distinto de (valida si son diferentes tanto en valor como en tipo de datos) 5 !== '5' // true
!= Distinto de (valida si son diferentes en valor) 5 != '5' // false
>=
<=
>
<

*/
console.log(5 !== '5')
console.log(5 != '5')

/* 

if(condicion){
    // sentencias
}

if(condicion){
    // sentencias
} else {
    // sentencias
}

if(condicion){
    // sentencias
} else if (condicion){
    // sentencias
} else {
    // sentencias
}

*/

let x = 5;
let y = 10;
let z = 6;

if (x > y && x > z) {
    console.log("El mayor es X");
}

if (y > x && y > z) {
    console.log("El mayor es Y");
}

if (z > x && z > y) {
    console.log("El mayor es X");
}

/***********************************/

if (x > y || x > z) {
    console.log("El mayor es X");
}

if (y > x || y > z) {
    console.log("El mayor es Y");
}

if (z > x || z > y) {
    console.log("El mayor es X");
}

/*************************************/

if (x > y) {
    // true
    console.log("El mayor es X");
} else {
    // false
    console.log("El mayor es Y");
}

if (x > y && x > z) {
    console.log("El mayor es X");
} else if (y > z) {
    console.log("El mayor es Y");
} else {
    console.log("El mayor es Z");
}


let op = 3;
if (op == 1) {
    console.log("La opcion es 1");
} else if (op == 2) {
    console.log("La opcion es 2");
} else if (op == 3) {
    console.log("La opcion es 3");
} else {
    console.log("La opcion no es valida");
}


switch (op) {
    case 1:
        console.log("La opcion es 1");
        break;

    case 2:
        console.log("La opcion es 2");
        break;

    case 3:
        console.log("La opcion es 3");
        break;

    case 4:
        console.log("La opcion es 4");
        break;

    default:
        console.log("La opcion no es valida");
        break;
}

// let mayor = x > y ? true : false;

let mayor = x > y && x > z ? "El mayor es X" : y > z ? "El mayor es Y" : "El mayor es Z";
console.log(mayor);


let nombre2 = "Santiago";
let apellido2 = "De Aguirre";

let nombreCompleto = "Bienvenido, " + nombre2 + " " + apellido2 + ", a tu primera clase de javascript";

console.log(nombreCompleto);

let nombreCompleto2 = `Bienvenido, ${nombre2} ${apellido2}, a tu primera clase de javascript`;

console.log(nombreCompleto2);

console.log(Math.abs(-10.5));
console.log(Math.sqrt(9))


console.log(Math.round(18.5));
console.log(Math.floor(18));
console.log(Math.ceil(18.01));

console.log(Math.random()) // <0.0000000000 0.999999999999> <> 1
console.log(Math.floor(Math.random() * 5))
console.log(Math.floor((Math.random() * (10 - 5)) + 5) + 1);
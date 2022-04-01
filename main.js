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
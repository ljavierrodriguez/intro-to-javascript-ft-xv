/* 

function functionName(){
    // sentencias de codigo
}

*/

saludo();

function saludo() {
    console.log("Saludo desde una funcion");
}

const prueba = function () {
    console.log("Ejecutando una funcion Anonima");
}
prueba();


(function () {
    console.log("Ejecutando otra funcion anomina");
})()


const arrowFunctionName = () => {
    console.log("Ejecutando una funcion arrow en javascript");
}

arrowFunctionName();

const saludo2 = () => console.log("Ejecutando una segunda funcion arrow");
saludo2();

console.log(saludo2);

console.log(() => { let result = 0 });

const suma = (a, b) => {
    return a + b;
}

console.log(suma(3, 4));


function calculadora(num1, num2, func) {
    return func(num1, num2);
}

console.log(calculadora(3, 4, suma));
console.log(calculadora(3, 4, (a, b) => a - b));

function saludo_matutino(lastname, name = "Anonimous") {
    return "Hola, " + name + " " + lastname;
}

console.log(saludo_matutino("De Aguirre"))

function operacion() {
    return function () {
        return function (a, b) {
            return "Resultado: " + (a + b);
        };
    }
}

console.log(operacion()()(3, 4));

operacion()()();


const operacionesCal = (num1, num2, op) => { // hoisting

    return op == "suma" ? suma(num1, num2) : op == "resta" ? resta(num1, num2) : 0;

    function suma(a, b) {
        return a + b;
    }
    function resta(a, b) {
        return a - b;
    }
}

console.log(operacionesCal(3, 4, "suma"));


function opSuma(a, b){
    return a + b;
}

console.log(opSuma(10, 4, 23, 32, 12));
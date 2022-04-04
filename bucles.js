/* 

for(contador; condicion; incremento){

}

for(let x in valores){}

for(let x of valores){}

do {

} while (condicion);

while(condicion){

}

*/

let nombres = ["Pedro", "Paco", "Luis", "Hugo", "Manuel", "Maria", "Ana", "Rosa"];
let all_notas = [{ name: "Pedro", notas: [1, 2, 3, 5, 10] }, { name: "Miguel", notas: [1, 2] }, { name: "Andres", notas: [1, 2, 3] }]

//      Paso 1             Paso 2       Paso 4
for (let contador = 1; contador <= 10; contador++) {
    console.log(contador); // Paso 3
}


for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

for(let i = 0; i < all_notas.length; i++){
    console.log(all_notas[i].name);
    for(let j = 0; j < all_notas[i]["notas"].length; j++){
        //console.log(all_notas[i]["notas"][j]);
        console.log(all_notas[i].notas[j]);
    }
}

// for in devuelve la posicion donde consigue un elemento
for(let i in all_notas){ 
    console.log(all_notas[i].name);
    for(let j in all_notas[i]["notas"]){
        //console.log(all_notas[i]["notas"][j]);
        console.log(all_notas[i].notas[j]);
    }
}

// for of devulve el valor que consigue dentro del array
for(let obj of all_notas){
    console.log(obj);
    console.log(obj.name);
    for(let nota of obj.notas){
        console.log(nota);
    }
}

all_notas.forEach((obj) => {
    console.log(obj);
    console.log(obj.name);
    obj.notas.forEach((nota) => {
        console.log(nota);
    })
})


let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);


let j = 1;

while(j <= 10){
    console.log(j);
    j++;
}

/*
contador / salida 
1           1
2           2
3           ...

9           9
10          10
11          ...



*/
/* JS del lado del servidor */
/* No requiere un documento HTML para ser ejecutado */

console.log("Hola Mundo JS con Node");

/* Cálculo */
let edad_1 = 12;
let edad_2 = 32;

/* Para declarar una variable se utiliza let, para declarar una constante se utiliza const */
console.log("Edad Promedio: ");
console.log((edad_1 + edad_2) / 2);

/* Medir el tiempo de un proceso */
//Empieza a medir el tiempo
console.time("mi_proceso");

    for(let i = 0; i < 10000000; i++){

    }

//Termina de medir el tiempo
console.timeEnd("mi_proceso");

/* Objetos tipo tabla */
/* Se define un arreglo de objetos JSON */
let users = [
    {nombre: "Alonso", edad: 22},
    {nombre: "Aldo", edad: 21}
];
console.log(users)

//Si no se desea ver en el formato que devuelve console.log(), se puede utilizar console.table(), que devuelve el formato JSON en forma de tabla
console.table(users)
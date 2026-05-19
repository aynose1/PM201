import PromptSync from 'prompt-sync';

console.log(`Te damos la bienvenida a nuestro restaurante:
            ¿Qué le gustaría hacer?
            1. Consultar Productos.
            2. Crear Pedido.
            3. Listar Pedidos.

            Para salir ingrese cualquier otro caracter.
    `);

const prompt = PromptSync();

const opcion = prompt(`Ingrese la opción seleccionada:`);

while (true) {
    if (opcion == 1) {
        console.log(`Op1`);
    } else if (opcion == 2) {
        console.log(`op2`)
    }else if (opcion == 3) {
        console.log(`op3`);
    } else {
        break;
    }
}
console.log(`Saliendo del programa ...`)
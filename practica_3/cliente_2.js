let promociones = [
    {productos: ["cafe", "Pan"], precio: 20},
    {productos: ["cafe", "cafe"], precio: 10},
    {productos: ["frappe", "pan"], precio: 50}
];

function crear_promociones (promociones, lista_productos, precio) {
    promociones.push({productos: lista_productos, precio: precio});
}

function mostrar_promociones (promociones) {
    promociones.forEach((indice, elemento) => {
        console.log(``);
        console.log(`${indice}: ${elemento}`);
    });
}

function productos_disponibles (productos) {
    productos.forEach((indice, elemento) => {
        console.log(`${indice} - ${elemento.nombre} = ${elemento.precio}`);
    });
}

function menu_filtrar (opcion) {
    console.log(`Seleccionar filtro:
                1. Productos Baratos.
                2. Productos Caros.
                3. Bebidas.
                4. Postres
                0. Volver.
            `);
    if (opcion == 1) {
        //Llamar función de productos baratos
    } else if (opcion == 2) {
        //Llamar función de productos caros
    } else if (opcion == 3) {
        //Llamar función de bebidas
    } else if (opcion == 4) {
        //Llamar función de postres
    }
}

crear_promociones(promociones, ["Huevo", "Agua", "Azucar"], 100);
console.table(promociones);
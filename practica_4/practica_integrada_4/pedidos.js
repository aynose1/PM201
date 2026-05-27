export class Pedido {
    constructor(obj_lista_productos){
        this.obj_lista_productos = obj_lista_productos.productos;
        this.productos_pedidos = [];
    }

    agregar_pedido (indice_producto, cantidad) {
        let producto = this.obj_lista_productos[indice_producto];
        this.productos_pedidos.push({producto: producto.nombre, precio: producto.precio, cantidad: cantidad, estado: "En espera"});
    }

    ver_pedidos () {
        console.log(`\nPedidos realizados:`);
        console.table(this.productos_pedidos);
    }

    obtener_subtotal () {
        let subtotal = this.productos_pedidos.reduce((total, elemento) => {
            let precio = elemento.precio;
            let cantidad = elemento.cantidad;
            total += (precio * cantidad);
            return total;
        }, 0);

        return subtotal;
    }

    obtener_total () {
        let subtotal = this.obtener_subtotal();
        let total =  subtotal + (subtotal * 0.16);
        return total;
    }

    validar_pedidos (recetas, inventario, indice) {
        let receta = recetas.find(receta => receta.producto === this.productos_pedidos[indice].producto);
        let ingredientes = receta.ingredientes;
        let total;
        ingredientes.forEach(item => {
            let comp = inventario.find(inventario.ingrediente == item);
            total = total * comp;
        });
        return total;
    }
}



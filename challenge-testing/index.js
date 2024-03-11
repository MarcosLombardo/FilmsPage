class CarritoCompra {
    constructor() {
        this.carrito = [];
    }

    agregarProducto(producto) {
        this.carrito.push(producto);
    }

    calcularTotal() {
        let total = 0;
        for (const producto of this.carrito) {
            total += producto.price * producto.quantity;
        }
        return total;
    }

    aplicarDescuento(porcentaje) {
        const subtotal = this.calcularTotal();
        const descuento = this.calcularTotal() * (porcentaje / 100);

        const total = subtotal - descuento;

        return total;
    }
}

module.exports = CarritoCompra;
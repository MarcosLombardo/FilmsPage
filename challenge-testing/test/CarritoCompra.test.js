/* 

- CarritoCompra debería ser una clase
- CarritoCompra debería ser una instancia de la clase CarritoCompra
- Debería guardar productos en una lista
- Debería tener un método llamado agregarProducto 
- Debería tener un método llamado calcularTotal
- Debería tener un método llamado aplicarDescuento
- El método agregarProducto debería poder agregar un producto a lista
- El método calcularTotal debería poder calcular el total de la compra sumando los precios de todos los productos que se encuentren en el carrito
- El método aplicarDescuento debería aplicar dicho descuento al total de la compra

*/

const CarritoCompra = require("../index");

describe('Clase CarritoCompra', () => {
    let carritoCompra;

    beforeEach(() => {
        carritoCompra = new CarritoCompra()
    });

    describe('Sobre el constructor de la clase CarritoCompra', () => {

        it('CarritoCompra debería ser una clase', () => {
            expect(typeof CarritoCompra.prototype.constructor).toBe('function');
        });

        it('CarritoCompra debería ser una instancia de la clase CarritoCompra', () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true);
        });

        it('Debería guardar productos en una lista', () => {
            expect(carritoCompra.carrito).toEqual([]);
        });

    });

    describe('Métodos de la clase CarritoCompra', () => {
        
        const producto1 = {
            id: 1,
            name: 'Lapicero azul',
            price: 1000,
            quantity: 3
        }
        
        const producto2 = {
            id: 2,
            name: 'Lapicero negro',
            price: 900,
            quantity: 5
        }

        it('Debería tener un método llamado agregarProducto', () => {
            expect(typeof carritoCompra.agregarProducto).toBe('function');
        });

        it('Debería tener un método llamado calcularTotal', () => {
            expect(typeof carritoCompra.calcularTotal).toBe('function');
        });

        it('Debería tener un método llamado aplicarDescuento', () => {
            expect(typeof carritoCompra.aplicarDescuento).toBe('function');
        });

        it('El método agregarProducto debería poder agregar un producto a lista', () => {
            carritoCompra.agregarProducto(producto1);
            expect(carritoCompra.carrito).toContain(producto1);
        });

        it('El método calcularTotal debería poder calcular el total de la compra sumando los precios de todos los productos que se encuentren en el carrito', () => {
            carritoCompra.agregarProducto(producto1);
            carritoCompra.agregarProducto(producto2);

            const totalExpect = producto1.price * producto1.quantity + producto2.price * producto2.quantity;

            const total = carritoCompra.calcularTotal();

            expect(total).toBe(totalExpect);
        });

        it('El método aplicarDescuento debería aplicar dicho descuento al total de la compra', () => {
            carritoCompra.agregarProducto(producto1);
            carritoCompra.agregarProducto(producto2);

            const subtotal = producto1.price * producto1.quantity + producto2.price * producto2.quantity;

            const porcentajeDescuento = 15;

            const totalExpect = subtotal - (subtotal * (porcentajeDescuento / 100));

            const total = carritoCompra.aplicarDescuento(porcentajeDescuento);

            expect(totalExpect).toBe(total);
        });
    });
});
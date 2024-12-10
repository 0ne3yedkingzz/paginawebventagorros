let carrito = [];

function agregarCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto} - Cantidad: ${index + 1}`;
        listaCarrito.appendChild(li);
    });
}
const cartItems = [];

// Seleccionar elementos del DOM
const cart = document.querySelector('.cart');
const cartItemsList = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');
const checkoutButton = document.querySelector('#checkout-button');
const productButtons = document.querySelectorAll('.add-to-cart');

// Agregar evento click a los botones de producto
productButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.product;
        const product = {
            id: productId,
            name: `Producto ${productId}`,
            price: parseInt(button.previousElementSibling.textContent.replace('$', ''))
        };
        cartItems.push(product);
        updateCart();
    });
});

// Actualizar el carrito de compras
function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

// Pagar el carrito de compras
checkoutButton.addEventListener('click', () => {
    alert(`Total a pagar: $${cartTotal.innerText.replace('Total: $', '')}`);
    cartItems.length = 0;
    updateCart();
});
// //total a pagar
// const products = document.querySelectorAll('.product');

// products.forEach((product) => {
//     const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));
//     const total = price * 1.16; // Asumimos un impuesto del 16%
//     const totalElement = document.createElement('div');
//     totalElement.classList.add('total');
//     totalElement.textContent = `Total: $${total.toFixed(2)}`;
//     product.appendChild(totalElement);
// });

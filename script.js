document.querySelectorAll('.product-image').forEach((item) => {
  item.addEventListener('mousemove', function (e) {
    const width = this.offsetWidth;
    const height = this.offsetHeight;
    const centerX = this.offsetLeft + width / 2;
    const centerY = this.offsetTop + height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = (mouseY / height) * 30; // Adjust sensitivity
    const rotateY = (mouseX / width) * -30;

    this.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  });

  // Reset transform when mouse leaves the product image
  item.addEventListener('mouseleave', function () {
    this.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});

let cart = [];
let total = 0;

function addToCart(productName, price) {
    // Add product to the cart
    cart.push({ productName, price });

    // Update the total
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear current cart items
    cartItems.innerHTML = '';

    // Add each item in the cart to the list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - ₹${item.price}`; // Change to rupees
        cartItems.appendChild(li);
    });

    // Update the total price
    cartTotal.textContent = `Total: ₹${total.toFixed(2)}`; // Change to rupees
}

function processPayment() {
    // Add payment processing logic here (e.g., redirect to payment page)
    alert('Proceeding to payment. Total: ₹' + total.toFixed(2)); // Change to rupees
}

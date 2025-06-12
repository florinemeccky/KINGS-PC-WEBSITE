document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.onclick = () => {
      const product = button.closest('.product');
      const name = product.getAttribute('data-name');
      const price = parseInt(product.getAttribute('data-price'));

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      cart.push({ name, price });

      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`${name} added to cart!`);
    };
  });
});

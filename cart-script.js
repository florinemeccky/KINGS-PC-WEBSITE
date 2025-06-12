document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total-amount');
  const clearBtn = document.getElementById('clear-cart');

  // Clear any existing content to prevent duplication
  cartItemsContainer.innerHTML = '';

  // Get cart data from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    totalDisplay.textContent = '0';
    return;
  }

  let total = 0;

  // Display each item
  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `<p>${item.name} - Tzs ${item.price.toLocaleString()}</p>`;
    cartItemsContainer.appendChild(itemDiv);
    total += item.price;
  });

  // Show total
  totalDisplay.textContent = total.toLocaleString();

  // Clear Cart button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      localStorage.removeItem('cart');
      window.location.reload(); // Refresh to show "cart is empty"
    });
  }
});

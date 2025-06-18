document.addEventListener("DOMContentLoaded", () => {
  const products = {
    1: { name: "Тестовий товар 1", price: 199 },
    2: { name: "Тестовий товар 2", price: 299 }
  };
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  cart.forEach(id => {
    const item = products[id];
    if (item) {
      const div = document.createElement("div");
      div.textContent = `${item.name} — ${item.price} грн`;
      container.appendChild(div);
    }
  });
  document.getElementById("order-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Замовлення оформлено! Ми зв'яжемось з вами.");
    localStorage.removeItem("cart");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Тестовий товар 1", price: 199, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Тестовий товар 2", price: 299, image: "https://via.placeholder.com/150" }
  ];
  const container = document.getElementById("product-list");
  if (container) {
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `<img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3><p>${product.price} грн</p>
        <button onclick="addToCart(${product.id})">До кошика</button>`;
      container.appendChild(div);
    });
  }
});
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Товар додано до кошика!");
}

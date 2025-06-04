const products = [
  {
    id: 1,
    name_uk: "Футболка",
    name_ru: "Футболка",
    price: 350,
    image: "images/tshirt.jpg"
  },
  {
    id: 2,
    name_uk: "Кросівки",
    name_ru: "Кроссовки",
    price: 1200,
    image: "images/shoes.jpg"
  },
  {
    id: 3,
    name_uk: "Годинник",
    name_ru: "Часы",
    price: 950,
    image: "images/watch.jpg"
  }
];

function renderProducts(lang = "uk") {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name_uk}" />
      <h3>${lang === "ru" ? product.name_ru : product.name_uk}</h3>
      <p>${product.price} ₴</p>
      <button onclick="addToCart(${product.id})">${lang === "ru" ? "Купить" : "Купити"}</button>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
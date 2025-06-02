const products=[
  {id:1,name:"Футболка",price:1200,image:"https://via.placeholder.com/200x150?text=Футболка"},
  {id:2,name:"Штаны",price:2500,image:"https://via.placeholder.com/200x150?text=Штаны"},
  {id:3,name:"Кроссовки",price:4500,image:"https://via.placeholder.com/200x150?text=Кроссовки"},
  {id:4,name:"Рюкзак",price:3100,image:"https://via.placeholder.com/200x150?text=Рюкзак"},
];

const cart=[];
const productList=document.getElementById("product-list");
const cartItems=document.getElementById("cart-items");
const cartTotal=document.getElementById("cart-total");

products.forEach(product=>{
  const el=document.createElement("div");
  el.className="product";
  el.innerHTML=`
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price} ₽</p>
    <button onclick="addToCart(${product.id})">В корзину</button>
  `;
  productList.appendChild(el);
});

function addToCart(id){
  const product=products.find(p=>p.id===id);
  cart.push(product);
  renderCart();
}

function renderCart(){
  cartItems.innerHTML="";
  let total=0;
  cart.forEach(item=>{
    total+=item.price;
    const el=document.createElement("div");
    el.textContent=`${item.name} — ${item.price} ₽`;
    cartItems.appendChild(el);
  });
  cartTotal.textContent=total;
}

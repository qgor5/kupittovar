<script>
  import { addToCart } from '../stores/cart.js';

  const products = [
    { id: 1, name: 'Товар 1', price: 150, description: 'Опис товару 1' },
    { id: 2, name: 'Товар 2', price: 250, description: 'Опис товару 2' },
    { id: 3, name: 'Товар 3', price: 350, description: 'Опис товару 3' }
  ];

  function handleAdd(product) {
    addToCart(product);
  }
</script>

<h2 class="text-3xl font-semibold mb-6">Каталог товарів</h2>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {#each products as product}
    <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 class="text-xl font-bold">{product.name}</h3>
      <p class="text-gray-700 my-2">{product.description}</p>
      <p class="text-lg font-semibold">{product.price} ₴</p>
      <button
        class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        on:click={() => handleAdd(product)}
      >
        Додати в кошик
      </button>
    </div>
  {/each}
</div>

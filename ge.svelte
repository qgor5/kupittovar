<script>
  import { cart, removeFromCart, decreaseQuantity, addToCart } from '../../stores/cart.js';
  import { derived } from 'svelte/store';

  const total = derived(cart, $cart =>
    $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  function checkout() {
    alert('Замовлення оформлено! Дякуємо!');
    cart.set([]); // очищаємо кошик
  }
</script>

<h2 class="text-3xl font-semibold mb-6">Ваш кошик</h2>

{#if $cart.length === 0}
  <p>Кошик порожній.</p>
{:else}
  <ul class="space-y-4">
    {#each $cart as item}
      <li class="bg-white p-4 rounded shadow flex justify-between items-center">
        <div>
          <h3 class="text-xl font-bold">{item.name}</h3>
          <p class="text-gray-600">Ціна: {item.price} ₴</p>
          <p class="text-gray-600">Кількість: {item.quantity}</p>
        </div>
        <div class="flex gap-2">
          <button on:click={() => decreaseQuantity(item.id)} class="px-3 py-1 bg-yellow-500 text-white rounded">-</button>
          <button on:click={() => addToCart(item)} class="px-3 py-1 bg-green-600 text-white rounded">+</button>
          <button on:click={() => removeFromCart(item.id)} class="px-3 py-1 bg-red-600 text-white rounded">Видалити</button>
        </div>
      </li>
    {/each}
  </ul>

  <div class="mt-6 p-4 bg-gray-100 rounded">
    <p class="text-xl">Загальна сума: <strong>{$total} ₴</strong></p>
    <button on:click={checkout} class="mt-4 px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">
      Оформити замовлення
    </button>
  </div>
{/if}
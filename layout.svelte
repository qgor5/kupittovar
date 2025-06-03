<script>
  export let data;
</script>

<div class="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
  <header class="bg-white shadow p-4 flex justify-between items-center">
    <h1 class="text-2xl font-bold cursor-pointer" on:click={() => window.location.href = '/'}>
      КупитиТовар
    </h1>
    <nav>
      <a href="/" class="mr-4 hover:underline">Головна</a>
      <a href="/cart" class="hover:underline">Кошик</a>
    </nav>
  </header>

  <main class="flex-1 container mx-auto p-4">
    <slot />
  </main>

  <footer class="bg-white shadow p-4 text-center text-sm text-gray-600">
    © 2025 КупитиТовар. Всі права захищені.
  </footer>
</div>
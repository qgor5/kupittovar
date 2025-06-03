import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      // Папка для сборки
      pages: 'build',
      assets: 'build',
      fallback: 'index.html' // включаем fallback для SPA
    }),
    paths: {
      base: ''
    }
  }
};

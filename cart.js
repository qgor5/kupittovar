import { writable } from 'svelte/store';

const storedCart = typeof localStorage !== 'undefined' ? localStorage.getItem('cart') : null;
export const cart = writable(storedCart ? JSON.parse(storedCart) : []);

cart.subscribe(value => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(value));
  }
});

export function addToCart(product) {
  cart.update(items => {
    const existing = items.find(item => item.id === product.id);
    if (existing) {
      return items.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...items, { ...product, quantity: 1 }];
  });
}

export function removeFromCart(id) {
  cart.update(items => items.filter(item => item.id !== id));
}

export function decreaseQuantity(id) {
  cart.update(items =>
    items
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
  );
}
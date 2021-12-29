
export const saveFavToLS = (products) => {
  const newFav = [];
  products.forEach(prod => {
    if (prod.isFavourite) {
      newFav.push(prod.code)
    }
  });
  localStorage.setItem('favourites', JSON.stringify(newFav));
}

export const cartStatusLS = JSON.parse(localStorage.getItem('cart'));

export const saveCartToLS = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
}
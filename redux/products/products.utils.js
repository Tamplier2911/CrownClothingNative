export const loadMoreProducts = (allProducts, loadedProducts) => {
  const allProductsPure = [...allProducts];
  const loadProductsPure = [...loadedProducts];
  return {
    loadedProducts: [...loadProductsPure, ...allProductsPure.splice(0, 5)],
    allProducts: [...allProductsPure],
  };
};

export default (brands, activeBrandId) => {
  return brands.find(x => x.id === activeBrandId) || brands[0];
};

export default (brands, brandKey) => {
  if (brands[brandKey + 1]) {
    return brands[brandKey + 1];
  }
  if (brands[brandKey - 1]) {
    return brands[brandKey - 1];
  }
  return null;
};

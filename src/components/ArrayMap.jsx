import products from "../products/products";
const ArrayMap = () => {
  const productNames = products.map((product) => (
    <li key={product.id}>{product.name}</li>
  ));
  return <ul>{productNames}</ul>;
};

export default ArrayMap;
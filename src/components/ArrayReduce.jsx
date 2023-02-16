import products from "../products/products";

const ArrayReduce = () => {
  const total = products.reduce((acc, product) => acc + product.price, 0);
  return <p>Total cost of all products: ${total}</p>;
};

export default ArrayReduce;

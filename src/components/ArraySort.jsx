import products from "../products/products";

const ArraySort = () => {
  const sortedProducts = products.sort((a, b) => a.price - b.price);
  const productList = sortedProducts.map((product) => (
    <li key={product.id}>
      {product.name} - ${product.price}
    </li>
  ));
  return <ul>{productList}</ul>;
};

export default ArraySort;

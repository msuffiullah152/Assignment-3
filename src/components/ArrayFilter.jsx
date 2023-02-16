
import products from "../products/products";

const ArrayFilter = () => {
  const saleProducts = products.filter((product) => product.onSale);
  const productList = saleProducts.map((product) => (
    <li key={product.id}>
      {product.name} - ${product.price}
    </li>
  ));
  return <ul>{productList}</ul>;
};

export default ArrayFilter;

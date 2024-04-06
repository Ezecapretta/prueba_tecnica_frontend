import CardProduct from "../../components/cardProduct/CardProduct";

const Products = (products) => {
  console.log(products.products.response);
  return (
    <div>
      {products.products.response?.map((products) => (
        <CardProduct
          key={products.id}
          id={products.id}
          amount={products.amount}
          marca={products.marca}
          name={products.name}
          color={products.color}
          price={products.price}
          description={products.description}
          image={products.image}
        />
      ))}
    </div>
  );
};

export default Products;

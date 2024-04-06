import { Link } from "react-router-dom";

const CardProduct = ({
  id,
  amount,
  marca,
  name,
  color,
  price,
  description,
  image,
}) => {
  console.log(name);
  return (
    <div>
      <Link to={`/detail/${id}`} />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default CardProduct;

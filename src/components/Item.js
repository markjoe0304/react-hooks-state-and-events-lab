import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";
  const handleButtonClick = () => {
    setInCart(prevInCart => !prevInCart);
  };

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButtonClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
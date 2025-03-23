import { useState, useEffect } from "react";
import styles from "./cart.module.css";

const Cart = ({ cart, setCart }) => {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cart?.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);

    return () => {
      setQuantities({});
    };
  }, [cart]);

  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrease = (id) => {
    if (quantities[id] > 1) {
      setQuantities((prev) => ({
        ...prev,
        [id]: prev[id] - 1,
      }));
    }
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);

    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const calculatePrice = (item) => {
    let totalprice = (quantities[item.id] || 1) * item.price;
    return totalprice.toFixed(2);
  };

  return (
    <div className={styles.container}>
      {cart?.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.details}>
            <div className={styles.cardImage}>
              <img src={item.img} />
            </div>
            <div className={styles.cardDetails}>
              <p className={styles.productName}>{item.productName}</p>
              <p className={styles.brand}>{item.brand}</p>
              <p className={styles.price}>Price: ${item.price}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
          <div className={styles.btns}>
            <button
              className={styles.btn}
              onClick={() => handleIncrease(item.id)}
            >
              +
            </button>
            <p className={styles.quantity}>{quantities[item.id] || 1}</p>
            <button
              className={styles.btn}
              onClick={() => handleDecrease(item.id)}
            >
              -
            </button>
            <button
              className={styles.remove}
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
            <p className={styles.totalPrice}>${calculatePrice(item)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cart;

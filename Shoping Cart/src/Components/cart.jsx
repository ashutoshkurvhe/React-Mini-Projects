import { useState } from "react";
import styles from "./cart.module.css"

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  return (
      <div className={styles.container}>
      {cart?.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.cardImage}>
            <img src={item.img} />
          </div>
          <div className={styles.cardDetails}>
            <p className={styles.productName}>{item.productName}</p>
            <p className={styles.brand}>{item.brand}</p>
            <p className={styles.price}>Price: ${item.price}</p>
              </div>
              <div className={styles.btns}>
                  <button className={styles.btn}>+</button>
                  <button className={styles.btn}>-</button>
                  <button className={styles.remove}>Remove</button>
              </div>
          </div>
      ))}
    </div>
  );
};
export default Cart;

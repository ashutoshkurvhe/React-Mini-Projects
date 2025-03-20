import styles from "./cart.module.css";

const Cart = ({ cart, setCart }) => {
  const onIncItem = (itemId) => {
    setCart(
      cart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity ? item.quantity + 1 : 2 }
          : item
      )
    );
  };

  const onDecItem = (itemId) => {
    setCart(
      cart.map((item) =>
        item.id === itemId && (item.quantity || 1) > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (itemId) =>
    setCart(cart.filter((item) => item.id !== itemId));

  const calculateTotal = (item) => {
    const quantity = item.quantity || 1;
    return (quantity * item.price).toFixed(2);
  };

  return (
    <div className={styles.container}>
      {cart?.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.cardImage}>
            <img src={item.img} alt={item.productName} />
          </div>
          <div className={styles.detailsArea}>
            <div className={styles.cardDetails}>
              <p className={styles.productName}>{item.productName}</p>
              <p className={styles.brand}>{item.brand}</p>
              <p className={styles.price}>Price: ${item.price}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
            <div className={styles.btns}>
              <button className={styles.btn} onClick={() => onIncItem(item.id)}>
                +
              </button>
              <span className={styles.quantity}>{item.quantity || 1}</span>
              <button className={styles.btn} onClick={() => onDecItem(item.id)}>
                -
              </button>
              <span className={styles.totalPrice}>
                Total: ${calculateTotal(item)}
              </span>
              <button
                className={styles.remove}
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

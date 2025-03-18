import styles from "./card.module.css";

const Card = ({ product, add }) => {
  const { id, img, productName, brand, price } = product;
  return (
    <>
        <div className={styles.card} key={id}>
          <div className={styles.cardImage}>
            <img src={img} alt={productName} />
          </div>
          <div className={styles.cardDetails}>
            <p className={styles.productName}>{productName}</p>
            <p className={styles.brand}>{brand}</p>
            <p className={styles.price}>Price: ${price}</p>
            <button className={styles.add} onClick={()=>add(product)}>Add</button>
          </div>
        </div>
    </>
  );
};

export default Card;

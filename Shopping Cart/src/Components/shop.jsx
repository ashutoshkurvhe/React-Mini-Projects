import { productsList } from "../itemList.js"
import Card from "./card.jsx";
import styles from "./shop.module.css";

const Shop = ({ add }) => {
  return (
    <>
      <section className={styles.shop}>
        {productsList.map((product) => (
          <Card product={product} key={product.id} add={add}></Card>
        ))}
      </section>
    </>
  );
};

export default Shop;

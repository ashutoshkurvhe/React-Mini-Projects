import { IoMdCart } from "react-icons/io";
import styles from "./navbar.module.css";

const NavBar = ({size,setShow}) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <span className={styles.logo}>Add2Cart</span>
        <div className={styles.cartContainer}>
          <span className={styles.cartIcon} onClick={()=>setShow(false)}>
            <IoMdCart />
          </span>
          <span className={styles.cartCount}>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

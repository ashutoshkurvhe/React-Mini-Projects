import { useState } from "react";
import Shop from "./Components/shop.jsx";
import NavBar from "./Components/navbar.jsx";
import Cart from "./Components/cart.jsx";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const addToCart = (product) => {
    let isPresent = false;
    cart.forEach((item) => {
      if (product.id === item.id) {
        isPresent = true;
      }
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000)
      return
    }
    setCart([...cart,product])
  };
  return (
    <>
      <NavBar size={cart.length} setShow={setShow} />
      {show ? <Shop add={addToCart} /> : <Cart cart={cart} setCart={cart} />
    }
    {warning && <p className="warning">Item Is already present in cart</p>} 
    </>
  );
}

export default App;

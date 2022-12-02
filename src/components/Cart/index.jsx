import { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const [opened, setOpened] = useState(false);
  const productsInCart = useSelector((state) => state.cartItems);
  const handleCartOpen = () => setOpened(!opened);
  console.log(productsInCart);
  return (
    <>
      <div className={styles.cartButton} onClick={handleCartOpen}>
        <img src={bagIcon} alt="" />
        <span>-</span>
      </div>
      {/* где-то тут был компонент, который выводил окно корзины, если opened === true  */}
      {opened && (
        <div>
          {productsInCart.map((el, index) => {
            return (
              <div className={styles.btn_in_cart} key={index}>
                <button type="button">-</button>
                {el.amount}
                <button type="reset">+</button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Cart;

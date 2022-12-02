import { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./cart.module.css";
import {useSelector} from "react-redux";

const Cart = () => {
  const [opened, setOpened] = useState(false);
  const productsInCart = useSelector(state => {return state.cartItems})
  const handleCartOpen = () => setOpened(!opened);


  return (
    <>
      <div className={styles.cartButton} onClick={handleCartOpen}>
        <img src={bagIcon} alt="" />
        <span>-</span>
      </div>
      {/* где-то тут был компонент, который выводил окно корзины, если opened === true  */}
      {opened && <div>{productsInCart.map((el)=>{
        return(
          <div className={styles.btn_in_cart}>
        <button type="button">-</button>
        {el.amount}
        <button type="reset">+</button>
          </div>)})}
          </div>}
    </>
  );
};

export default Cart;

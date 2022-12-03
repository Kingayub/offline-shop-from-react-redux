import { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./cart.module.css";
import {useDispatch, useSelector} from "react-redux";

const Cart = () => {
  const [opened, setOpened] = useState(false);
  const productsInCart = useSelector(state => state.cartItems)
  const productsState = useSelector(state => state.products)
  const handleCartOpen = () => setOpened(!opened);
  const dispatch = useDispatch()
  const handleAddProductInCart = ()=> {
    dispatch({type: "addProductInCart", payload: {
      amountCart:1
      }})
  }

  return (
    <>
      <div className={styles.cartButton} onClick={handleCartOpen}>
        <img src={bagIcon} alt="" />
        <span>{productsInCart.length?productsInCart.length:null}</span>
      </div>
      {opened && <div>{productsInCart.map((el,index)=>{
        const res = productsState.find((item)=> {
          if(item.id===el.productId) {
            return {name:item.name, image:item.image, left:item.left}
          } else return null
        })
        console.log(res)
        return(
          <div className={styles.btn_in_cart}>
            {index+1}

        <button type="button">-</button>
            {`${el.amount} шт.`}
        <button type="button">+</button>
          </div>)})}
          </div>}
    </>
  );
};

export default Cart;

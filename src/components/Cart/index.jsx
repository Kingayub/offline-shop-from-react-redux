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
  //Кнопки увеличение и уменьшение товара в корзине
  const handleIncreaseProductInCart = (elId)=> {
    dispatch({type: "addProductInCart", payload: {
      idProduct:elId
      }})
  }

  const handleDecreaseProductInCart = (elId)=> {
    dispatch({type:'removeProductInCart', payload: {
        idProduct:elId
      }})
  }
  //Удаление товара из корзины
  const handleDeleteProductInCart = (id)=> {
    dispatch({type:'delete', payload: {
        idProduct:id
      }})
  }

  return (
    <>
      <div className={styles.cartButton} onClick={handleCartOpen}>
        <img src={bagIcon} alt="" />
        <span>{productsInCart.length ? productsInCart.length : null}</span>
      </div>
      { opened && (!productsInCart.length ? <div>Корзина пуста</div> : <div>{productsInCart.map((el,index)=>{

        const res = productsState.find((item)=> item.id===el.productId)
        console.log(res)
        return(

          <div className={styles.btn_in_cart}>
            {`${index+1}.`}
            <img src={res.image}/>
            <span>{res.name}</span>
            <span>{`${res.left} шт.`}</span>
        <button type="button"onClick={()=> handleDecreaseProductInCart(el.productId)}>-</button>
            {`${el.amount} шт.`}
        <button type="button" onClick={()=>handleIncreaseProductInCart(el.productId)}>+</button>
            <span role="button" onClick={()=> handleDeleteProductInCart(el.productId)}>x</span>
          </div>)})}
          </div>)}
    </>
  );
};

export default Cart;

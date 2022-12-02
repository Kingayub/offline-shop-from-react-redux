import React from "react";
import style from "./products.module.css";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ image, name, price, left, discount, id }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch({
      type: "addCart",
      payload: { id: cartItems.length + 1, productId: id, amount: 1 },
    });
  };

  return (
    <div className={style.product}>
      <div className={style.inner}>
        <div className={style.image}>
          <img src={image} alt="..." />
        </div>
        <div>
          <h1 className={style.name}>{name}</h1>
        </div>
        <div className={style.price}>
          <h4>{`Цена: ${price}`}</h4>
        </div>
        <div>{`В наличии: ${left} шт.`}</div>
        <div>{discount === 0 ? null : `Скидка: ${discount}%`}</div>
        <div className={style.btn_buy}>
          <button name="btn" onClick={() => addCart()}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

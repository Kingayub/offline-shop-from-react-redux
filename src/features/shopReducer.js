import { createReducer } from "@reduxjs/toolkit";
import {type} from "@testing-library/user-event/dist/type";

const initialState = {
  products: [
    {
      id: 1,
      categoryId: 1,
      name: "MacBook",
      price: 100000,
      discount: 3,
      left: 31,
      image: "http://intocode.ru/d/react-project-1/images/1.jpg",
    },
    {
      id: 2,
      categoryId: 1,
      name: "Galaxy",
      price: 35999,
      discount: 0,
      left: 11,
      image: "http://intocode.ru/d/react-project-1/images/2.jpg",
    },
    {
      id: 3,
      categoryId: 3,
      name: "Скутер",
      price: 65500,
      discount: 10,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/3.jpg",
    },
    {
      id: 4,
      categoryId: 2,
      name: "Монитор Samsung",
      price: 12000,
      discount: 0,
      left: 7,
      image: "http://intocode.ru/d/react-project-1/images/4.jpg",
    },
    {
      id: 5,
      categoryId: 3,
      name: "Респераторная маска",
      price: 500,
      discount: 0,
      left: 24,
      image: "http://intocode.ru/d/react-project-1/images/5.jpg",
    },
    {
      id: 6,
      categoryId: 2,
      name: "Стиральная машина",
      price: 100000,
      discount: 25,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/6.jpg",
    },
    {
      id: 7,
      categoryId: 2,
      name: "Белый холодильник",
      price: 43100,
      discount: 50,
      left: 18,
      image: "http://intocode.ru/d/react-project-1/images/7.jpg",
    },
    {
      id: 8,
      categoryId: 1,
      name: "Колонка",
      price: 3000,
      discount: 0,
      left: 1,
      image: "http://intocode.ru/d/react-project-1/images/8.jpg",
    },
    {
      id: 9,
      categoryId: 1,
      name: "Наушники",
      price: 1500,
      discount: 15,
      left: 5,
      image: "http://intocode.ru/d/react-project-1/images/9.jpg",
    },
  ],
  categories: [
    {
      id: 1,
      name: "Гаджеты и аксессуары",
    },
    {
      id: 2,
      name: "Бытовая техника",
    },
    {
      id: 3,
      name: "Прочее",
    },
    ],
  cartItems: [
    { id: 1, productId: 2, amount: 2 },
    { id: 2, productId: 9, amount: 5 },
  ],
};

export const shopReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('addCart', (state = initialState, action)=> {
       state.cartItems.map((el)=> {
          if(el.productId === action.payload.productId){
           return {el, amount:el.amount+action.payload.amountCard}
          }
          return state.cartItems.push({id: action.payload.id, productId: action.payload.productId, amount: action.payload.amountCard})
        })})
})
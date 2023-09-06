import React, { useContext } from "react";

import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  // const cartItems = [{ id: "c1", name: "halwai", price: 22.00 }];

  const cartCtx=  useContext(CartContext);
  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler=(item)=>{}
  const cartItemRemoveHandler=(id)=>{}

  return (
    
    <Model onClose={props.onClose} >
      <ul className={classes["cart-items"]}>
      {cartCtx.items.map( item => <CartItem key={props.id} price={item.price} name={item.name} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}  />
       ) }
    </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose} >Close</button>
        {cartCtx.items.length!==0 && <button className={classes.button}>Order</button> }
      </div>
      {/* <h1>hello</h1> */}
    </Model>
  );
};

export default Cart;

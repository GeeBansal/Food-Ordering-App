import { useReducer } from "react"
import CartContext from "./cart-context"


const defaultCartState={
    items:[],
    totalAmount:0.00
}
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedItems=state.items.concat(action.item);
        const updatedAmount=state.totalAmount+(action.item.price*action.item.amount);
        return{
            items:updatedItems,
            totalAmount:updatedAmount
        }
    }

    return defaultCartState;
}
const CartProvider=props=>{

    const [cartState,dispatchCartState] = useReducer(cartReducer,defaultCartState)
    const onAddItem=(item)=>{
       dispatchCartState({type:'ADD',item:item})
    }
    const onRemoveItem=(id)=>{
       dispatchCartState({type:'REMOVE',id:id})
    }

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: onAddItem,
        removeItem: onRemoveItem,
    }

  return( 
  <CartContext.Provider value={cartContext} >
    {props.children}
   </CartContext.Provider>
  )
}
export default CartProvider
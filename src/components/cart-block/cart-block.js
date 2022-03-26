import React, { useState } from "react";
import './cart-block.css'
import { BiCart } from 'react-icons/bi'
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu/cart-menu";
import { calcTotalPrice } from "../utils";
import { ItemsInCart } from "../items-in-cart/items-in-cart";
const CartBlock = () => {
  const [isCartMenu, setIsCartMenu] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items)
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCart size={25} className='cart-block__icon' onClick={() => setIsCartMenu(!isCartMenu)} />
      {totalPrice > 0 ? <span className="cart-block__total-price"> {totalPrice} руб.</span> : null}
      {isCartMenu && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
}


export default CartBlock;

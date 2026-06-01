import { useContext } from 'react'
import './CartItems.css'

import { MdDelete } from "react-icons/md";
import { ShopContext } from '../../assets/Context/ShopContextInstance';

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className="cartitems_format_main">
        <p>products</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <hr />
      {
        all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div className='cartitems_format cartitems_format_main'>
                            <img className='carticon_product_icon ' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems_quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <MdDelete className='removeIcon' onClick={()=>{removeFromCart(e.id)}}/>
                            
                        </div>
            }
            return null;
        })
      }
      <div className="cartitems_down">
        <div className="cartitems_total">
          <h1>cart total</h1>
          <div>
            <div className="cartitems_total_item">
              <p>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems_total_item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems_total_item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="cartitems_promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems_promobox">
            <input type="text" placeholder='promo code' />
            <button type="submit">submit</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default CartItems

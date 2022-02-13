import React from 'react'

import './Cart.css'

function Cart() {
  return (
    <div className='cart'>
      <div className='cart-container'>
         <div className='cart-header'>
             <h2>Shopping Cart</h2>
         </div>
         <div className='cart-body'>
            <div className='cart-items'>
               <h2>Items Selected:</h2>
            </div>
            <div className='cart-price'>
              <div className='price-field'>
                <h2>subtotal</h2>
              </div>
              <div className='div-line'>
              </div>
              <div className='price-field'>
                <h2>delivery charges</h2>
              </div>
              <div className='div-line'>
              </div>
              <div className='price-field'>
                <h2>Total</h2>
              </div>
            </div>
         </div>
      </div>

    </div>
  )
}

export default Cart
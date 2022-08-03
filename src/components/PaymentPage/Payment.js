import React from 'react'
import '../PaymentPage/Payment.css'
export default function Payment() {
  return (
   <>
   <div className='payment-process'>
    <div className='payment-info'>
    <div className='uear-info'>
    <input placeholder='Email'/>
    <input placeholder='First Name'/>
    <input placeholder='Last Name'/>
    <input placeholder='Phone Number'/>
    </div>
    <div className='address-info'>
    <input placeholder='Address'/>
    <input placeholder='City'/>
    <input placeholder='Pin Code'/>
    <input placeholder='Landmark'/>
    </div>
    </div>
    <div className='Payment-method'>
        <h5>Payment Method</h5>
        <div className='pay-method-list'>
            <div className='upi'>
           <img src='assets/Image/gpay.jpg' alt='' className='img'/>
           <img src='assets/Image/phonepe.png' alt='' className='img'/>
           <img src='assets/Image/paypal.png' alt='' className='img'/>
           </div>
           <img src='assets/Image/Amazon-Pay.webp' alt='' className='img'/>
           <img src='assets/Image/mipay.webp' alt='' className='img'/>
           <img src='assets/Image/applepay.png' alt='' className='img'/>
        </div>
    </div>
    <div className='cart-items'>
        <h5>Your cart</h5>
        <div className='t-shit'>
        <img src='assets/Image/person1.webp' alt='' className='proflie-img'/>
        <span>T-Shit</span>
        <span className='price'>499Rs</span>
        </div>
        <div className='t-shit'>
        <img src='assets/Image/person2.webp' alt='' className='proflie-img'/>
        <span>Shit</span>
        <span className='price'>499Rs</span>
        </div>
        <div className='total-price'>
            <h4>Total Price 998Rs</h4>
        </div>
    </div>
   </div>
   <div className='order'>
    <button className='btn'>CONTINUE SHOPPING</button>
    <button className='btn'>PROCEED TO PAYMENT</button>
   </div>
   </>
  )
}

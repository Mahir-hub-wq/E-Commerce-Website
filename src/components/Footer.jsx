import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex justify-evenly items-center px-30 mt-50'>
      <div className='w-70 h-60 space-y-9'>
        <h1 className='text-4xl font-bold text-gray-600'>Estore</h1>
        <p className='text-xl text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      <div className='w-70 h-60 space-y-9'>
        <h3 className='text-2xl font-semibold'>Quick Links</h3>
        <ul className='text-gray-400 text-xl space-y-3'>
          <li>About</li>
          <li>Offers & Discounts</li>
          <li>Get Coupon</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='w-70 h-60 space-y-9'>
        <h3 className='text-2xl font-semibold'>New Products</h3>
        <ul className='text-gray-400 text-xl space-y-3'>
          <li>Woman Clothes</li>
          <li>Fashionj Accessories</li>
          <li>Man Accessories</li>
          <li>Rubber Made Toys</li>
        </ul>
      </div>
      <div className='w-70 h-60 space-y-9'>
        <h3 className='text-2xl font-semibold'>Supports</h3>
        <ul className='text-gray-400 text-xl space-y-3'>
          <li>Frequently Asked Questions</li>
          <li>Terms & Conditions</li>
          <li>Privacy & Policy</li>
          <li>Report a Payment issue</li>
        </ul>
      </div>
    </div>

    <div className='flex justify-between items-center px-40  h-50 py-0'>
      <div>
        <p className='text-xl text-gray-500'>Copyright ©2026 All rights reserved |</p>
      </div>
      <div className='flex justify-around items-center space-x-5 mx-25  '>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="" className='w-5 h-5'/>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="" className='w-5 h-5'/>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/9834/9834654.png" alt="" className='w-5 h-5'/>
        </div>
      </div>

      
    </div>
    
    
    </>
  )
}

export default Footer

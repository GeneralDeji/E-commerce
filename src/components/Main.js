import React from 'react'
import {FiMinus, FiPlus} from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useState } from 'react'

const Main = () => {
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(125.00)


  return (
    <div className='main'>
        <div className='description'>
            <h4>SNEAKER COMPANY</h4>

            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weathe can offer</p>
        </div>

        <div className='price'>
            <div className='left'>
                <h2>$125.00</h2>
                <p>50%</p>
            </div>

            <h6>${price}.00</h6>
        </div>

        <div className='increment'>
            <FiMinus color='rgb(255, 136, 0)' onClick={()=>{
                setCount(count - 1)
                setPrice(price - 125.00)
                if(count <= 0){
                    setCount(0)
                    setPrice(125.00)
                }
            }}/>

            <p>{count}</p>

            <FiPlus color='rgb(255, 136, 0)' onClick={()=>{
                setCount(count + 1)
                setPrice(price + 125.00)
                }}/>
        </div>

        <div className='btn'>
            <AiOutlineShoppingCart size={20}/>
            <h4>Add to cart</h4>
        </div>
    </div>
  )
}

export default Main
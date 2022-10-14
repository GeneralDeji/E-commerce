import React from 'react'
import First from '../assets/image-product-1.jpg'
import Second from '../assets/image-product-2.jpg'
import Third from '../assets/image-product-3.jpg'
import Fourth from '../assets/image-product-4.jpg'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import { useState } from 'react'

const Items = () => {

    const images = [
        First,
        Second,
        Third,
        Fourth
    ]

    const [count, setCount] = useState(0)

    const handleRightCount = ()=>{
        setCount(count + 1)

        if(count >= 3){
            setCount(0)
        }
    }

    const handleLeftCount = ()=>{
        setCount (count - 1)

        if(count <= 0){
            setCount(3)
        }
    }

    


  return (
    <div className='items' style={{backgroundImage: `url(${images[count]})`}}>
        <div className='carousel left'>
            <FaChevronCircleLeft onClick={handleLeftCount} color='white' size={30}/>
        </div>

        <div className='images'>

        </div>

        <div className='carousel right'>
            <FaChevronCircleRight onClick={handleRightCount} color='white' size={30}/>
        </div>

    </div>
  )
}



export default Items
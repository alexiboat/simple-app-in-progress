import React from 'react'
import Image from './Image'


const Newdata = ({items, removeImage}) => {
  
  return (
    <div>
        <header className='header'>
        <h1>hope images</h1>
        </header>
        <article>
        {items.map((item)=>{
            return(
            <Image key={item.id} {...item} removeImage={removeImage}></Image> 
            )  
           })}
        </article>
      
                       
            
        
    </div>
  )
}

export default Newdata
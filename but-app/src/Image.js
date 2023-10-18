import React, {useState} from 'react'



const Image = ({id, image, price, title, duties, company,date, removeImage}) => {
  const [readmore, setReadmore]=useState(false)
   
  return (
    <section className='main'>  
      <p>{title}</p>
      <div>
    <img className='img' src={image} alt='photo'></img> 
    </div>
    <div className='flex'>
      <h2 className='date'>{date}</h2> 
      <h2 className='money'>GHS :{price}</h2>
    </div>
    <footer className='foot'>
      <h2> Company Name:{company}</h2>
      <p>
        {readmore ? duties:`${duties.substring(0, 20)}...`}
        <button onClick={()=>setReadmore(!readmore)}>
          {readmore?'show less': 'readmore'}
        </button>
      </p>
      <button className='btn' onClick={()=>removeImage(id)}>not interested</button>
    </footer>
    </section>
  
  )
}

export default Image
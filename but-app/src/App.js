import './App.css';
import Newdata from './Newdata';
import React, { useState} from 'react'
import people from './Data'
import { Button } from 'react-bootstrap';

function App() {
  const [items, setItems]= useState(people)
   
  
  const removeImage = (id)=>{
    const newImg = items.filter((item)=> item.id !==id)
    setItems(newImg)
  }
if(items.length===0){
  return(
  <main>
  <di><h2>Your Options are Empty please refresh!</h2></di>
 
  </main>
  )
}

  return (
   
   <section>
  <Newdata items={items} removeImage={removeImage}/>
    </section>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './NewCollections.css';

const NewCollections = () => {

  const [new_collection,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/allproducts').then((response)=>response.json())
    .then((data)=>setNew_collection(data))
    .catch((error) => console.error("Error fetching data:", error)); // Handle any fetch errors
  },[])


  return (
    <div className='new_collections'>
        <h1>New Collections</h1>
        <hr/>
       <div className="collections">
         {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
    </div>
  )
  
}

export default NewCollections;
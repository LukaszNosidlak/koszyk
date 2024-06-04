import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Item.css';



const Item = ({ id, addItem, name, price, img,description}) => {
  // const photo=img+".png";
  const alt="photo"+id;
  // console.log(photo);
  return (

<div className="card" id={id}>
  <img src={img} alt={alt} className='cardImg'/>
  <div className="card-body">
    <h5 className="card-title">{name} {price}zł</h5>
    <p className="card-text">{description}</p>
    <button onClick={() => addItem(id)} className='btn btn-outline-primary'>Add to Cart</button>
  </div>
  

</div>

  )
}

export default Item

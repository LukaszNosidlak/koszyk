import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Koszyk = ({ items, addItemToKoszyk, removeItemFromKoszyk }) => {

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Koszyk</h2>
      <div className="cart">
        {items.map((item) => (
          <div className='container w-25'>
            <ul className="list-group">
          <li key={item.id} className='list-group-item fw-bold'>
            {item.name} x {item.quantity}, cena: {item.price * item.quantity}
            <button onClick={() => addItemToKoszyk(item.id)} className='btn btn-outline-info m-2'>+</button>
            <button onClick={() => removeItemFromKoszyk(item.id)} className='btn btn-outline-danger m-2'>-</button>
          </li></ul></div>
        ))}
      </div>
      <h3>Całkowita cena: {totalPrice}</h3>
    </div>
  );
};

export default Koszyk;

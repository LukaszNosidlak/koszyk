import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Koszyk = ({ items, addItemToKoszyk, removeItemFromKoszyk }) => {

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Koszyk</h2>
      <div className="cart">
        {items.map((item) => (
          <div key={item.id}>
            {item.name} x {item.quantity}, price: {item.price * item.quantity}
            <button onClick={() => addItemToKoszyk(item.id)} className='btn btn-outline-info'>+</button>
            <button onClick={() => removeItemFromKoszyk(item.id)} className='btn btn-outline-danger'>-</button>
          </div>
        ))}
      </div>
      <h3>Całkowita cena: {totalPrice}</h3>
    </div>
  );
};

export default Koszyk;

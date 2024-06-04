import React, { useState } from 'react';
import Item from '../components/Item';
import Koszyk from '../components/Koszyk';
import Form from '../components/Form';
import 'bootstrap/dist/css/bootstrap.css';
import product1 from '../assets/1.png';
import product2 from '../assets/2.png';
import product3 from '../assets/3.png';
import product4 from '../assets/4.png';

const Home = () => {  
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', img: product1, price: 20, quantity: 0, description: 'asdasd' },
    { id: 2, name: 'Product 2', img: product2, price: 50, quantity: 0, description: 'asdasdasd' },
    { id: 3, name: 'Product 3', img: product3, price: 222, quantity: 0, description: 'asdadsasd' },
    // { id: 4, name: 'Product 4', img: product4, price: 20, quantity: 0, description: '' },
  ]);

  const [koszykItems, setKoszykItems] = useState([]);

  const addItemToKoszyk = (itemId) => {
    const itemToAdd = items.find(item => item.id === itemId);
    if (itemToAdd) {
      const updatedItems = items.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setItems(updatedItems);

      const updatedKoszykItems = koszykItems.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      if (!koszykItems.some(item => item.id === itemId)) {
        updatedKoszykItems.push({ ...itemToAdd, quantity: 1 });
      }

      setKoszykItems(updatedKoszykItems);
    }
  };

  const removeItemFromKoszyk = (itemId) => {
    const itemToRemove = items.find(item => item.id === itemId);
    if (itemToRemove) {
      const updatedItems = items.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(item => item.quantity >= 0);
      setItems(updatedItems);

      const updatedKoszykItems = koszykItems.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(item => item.quantity > 0);

      setKoszykItems(updatedKoszykItems);
    }
  };

  const addItem = (formData) => {
    const newItem = {
      id: items.length + 1,
      ...formData,
      quantity: 0,  
    };
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <Form addItem={addItem} />
      {items.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} description={item.description} addItem={() => addItemToKoszyk(item.id)}  />
      ))}
      <Koszyk items={koszykItems} addItemToKoszyk={addItemToKoszyk} removeItemFromKoszyk={removeItemFromKoszyk} />
    </div>
  );
}

export default Home;

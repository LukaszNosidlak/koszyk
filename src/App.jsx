import './App.css';
import React, { useState } from 'react';
import Item from './components/Item';
import Koszyk from './components/Koszyk';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.css';
import product1 from './assets/capy.jpg';
import product2 from './assets/supra.jpg';
import product3 from './assets/mleko.jpg';
import product4 from './assets/basen.jpg';


function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'spacerek z cabybara', img: product1, price: 200, quantity: 0, description: 'spacerek z cabybara taka mała słodziutka' },
    { id: 2, name: 'supra mk4', img: product2, price: 500, quantity: 0, description: 'przejazd supra mk4 po wybranym torze' },
    { id: 3, name: 'mleko', img: product3, price: 1500, quantity: 0, description: 'roczny zapas mleczka prosto od krówki' },
    // { id: 4, name: 'basen duzy', img: product4, price: 320, quantity: 0, description: 'basen duzy pomieści każdego' },
  ]);
  
  const [isShowForm,setIsShowForm]=useState(false);
  const [isShowCart,setIsShowCart]=useState(false);

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

  const changeStateForm=()=>{
    if(isShowForm==true){
      setIsShowForm(false);
    }else{
      setIsShowForm(true);
      setIsShowCart(false);
    }
  }
  const changeStateCart=()=>{
    if(isShowCart==true){
      setIsShowCart(false);
    }else{
      setIsShowCart(true);
      setIsShowForm(false);
    }
  }

  const addItem = (formData) => {
    const newItem = {
      id: items.length + 1,
      ...formData,
      quantity: 0,  
    };
    setItems([...items, newItem]);
  };

  const countCart = koszykItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="App">
      <button onClick={changeStateForm} className='btn btn-primary btnAddToShop'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
        </svg>
      </button>
      {isShowForm && <Form addItem={addItem}/>}
      {isShowCart && <Koszyk items={koszykItems} addItemToKoszyk={addItemToKoszyk} removeItemFromKoszyk={removeItemFromKoszyk} />}

      {items.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} description={item.description} addItem={() => addItemToKoszyk(item.id)}  />
      ))}

      <button onClick={changeStateCart} className='btn btn-primary btnShowCart'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg>{countCart}
    



      </button>


    </div>
  );
}
export default App;

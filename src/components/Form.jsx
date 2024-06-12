import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Form = ({ addItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    img: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addItem(formData);

    setFormData({
      name: '',
      img: '',
      price: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='container w-50'>
      <div className='form-group row'>
        <label htmlFor="name" className='col-sm-2 col-form-label'>Name:</label>
        <div class="col-sm-10">
          <input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleChange} required minLength={5}/>
        </div>
      </div>

      <div className='form-group row'>
        <label htmlFor="img" className='col-sm-2 col-form-label'>Image URL:</label>
        <div class="col-sm-10">
          <input type="text" id="img" className="form-control" name="img" value={formData.img} onChange={handleChange} required />
        </div>
      </div>

      <div className='form-group row'>
        <label htmlFor="price" className='col-sm-2 col-form-label'>Price:</label>
        <div class="col-sm-10">
          <input type="number" id="price" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
        </div>
      </div>

      <div className='form-group row'>
        <label htmlFor="description" className='col-sm-2 col-form-label'>Description:</label>
        <div class="col-sm-10">
          <input type='text' id="description" className="form-control" name="description" value={formData.description} onChange={handleChange} required minLength={10}/>
        </div>
      </div>
      <button type="submit" className='btn btn-primary '>Add Item</button>
    </form>
  );
};

export default Form;

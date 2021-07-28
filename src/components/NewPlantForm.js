import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [plantForm, setPlantForm] = useState({
        name: '',
        image: '',
        price: '',
  })

  function handleFormChange(e){
    let key = e.target.name
    let value = e.target.value

    setPlantForm({...plantForm,
      [key]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault();

    const newPlant = {
      name: plantForm.name,
      image: plantForm.image,
      price: parseFloat(plantForm.price)
    }

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(newPlant)
    }).then(res => res.json())
    .then(plantObj => addPlant(plantObj))
    setPlantForm({
      name: '',
      image: '',
      price: '',}
    )
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleFormChange} value={plantForm.name}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleFormChange} value={plantForm.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleFormChange} value={plantForm.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

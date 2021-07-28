import React, { useState } from "react";

function PlantCard({ plant, removePlant, editPlant }) {
  const [isStocked, setIsStocked] = useState(true)
  const [inEditMode, setInEditMode] = useState(false)
  const [formPrice, setFormPrice] = useState(plant.price)

  function handleTrashClick(){
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE'
    })
    removePlant(plant.id)
  }

  function handlePriceEdit(e){
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: 'PATCH',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({...plant, price: parseFloat(e.target.price.value)})
    } ).then(res => res.json())
    .then(updatedPlant => editPlant(updatedPlant.id, updatedPlant))
    setInEditMode(false)
  }

  function editMode(){
    return (
      <form className="price-edit-form" onSubmit={handlePriceEdit} >
      <input type="number" name="price" step="0.01" placeholder={plant.price} className="price-edit" value={formPrice} onChange={(e) => setFormPrice(e.target.value)}/>
      <button type='submit' className="greencheck-btn">✅</button>
      </form>
    )
  }

  function priceRender(){
    return (
      <p>Price: ${plant.price} <button className="edit-btn" onClick={() => setInEditMode(true)}>✏️</button> </p> 
    )
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      {inEditMode ? editMode() : priceRender()}
      <br></br>
      {isStocked ? (
        <button className="primary" onClick={() => setIsStocked(false)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button className="trash-btn" onClick={handleTrashClick}> 🗑 </button>
    </li>
  );
}

export default PlantCard;

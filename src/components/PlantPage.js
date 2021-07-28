import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect( () => {
    fetch(`http://localhost:6001/plants`)
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  function addPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  const displayPlants = search ? plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase())) : plants;

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={displayPlants}/>
    </main>
  );
}

export default PlantPage;

import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, removePlant, editPlant}) {
  return (
    <ul className="cards">
      {plants.map(plant => {
        return (
          <PlantCard plant={plant} key={plant.id} removePlant={removePlant} editPlant={editPlant} />
        )
      })}
    </ul>
  );
}

export default PlantList;

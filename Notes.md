## Components
App
    Header
    PlantPage
        NewPlantForm
        Search
        PlantList
            PlantCard...

## States
- plants (stored in PlantPage)
- filter (stored in PlantPage)
- isSoldOut (stored in PlantCard)

## Data
- `http://localhost:6001/plants` ; fetch in PlantPage

## Deliverables
[X] On launch, display all plants
[X] Add new plant via the form
[X] Mark plant as "sold out"
[X] search plants by name and see filtered list

## Advanced Deliverables
[] Update price of a plant and see updated price after refresh(persistence)
[X] Delete plant (and persisted)
        - add trash button
        - onClick => DELET request + removePlant in PlantPage
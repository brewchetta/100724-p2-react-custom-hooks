import AnimalCard from "./AnimalCard"

function AnimalsContainer({ animals }) {

    const mappedAnimals = animals.map(a => <AnimalCard key={a.id} animal={a} />)

    return (
    <div className="cards-container">

        { mappedAnimals }

    </div>
  )
}

export default AnimalsContainer
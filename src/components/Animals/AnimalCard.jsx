function AnimalCard({ animal, setAnimals }) {

    async function handleUpdateLikes() {
        const response = await fetch(`http://localhost:3000/animals/${animal.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ likes: animal.likes + 1 })
        })

        const updatedAnimal = await response.json()

        setAnimals(animalArray => animalArray.map(animal => animal.id === updatedAnimal.id ? updatedAnimal : animal))
    }


    async function handleDelete() {
        const response = await fetch(`http://localhost:3000/animals/${animal.id}`, {
            method: 'DELETE'
        })

        setAnimals(oldState => oldState.filter(anim => anim.id !== animal.id))
    }

    return (
        <div className="card">
            <img src={ animal.image } />

            <h2>{animal.name}</h2>

            <button onClick={handleUpdateLikes}>Likes: {animal.likes}</button>

            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default AnimalCard
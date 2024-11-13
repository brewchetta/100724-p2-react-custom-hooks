import chitter from "../../assets/chitter.mp3"

function AnimalCard({ animal }) {

    const handlePetAnimal = () => new Audio(chitter).play()

    return (
        <div className="card">
            <img src={ animal.image } />

            <h2>{animal.name}</h2>

            <button>Likes: {animal.likes}</button>

            {
                false /* this will be replaced by pettingZooOpen */
                ?
                <button onClick={handlePetAnimal}>Pet {animal.name}</button>
                :
                null
            }

        </div>
    )

}

export default AnimalCard
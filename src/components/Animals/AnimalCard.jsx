import chitter from "../../assets/chitter.mp3"
import { PettingZooContext } from "../App"
import { useContext } from "react"

function AnimalCard({ animal }) {

    // grab the context using the useContext
    // we're using destructuring to grab each key in the context object
    const {isOpen, setOpen} = useContext(PettingZooContext)

    const handlePetAnimal = () => {
        new Audio(chitter).play()
        setOpen(false)
    }

    return (
        <div className="card">
            <img src={ animal.image } />

            <h2>{animal.name}</h2>

            <button>Likes: {animal.likes}</button>

            {
                isOpen
                ?
                <button onClick={handlePetAnimal}>Pet {animal.name}</button>
                :
                null
            }

        </div>
    )

}

export default AnimalCard
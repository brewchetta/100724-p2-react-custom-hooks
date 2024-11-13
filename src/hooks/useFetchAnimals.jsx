import { useState, useEffect } from 'react'

// parameters: url --> string
function useFetchAnimals(url) {
    const [animals, setAnimals] = useState([])

    async function getAnimals() {
        const response = await fetch(url)
        const animalData = await response.json()
        setAnimals(animalData)
    }
      
    useEffect(() => {
        getAnimals()
    }, [])

    // returns array --> [ currentState, setState ]
    return [animals, setAnimals]
}

export default useFetchAnimals


// EXAMPLE USE CASES
// const [animals, setAnimals] = useFetchAnimals('http://localhost:3000/animals')

// const [animals, setAnimals] = useFetchAnimals('http://audobonsociety.org/animals')
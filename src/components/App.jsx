import { useState, useEffect } from 'react'
import AnimalsContainer from "./Animals/AnimalsContainer"

function App() {

  const [animals, setAnimals] = useState([])

  const [pettingZooOpen, setPettingZooOpen] = useState(true)

  async function getAnimals() {
    const response = await fetch('http://localhost:3000/animals')
    const animalData = await response.json()
    setAnimals(animalData)
  }
  
  useEffect(() => {
    getAnimals()
  }, [])

  const togglePettingZoo = () => setPettingZooOpen(prevState => !prevState)

  return (
    <div className="App">

      <AnimalsContainer animals={animals} />

      <button onClick={togglePettingZoo}>
        {pettingZooOpen ? 'Close' : 'Open'} Petting Zoo
      </button>

    </div>
  )
}

export default App
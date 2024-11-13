import { useState, useEffect, createContext } from 'react'
import AnimalsContainer from "./Animals/AnimalsContainer"
import useFetchAnimals from '../hooks/useFetchAnimals'

// make the context OUTSIDE the component
export const PettingZooContext = createContext(null)

function App() {

  const [animals, setAnimals] = useFetchAnimals('http://localhost:3000/animals')

  const [pettingZooOpen, setPettingZooOpen] = useState(true)

  const togglePettingZoo = () => setPettingZooOpen(prevState => !prevState)

  return (
    <div className="App">

      {/* create the provider and give it a value - in this case an object */}
      <PettingZooContext.Provider value={{ isOpen: pettingZooOpen, setOpen: setPettingZooOpen }}>
        <AnimalsContainer animals={animals} />
      </PettingZooContext.Provider>

      <button onClick={togglePettingZoo}>
        {pettingZooOpen ? 'Close' : 'Open'} Petting Zoo
      </button>

    </div>
  )
}

export default App
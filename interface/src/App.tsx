import Fruits from "./components/Fruits"
import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/fruits')
      .then((response) => {
        setFruits(response.data)
      })
  }, [])

  console.log('fruits', fruits)
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Tiny Fruits
      </h1>
      <Fruits fruits={fruits} />
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RoutesModule from './routes/routesModule'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutesModule/>
    </>
  )
}

export default App

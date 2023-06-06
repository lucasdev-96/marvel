import { useEffect } from 'react'
import './App.css'
import { getHero } from './api/marvel'
import Hero from './components/Hero'

function App() {
  useEffect(() => {
    getHero()
  }, [])
  return (
    <>
     <Hero />
    </>
  )
}

export default App

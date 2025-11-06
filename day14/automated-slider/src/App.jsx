import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSlider from './components/ImageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Image Slider</h1>
      <ImageSlider/>
    </>
  )
}

export default App

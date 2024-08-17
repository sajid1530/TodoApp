import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/auth/signup'
import ConfirmOtp from './components/auth/confirmOtp'
import Login from './components/auth/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Signup />
    <ConfirmOtp />
    <Login />
    </>
  )
}

export default App

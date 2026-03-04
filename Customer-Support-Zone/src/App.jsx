import { ToastContainer, toast } from 'react-toastify';
// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
        {
          toast("From app")
        }
      <ToastContainer />
    </>
  )
}

export default App

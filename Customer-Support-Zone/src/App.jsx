import { ToastContainer } from 'react-toastify';
// import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Body from './Components/Body/Body';
// import Cards from './Components/Cards/Cards';
import AvailableCards from './Components/AvailableCards/AvailableCards';
import { Suspense, useState } from 'react';


const fetchCards = async () => {
  const res = await fetch("/Card.json")
  return res.json()
}
const cardPromise = fetchCards()
// console.log(cardPromise)
function App() {
  // const [count, setCount] = useState(0)
  const [inProgress, setinProgress]=useState(0);
  const [resolved, setresolved] =useState(0)

  return (
    <>
      <NavBar></NavBar>
    <Banner inProgress={inProgress} resolved={resolved}></Banner>
      <Body></Body>
      <div>

      </div>
      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
      <AvailableCards cardPromise={cardPromise} inProgress={inProgress} setinProgress={setinProgress} resolved={resolved} setresolved={setresolved}></AvailableCards>
      </Suspense>

    </>
  )
}

export default App

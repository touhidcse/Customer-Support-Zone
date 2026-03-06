
// import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import AvailableCards from './Components/AvailableCards/AvailableCards';

import CustomerCard from './Components/CustomerCard/CustomerCard';
import SelectCustomer from './Components/SelectCustomer/SelectCustomer';
import { Suspense, useState } from 'react';
import SelectedCard from './Components/SelectedCard/SelectedCard';


const fetchCards = async () => {
  const res = await fetch("/Card.json")
  return res.json()
}
const cardPromise = fetchCards()
// console.log(cardPromise)
function App() {
  const [inProgress, setinProgress] = useState(0);
  const [resolved, setresolved] = useState(0)
  const [selectedCard, setSelectedCard] = useState([]);
  const [task,setTask] = useState([])
// Remove card from layon
 const removeCard=(card)=>{
    const filtereCard = selectedCard.filter(c=>c.id!==card.id);
    // console.log(filtereCard)
    setSelectedCard(filtereCard)
  }
  // const removePlayer=(p)=>{
  //   const filteredData = purchasedPlayers.filter(ply=>ply["player-name"]!=p["player-name"]);
  //   console.log(filteredData)
  //   setpurchasedPlayers(filteredData)
  //   setAvailableBalance(availableBanlance+parseInt(p.price))
  // }

  return (
    <>
      <NavBar></NavBar>
      <Banner inProgress={inProgress} resolved={resolved}></Banner>
      <div>

      </div>


      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
        <AvailableCards 
        cardPromise={cardPromise} inProgress={inProgress} setinProgress={setinProgress} resolved={resolved}
         setresolved={setresolved} selectedCard={selectedCard} 
         setSelectedCard={setSelectedCard} removeCard={removeCard} task={task} setTask={setTask}>

        </AvailableCards>
      </Suspense>
    </>
  )
}

export default App

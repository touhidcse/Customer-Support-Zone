
// import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import AvailableCards from './Components/AvailableCards/AvailableCards';

import CustomerCard from './Components/CustomerCard/CustomerCard';
import { Suspense, useState } from 'react';
import SelectedCard from './Components/SelectedCard/SelectedCard';
import Footer from './Components/Footer/Footer';


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
  const [task, setTask] = useState([])
  const [cards, setCards] = useState([]);


  const removeCard = (cardToRemove) => {

    // remove from selected section
    const updatedSelected = selectedCard.filter(
      card => card.id !== cardToRemove.id
    );
    setSelectedCard(updatedSelected);

    // remove from customer card layout
    const updatedCards = cards.filter(
      card => card.id !== cardToRemove.id
    );
    setCards(updatedCards);
  };


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
          setSelectedCard={setSelectedCard} task={task} setTask={setTask} removeCard={removeCard} cards={cards} setCards={setCards}>

        </AvailableCards>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App

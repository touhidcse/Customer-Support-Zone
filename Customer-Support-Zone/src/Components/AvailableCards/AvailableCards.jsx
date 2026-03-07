import React, { use } from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';
import SelectedCard from '../SelectedCard/SelectedCard';
import { useEffect } from "react";
const AvailableCards = ({ cardPromise, removeCard, cards, setCards, inProgress, setinProgress, resolved, setresolved, selectedCard, setSelectedCard, task, setTask }) => {
    const cardData = use(cardPromise)

    useEffect(() => {
        setCards(cardData)
    }, [cardData])


    return (

        <div className='max-w-[100%] mx-auto  bg-[#F5F5F5]'>
            <div className='max-w-[1200px] mx-auto flex justify-between pb-5'>
                <h1 className='max-w-400px text-2xl font-bold'>Customer Tickets</h1>
                <h1 className='max-w-400px mx-auto'></h1>
                
            </div>
            <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex gap-10 justify-between'>
                <div id='card-Container' className='grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-5'>
                    {

                        cards.map(card => <CustomerCard key={card.id} card={card} removeCard={removeCard} cards={cards} setCards={setCards} inProgress={inProgress} setinProgress={setinProgress} resolved={resolved} setresolved={setresolved} selectedCard={selectedCard} setSelectedCard={setSelectedCard}></CustomerCard>)

                    }
                </div>
                <div className=''>
                    {/* Dynamically load  */}
                    <h2 className='max-w-400px mx-auto text-2xl font-bold text-center'>Task Status</h2>
                    {
                        selectedCard.map(card => <SelectedCard card={card} removeCard={removeCard} cards={cards} setCards={setCards} inProgress={inProgress} setinProgress={setinProgress} resolved={resolved} setresolved={setresolved} selectedCard={selectedCard} setSelectedCard={setSelectedCard} task={task} setTask={setTask}></SelectedCard>)
                    }

                </div>

            </div>
        </div>


    );


};

export default AvailableCards;
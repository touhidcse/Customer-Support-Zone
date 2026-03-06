import React, { use } from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';
import SelectedCard from '../SelectedCard/SelectedCard';

const AvailableCards = ({ cardPromise, removeCard, inProgress, setinProgress, resolved, setresolved, selectedCard, setSelectedCard ,task,setTask}) => {
    const cardData = use(cardPromise)

    // console.log(cardData)


    return (
        //     {
        //         document.getElementById("card-Container").addEventListener('click', handleSelected)
        //     }
        //     const selectedCard = []
        // const handleSelected = (cardData) => {
        //     // isSelected(true)
        //     // setisCardSelected([...isCardSelected, cardData])
        //     const allSelectedCard = [...selectedCard, cardData]
        //     return allSelectedCard;

        // }
        <div className='max-w-[100%] mx-auto  bg-[#F5F5F5]'>
            <div className='max-w-[1200px] mx-auto flex justify-between pb-5'>
                <h1 className='max-w-400px text-2xl font-bold'>Customer Tickets</h1>
                <h1 className='max-w-400px mx-auto'></h1>
                <h2 className='max-w-400px mx-auto text-2xl font-bold'>Task Status</h2>
            </div>
            <div className='max-w-[1200px] mx-auto flex gap-10 justify-between'>
                <div id='card-Container' className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    {

                        cardData.map(card => <CustomerCard card={card} inProgress={inProgress} setinProgress={setinProgress} resolved={resolved} setresolved={setresolved} selectedCard={selectedCard} setSelectedCard={setSelectedCard}></CustomerCard>)

                    }
                </div>
                <div className=''>
                    {/* Dynamically load  */}
                    {
                        selectedCard.map(card => <SelectedCard card={card} inProgress={inProgress} setinProgress={setinProgress} resolved={resolved} setresolved={setresolved} selectedCard={selectedCard} setSelectedCard={setSelectedCard} task={task} setTask={setTask} removeCard={removeCard}></SelectedCard>)
                    }

                </div>

            </div>
        </div>


    );


};

export default AvailableCards;
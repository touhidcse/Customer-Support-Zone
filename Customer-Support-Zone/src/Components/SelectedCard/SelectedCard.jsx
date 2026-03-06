import React from 'react';

const SelectedCard = ({ card,inProgress,handleRemoveCardFromLayout, setinProgress, resolved, setresolved, selectedCard, setSelectedCard,removeCard, task, setTask }) => {
    // console.log(card)

    // const handleRemove=()=>{
    //     removePlayer(card)
    // }

    const handleRemoveCardFromTask = () => {
        setinProgress(inProgress - 1)
        setresolved(resolved + 1)
        // toast('one card selected')
        // setTask([...task, cardData])
        //selectedCard([...selectedCard,cardData])
        // console.log(selectedCard)
        removeCard(card)
        // handleRemoveCardFromLayout(card)
    }
    // console.log(selectedCard)

    return (

        <div>
            <div className='bg-white shadow-sm'>
                <h1 className="text-2xl font-bold text-center">{card.title}</h1>
                <button onClick={() => handleRemoveCardFromTask(card)} className='btn bg-[#41BE6c]  w-full text-xl text-white'>Complete</button>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Resolved Task</h1>
                <p>No card resolved yet</p>
            </div>
        </div>
    );
};

export default SelectedCard;
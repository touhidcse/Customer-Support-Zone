import React from 'react';
import { toast } from 'react-toastify';
import ResolvedCard from '../ResolvedCard/ResolvedCard';

const SelectedCard = ({ card, inProgress, resolvedTask, setresolvedTask, setinProgress, resolved, setresolved, selectedCard, setSelectedCard, removeCard }) => {

    const handleRemoveCardFromTask = () => {
        setinProgress(inProgress - 1)
        setresolved(resolved + 1)
        // removeCard(card)
        removeCard(card)
        toast("One task completed and card removed from layout")
    }
    
    //  handleRemoveCardFromTask(resolvedTask)
    return (

        <div>
            <div className='bg-white shadow-sm'>
                <h1 className="text-2xl font-bold text-center">{card.title}</h1>
                <button onClick={() => handleRemoveCardFromTask(card)} className='btn bg-[#41BE6c]  w-full text-xl text-white p-5'>Complete</button>
            </div>
        </div>
        
    );
};

export default SelectedCard;
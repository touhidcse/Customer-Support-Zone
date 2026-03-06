import React, { use } from 'react';

import { useState } from 'react';
import dateImg from '../../assets/date.png'
import iconImg from '../../assets/Ellipse 22.png'
import { toast } from 'react-toastify';
import SelectedCard from '../SelectedCard/SelectedCard';
const CustomerCard = ({ card, removeCard, resolved, setresolved, inProgress, setinProgress, selectedCard, setSelectedCard }) => {
    const [isSelected, setisSelected] = useState(false);

    const [clicked, setClicked] = useState(false);



    const handdleSelected = (cardData) => {
        setinProgress(inProgress + 1)
        // toast('one card selected')
        setSelectedCard([...selectedCard, cardData])
        // console.log(selectedCard)

    }
    const handleClick = () => {
        if (clicked) return; // prevent second click

        handdleSelected(card);
        setClicked(true);
    };



    return (
        <div onClick={handleClick}
            className={`card w-96 bg-base-100 card-sm shadow-sm  ${clicked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                }`} >
            <div class="card-body" >
                <div className='flex justify-between items-center'>
                    <h2 class="card-title">{card.title}</h2>
                    <div className='flex gap-2 border-2 rounded bg-green-200'>
                        <img src={iconImg} alt="" /> <p className='text-black-100'>{card.status}</p>
                    </div>
                </div>
                <p>{card.description}</p>
                <div className='flex justify-between items-center'>
                    <div>
                        <p># {card.id} <span>{card.priority}</span></p>
                    </div>
                    <div className='flex justify-between items-center gap-5'>
                        <p>{card.customer}</p> <img src={dateImg} /><span>{card.createdAt}</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomerCard;
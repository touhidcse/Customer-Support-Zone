import React, { use } from 'react';

import { useState } from 'react';
import dateImg from '../../assets/date.png'
import iconImg from '../../assets/Ellipse 22.png'
import { toast } from 'react-toastify';
const CustomerCard = ({card,resolved, setresolved,inProgress, setinProgress, selectedCard,setSelectedCard}) => {
    const [isSelected, setisSelected] = useState(false);

    const handdleSelected = (cardData) => {
            setinProgress(inProgress+1)
            // toast('one card selected')
            setSelectedCard([...selectedCard,cardData])
            // console.log(selectedCard)
            
        
    }
    // const handleRemoveCardFromLayout=()=>{
    //     remove(card)
    // }
       return (
        <div onClick={() => { handdleSelected(card) }} className="card w-96 bg-base-100 card-sm shadow-sm cursor-pointer" >
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
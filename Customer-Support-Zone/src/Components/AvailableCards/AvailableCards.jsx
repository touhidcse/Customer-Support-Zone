import React, { use } from 'react';
import Cards from '../Cards/Cards';

const AvailableCards = ({ cardPromise }) => {
    const cardData = use(cardPromise)
    console.log(cardData)
    return (
        <div className='max-w-[100%] mx-auto  bg-[#F5F5F5]'>
            <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

                {
                    cardData.map(card => <Cards card={card}></Cards>)
                }

            </div>
        </div>
    );
};

export default AvailableCards;
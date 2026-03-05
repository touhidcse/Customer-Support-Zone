import React, { use } from 'react';
import Cards from '../Cards/Cards';

const AvailableCards = ({ cardPromise, inProgress, setinProgress, resolved, setresolved }) => {
    const cardData = use(cardPromise)
    console.log(cardData)
    return (
        <div className='max-w-[100%] mx-auto  bg-[#F5F5F5]'>
           
            <div className='max-w-[1200px] mx-auto flex gap-10 justify-between'>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    {

                        cardData.map(card => <Cards card={card}></Cards>)

                    }
                </div>
                <div className=''>
                    {/* Dynamically load  */}
                    <div>
                        <div className='bg-white shadow-sm'>
                            <h1 className="text-2xl font-bold text-center">For showing card title title title title{cardData.title}</h1>
                            <button className='btn bg-[#41BE6c]  w-full text-xl text-white'>Complete</button>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Resolved Task</h1>
                            <p>No card resolved yet</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AvailableCards;
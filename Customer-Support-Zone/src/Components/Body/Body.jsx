import React from 'react';
import backGroundImg from '../../assets/vector2.png'
const Body = () => {
    return (
        <div className="max-w-[100%] bg-[#F5F5F5]"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/jPmwk0Mg/vector2.png)",
                        }}>
            <div className='max-w-[1200px] mx-auto flex justify-between'>
                <h1 className="text-2xl font-bold">Customer Ticket</h1>
                <h1 className="text-2xl font-bold">Task Status</h1>
            </div>
        </div>
    );
};

export default Body;
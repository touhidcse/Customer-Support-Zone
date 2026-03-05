import React from 'react';
const Banner = ({ inProgress,resolved}) => {
    return (
        <div className='max-w-[100%] bg-[#F5F5F5] pb-20'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex gap-10'>
                    <div
                        className="hero max-w-[600px] min-h-[250px] bg-[#422AD5]"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/tMsK4PMS/vector1.png)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="text-2xl font-bold">In-Progress</h1>
                                <h1 className="text-2xl font-bold">{inProgress}</h1>

                            </div>
                        </div>
                    </div>
                    <div
                        className="hero max-w-[600px] min-h-[250px] bg-[#41BE6c] "
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/tMsK4PMS/vector1.png)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="text-2xl font-bold">Resolved</h1>
                                <h1 className="text-2xl font-bold">{resolved}</h1>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='flex gap-10'>
                    <div className='flex bg-[#422AD5] justify-between items-center'>
                        <img src={inProgressImg} alt="" />
                        <div className='grid'>
                            <h1 className='text-3xl tex-white'>In Progress</h1>
                            <h1 className='text-3xl tex-white'>{0}</h1>
                        </div>
                        <img src={inProgressImg} alt="" />
                    </div>
                    <div className='flex bg-[#41BE6c] justify-between items-center'>
                        <img src={inProgressImg} alt="" />
                        <div className='grid'>
                            <h1 className='text-3xl tex-white'>Resolved</h1>
                            <h1 className='text-3xl tex-white'>{0}</h1>
                        </div>
                        <img src={inProgressImg} alt="" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;
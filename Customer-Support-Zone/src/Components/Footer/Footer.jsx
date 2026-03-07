import React from 'react';

const Footer = () => {
    return (
        <div className='w-[100%] bg-black'>
            <footer className="max-w-[1200px] mx-auto footer gap-5 sm:footer-horizontal py-10">
                {/* <div className=' flex justify-between gap-5'> */}
                    <nav> 
                        <a className='text-2xl text-white' href="" >CS- Ticket System</a>
                        <p className='text-gray-400 text-justify'>A ticketing tool is software used to track, <br />
                           manage,and organize customer service requests <br />
                           or issuessubmission to resolution. It helps <br />
                           teams assign tasks,monitor progress, and maintain <br />
                           a record of communications for efficient and <br />
                           consistent support.</p>
                    </nav>
                    <nav>
                        <h1 className='text-2xl text-white'>Company</h1>
                        <a className='text-gray-400' href="">About Us</a>
                        <a className='text-gray-400' href="">Our Mission</a>
                        <a className='text-gray-400' href="">Contact Said</a>
                    </nav>
                    <nav>
                        <h1 className='text-2xl text-white'>Services</h1>
                        <a className='text-gray-400' href="">Products & Services</a>
                        <a className='text-gray-400' href="">Customer Stories</a>
                        <a className='text-gray-400' href="">Download Apps</a>
                    </nav>
                    <nav>
                        <h1 className='text-2xl text-white'>Information</h1>
                        <a className='text-gray-400' href="">Privacy Policy</a>
                        <a className='text-gray-400' href="">Terms & condition</a>
                        <a className='text-gray-400' href="">Join Us</a>
                    </nav>
                    <nav>
                        <h1 className='text-2xl text-white'>Social Links</h1>
                        <a className='text-gray-400' href="">@CS- Ticket System</a>
                        <a className='text-gray-400' href="">@CS- Ticket System</a>
                        <a className='text-gray-400' href="">@CS- Ticket System</a>
                        <a className='text-gray-400' href="">support@cst.com</a>
                    </nav>
                {/* </div> */}
                
            </footer>
            
            <footer className="max-w-[1200px] mx-auto py-10">
                <hr className='text-gray-600 py-5'/>
                <h3 className='text-white text-center'>© 2026 CS - Ticket System. All rights reserved </h3>
            </footer>
        </div>
        
    );
};

export default Footer;
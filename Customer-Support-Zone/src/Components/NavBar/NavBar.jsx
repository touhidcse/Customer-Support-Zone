import React from 'react';

const NavBar = () => {
    return (
        <div className=' max-w-[90%] mx-auto flex justify-between items-center'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="text-xl">CS — Ticket System</a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="">Home</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Changelog</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Download</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='hidden lg:flex gap-5'>
                            <a href=""> Home </a>
                            <a href=""> FAQ </a>
                            <a href=""> Changelog </a>
                            <a href=""> Blog </a>
                            <a href=""> Download </a>
                            <a href=""> Contact </a>
                        </div>
                        <a className="btn ml-[40px] bg-[#422AD5] text-white"> + New Ticket</a>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default NavBar;
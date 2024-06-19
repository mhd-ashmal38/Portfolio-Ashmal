import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='flex justify-end sm:px-10 px-6 py-6 w-full'>
            <div className='flex gap-10 font-sourcecode'>
                <Link className={`hover:underline ${currentPath === '/' ? 'underline' : ''}`} to={'/'}>
                    Work
                </Link>
                <Link
                    className={`hover:underline ${currentPath === '/about' ? 'underline' : ''}`} to={'/about'}>
                    About
                </Link>
            </div>
        </div>
    );
}

export default Navbar;

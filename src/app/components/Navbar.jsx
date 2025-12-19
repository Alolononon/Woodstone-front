import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar-container sticky top-0'>
            <a href="/" className='flex justify-left items-center mx-2'>
                <img src='woodlogo.jpg' alt='Woodstone Logo' className='w-10 h-10'/>
                <h1 className='ml-2'> Woodstone</h1>
            </a>
            
            <div >
                <a href="/" className='navbar-buttons'>Home</a>
                <a href='/price' className='navbar-buttons'>Price</a>
                <a href='/contact' className='navbar-buttons'>Contact</a>
                <a href="/about" className='navbar-buttons mr-4'>About</a>
            </div>

        </nav>

    );
}


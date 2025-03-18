'use client'
import React, { useState, useRef, useEffect } from 'react';
import FullLengthNavbar from './fullLengthNavbar';
import './navbar.css';
import Link from 'next/link';

function Navbar() {
    const [navToggle, setNavToggle] = useState(false);
    const Nav = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        const handleScroll = () => {
            setNavToggle(false); 
        };

        const handleClickOutside = (event: MouseEvent) => { 
            if (Nav.current && !Nav.current.contains(event.target as Node)) { 
                setNavToggle(false);
            }
        };

        const handleClickListener = () => {
            setNavToggle(false);
        };

        window.addEventListener('scroll', handleScroll);

        if (window.innerWidth < 768 && navToggle) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('click', handleClickListener);
        }
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('click', handleClickListener);
        };
    }, [navToggle]);

    return (
        <div className='glass flex justify-between items-start w-full lg:px-16 lg:py-2 fixed z-30' ref={Nav}>
            <Link href="\">
                <h1 className=' font-mono p-2'>HORIZON 25'</h1>
            </Link>
            <div className='flex gap-8 text-lg'>
                {navToggle ? (
                    <FullLengthNavbar />
                ) : (
                    <div className="hover:cursor-pointer font-mono p-2" onClick={() => setNavToggle(true)}>Menu</div>
                )}
            </div>
        </div>
    );
}

export default Navbar;

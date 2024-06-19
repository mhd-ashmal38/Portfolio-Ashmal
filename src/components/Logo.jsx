import React, { useEffect, useState } from 'react';
import { IoTriangleOutline } from "react-icons/io5";

function Logo() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / docHeight;
            const newRotation = scrollFraction * 360; // Rotate up to 360 degrees

            setRotation(newRotation);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='sm:px-10 px-6 py-6 md:fixed md:top-0'>
            <IoTriangleOutline size={40} style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s' }} />
        </div>
    );
}

export default Logo;

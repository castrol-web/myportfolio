import React from 'react';

function NavigationDots({ active }) {
    return (
        <div className="hidden lg:flex justify-center items-center flex-col p-4">
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="rounded-md bg-gray-400 w-3 h-3 m-2"
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}>

                </a>
            ))}
        </div>
    );
}

export default NavigationDots;

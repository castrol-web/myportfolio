import React, { useState, useEffect } from 'react';

function ScrollButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
                >
                    ↑
                </button>
            )}
        </div>
    );
}

export default ScrollButton;

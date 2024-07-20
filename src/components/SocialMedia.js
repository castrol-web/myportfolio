import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialMedia() {
    return (
        <div className="hidden lg:flex justify-end items-center flex-col p-4 gap-3">
            <div className='bg-white p-2 rounded-full'>
                <FaTwitter />
            </div>
            <div className='bg-white p-2 rounded-full'>
                <FaFacebookF />
            </div>
            <div className='bg-white p-2 rounded-full'>
                <FaInstagram />
            </div>
        </div>
    )
}

export default SocialMedia
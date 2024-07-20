import React, { useState } from 'react'

function ToolTip({ text, children }) {
    //checking for visibility
    const [isVisible, setIsvisible] = useState(false);
    return (
        <div className='relative inline-block'
            onMouseEnter={() => setIsvisible(true)}
            onMouseLeave={() => setIsvisible(false)}>

            {isVisible && (
                <div className='absolute bottom-full mb-2 bg-slate-200 p-2 rounded-md shadow-md text-sm text-gray-600'>{text}</div>)
            }
            {children}
        </div>
    )
}

export default ToolTip
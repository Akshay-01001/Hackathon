import React from 'react'

import chart from "../assets/img1.png"

const Chart = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h6 className='text-3xl font-bold'>Chart</h6>
                <img src={chart} className='mx-auto' alt="Chart" />
            </div>
        </div>

    )
}

export default Chart
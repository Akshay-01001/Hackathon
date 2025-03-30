import React from 'react'
import graph from "../assets/graph1.png"

const Graph = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h6 className='text-3xl font-bold'>Graph</h6>
                <img src={graph} className='mx-auto' alt="Graph" />
            </div>
        </div>
    )
}

export default Graph
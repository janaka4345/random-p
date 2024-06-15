'use client'

import { useState } from "react"

const ClientComponent = () => {
    const [num, setNum] = useState(0)
    const handleClick = () => {
        setNum(prev => prev + 1)
    }
    return (
        <div>
            <h1>
                ClientComponent
            </h1>
            {num}
            <button onClick={handleClick}>increment</button>
        </div>
    )
}
export default ClientComponent
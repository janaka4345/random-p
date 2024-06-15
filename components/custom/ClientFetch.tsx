'use client'

import { useEffect, useState } from "react"

export const ClientFetch = () => {
    const [data, setData] = useState('')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))

        return () => {

        }
    }, [])

    return (
        <div>
            <h1>ClientFetch</h1>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}
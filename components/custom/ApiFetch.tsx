'use client'

import { useEffect, useState } from "react"

const ApiFetch = () => {
    const [data, setData] = useState()
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3000/api/fetchRoute')
            const data = await response.json()
            setData(data)
        }
        getData()
        return () => {

        }
    }, [])

    // console.log(data);
    return (
        <div>
            <h1>ApiFetch</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
    )
}
export default ApiFetch
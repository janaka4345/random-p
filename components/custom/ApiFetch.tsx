const ApiFetch = async () => {
    const data = await fetch('http://localhost:3000/api/fetchRoute')
    // console.log(data);
    return (
        <div>
            <h1>ApiFetch</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
    )
}
export default ApiFetch
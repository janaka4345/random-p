import fetchPlaceholderData from "@/serverActions/placeHolder"

const ServerActionFetch = async () => {
    const data = await fetchPlaceholderData()
    return (
        <div>
            <h1>ServerActionFetch</h1>
            {JSON.stringify(data, null, 2)}
        </div>
    )
}
export default ServerActionFetch
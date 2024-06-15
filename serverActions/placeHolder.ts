'use server'
export default async function fetchPlaceholderData(){
    const response=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=response.json()
return data
}
import { useEffect } from "react"

function ArtistProfile({results, selectedArtist}){
    
    useEffect(()=> {
        fetch(`http://localhost:3000/${selectedArtist}`)
        .then(res=>res.json())
        .then(data=> console.log(data))
    }, [selectedArtist])

    
    
    return (
        <h1>Hi Devin</h1>
    
        )
}

export default ArtistProfile
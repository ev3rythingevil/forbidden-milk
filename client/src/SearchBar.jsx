import {useState} from 'react'

function SearchBar(){
    const [searchData, setSearchData] = useState("")
    const [results, setResults] = useState([])

    const handleChange = (e) => {
        setSearchData({...searchData,
        [e.target.name]: e.target.value
        })
    } 
    
    
    const handleSubmit = (e) => {
        fetch('http://localhost:3000/artists')
        .then(r=>r.json())
        .then(artists => setResults(artists))
    }

    return(
        <>
        <form onSubmit={e=> handleSubmit}>
            <label>
                Search artists
            <input type="text" name="search" placeholder="Search for artists" onChange={(e)=> handleChange(e)}/>
            </label>
            <input type="submit" value="Search" />
        </form>
        <div>
        {results.filter}
        </div>
        </>
    )
}

export default SearchBar
import {useEffect, useState} from 'react'


function SearchBar(){
    const [searchData, setSearchData] = useState("")
    const [results, setResults] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:4000/artists'

        fetch(url)
        .then(r=>r.json())
        .then(artists => setResults(artists))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        setSearchData(e.target.value.toLowerCase())
    } 
    

    return(
        <>
        <form>
            <label>
                Search:
                <br/>    
            <input type="text" 
                name="search" 
                placeholder="enter artist name here..." 
                onChange={(e)=> handleChange(e)}/>
            </label>
        </form>
        { searchData === "" ? null : 
        <div>
        {results.filter((i) => i.name.toLowerCase().includes(searchData))
        .map((result, index) => {
            return(
            <div className="results" key={index}>
                <h2>{result.name}</h2>
                <p>{result.genre}</p>
            </div>    
            )
        })
        }
        </div>}
        </>
    )
}

export default SearchBar
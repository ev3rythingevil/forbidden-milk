import {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'

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
        <form className ='m-5 5 5 5'>
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
                <h2 className='m-2-2-2-2'>{result.name}</h2>
                <h3>{result.genre}</h3>
                <h4>{result.records.map(record=>
                    <ul>
                     <li>{record.title} ({record.year})</li>
                     <button>Add to my collection!</button>
                    </ul>
                        )}
                    <p>{result.pressings.map(pressing=>
                    <ul>
                        <p>weight: {pressing.weight} oz
                            <br/>
                           color: {pressing.color}
                            <br/>
                           label: {pressing.label}</p>
                    </ul>
                )}</p>
                </h4>
            </div>    
            )
        })
        }
        </div>}
        </>
    )
}

export default SearchBar
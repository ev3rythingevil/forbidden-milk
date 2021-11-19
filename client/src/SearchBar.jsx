import {useEffect, useState} from 'react'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import ArtistProfile from './ArtistProfile'

function SearchBar({results}){
    const [searchData, setSearchData] = useState("")


    const handleChange = (e) => {
        e.preventDefault()
        setSearchData(e.target.value.toLowerCase())
    } 

    const handleClick = (e, record) => {
        e.preventDefault()
        createPressing(record)   
    }

    const createPressing = (record) => {
        fetch('http://localhost:4000/pressings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                record_id: record.id,
                weight: 180,
                color: 'unknown',
                label: 'unknown'
            })
        }) 
            .then(r => r.json())
            .then(data => {
                console.log(data)
            })
            .catch((error)=> {
                console.error('Error:', error)
            })
        
    }

    return(
        <>
        <form className="m-5 5 5 5">
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
        <Stack direction="horizontal" gap={1}>
        {results.filter((i) => i.name.toLowerCase().includes(searchData))
        .map((result, index) => {
            return(
            <div key={result.id}>
                <Card className="text-center" style={{ width: '18rem' }} className="text-center">
                <h2>
                <Link to={`/artists/${result.id}`}>{result.name}</Link>
                <br/>
                    <h5 className='m-2 2 2 2'>
                        {result.genre}
                    </h5>
                </h2>
                
                <div style={{ width: '18rem' }}>{result.records.map(record =>
                    <ul>
                     <p><strong>{record.title} ({record.year})</strong>
                     <button onClick={e =>handleClick(e, record)}>Add to my collection!</button>
                     </p>
                    </ul>
                        )}
                  
                </div>
                </Card>
            </div>    
            )
        })
        }
        </Stack>}
        </>
    )
}

export default SearchBar
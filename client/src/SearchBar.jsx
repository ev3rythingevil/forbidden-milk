import {useEffect, useState} from 'react'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
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
                <Card className="text-center" style={{ width: '20rem' }, { height: '20rem'}} className="text-center">
                <h2>
                <Link to={`/artistprofile/${result.id}`} component={ArtistProfile}>{result.name}</Link>
                <br/>
                    <h5 className='m-2 2 2 2'>
                        {result.genre}
                    </h5>
                </h2>
                
                <div style={{ width: '20rem' }}>{result.records.map(record =>
                    <ul>
                     <p className="text-center">
                         <Image src={record.image} thumbnail style={{ width: '10rem' }, { height: '10rem'}}/>
                         <br/>
                         <strong>{record.title} 
                         <br/>
                         ({record.year})</strong>
                         <br/>
                     <Button variant="outline-success" onClick={e =>handleClick(e, record)}>Add to my collection!</Button>
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
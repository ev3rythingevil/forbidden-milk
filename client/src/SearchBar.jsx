import {useEffect, useState} from 'react'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import ArtistProfile from './ArtistProfile'

function SearchBar({results , createPressing, addToCollection}){
    const [searchData, setSearchData] = useState("")


    const handleChange = (e) => {
        e.preventDefault()
        setSearchData(e.target.value.toLowerCase())
    } 

    const handleClick = (e, record) => {
        e.preventDefault()
        //createPressing(record)
        // console.log(pressingInfo)
        addToCollection(record)   
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
        <Stack direction="horizontal" gap={3} className="align-items-center justify-content-center">
        {results.filter((i) => i.name.toLowerCase().includes(searchData))
        .map((result, index) => {
            return(
                <Card className="display-flex">
            <div key={result.id} style={{display: "flex"}}>
            
                <h2>
                <Link to={`/artists/${result.id}`} component={ArtistProfile}>{result.name}</Link>
                <br/>
                    <h5 className='m-2 2 2 2'>
                        {result.genre}
                    </h5>
                </h2>
                
                <div style={{display: "flex"}}>{result.records.map(record =>
                    <ul>
                     <p className="justify-content-center">
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
            </div>
            </Card>    
            )
        })
        }
        </Stack>}
        </>
    )
}

export default SearchBar
import { useEffect, useState } from "react"
import Figure from 'react-bootstrap/Figure'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

function ArtistProfile({results, selectedArtist}){
    const [artistInfo, setArtistInfo] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:4000/artists/${selectedArtist}`)
        .then(res=>res.json())
        .then(data=> {
            setArtistInfo(data)
        })
    }, [selectedArtist])
    
 

    return (
        <Stack direction="vertical" gap={3} className="align-items-center justify-content-center">
            <h2>{artistInfo.name}</h2>
            <p>{artistInfo.genre}</p>
            <h4>{artistInfo.records?.map(record=> 
            <Card className="display-flex">
                <div style={{display: "flex"}}>
                    <Figure>
                        <Figure.Image 
                        thumbnail 
                        style={{ width: '15rem' }, { height: '15rem'}}
                        src={record.image}/>
                        <Figure.Caption>
                                <strong>
                                    {record.title} ({record.year})
                                </strong>
                        </Figure.Caption>
                </Figure>
                    
                </div>
            </Card>
            )}
            
            </h4>
        </Stack>
        )
}

export default ArtistProfile
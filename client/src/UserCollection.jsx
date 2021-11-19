import {useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function UserCollection({record , pressings}){
    
    console.log(record)
    console.log(pressings)
    const pressing = pressings.filter(p => p.record_id === record.id)
    
    const deletePressing = (e, pressing) => {
        let del_url = pressing[0].id 
        fetch(`http://localhost:4000/pressings/${del_url}`, {
                 method: "DELETE",
            })
            .then((r) => r.json()) 
            .then((data) => console.log(data));
    }
    
    return (
        <div>
       <Card><h4>{record.title} - {record.artist.name}</h4>
       <h5><strong>Pressings</strong></h5>
       <h6>{pressing.map(p => <h6>Weight: {p.weight}<span> || </span>Color: {p.color}<span> || </span>Label: {p.label}</h6>
       )}
        <Button variant="outline-danger" 
        className="m-auto" 
        style={{ width: '18rem' }}
        onClick={e => deletePressing(e, pressing)}>
            sell this pressing
        </Button>
       </h6>
      
       </Card>
       </div>
    )
}

export default UserCollection
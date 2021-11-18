import {useEffect} from 'react'
import Card from 'react-bootstrap/Card'

function UserCollection({record , pressings}){
    
    console.log(record)
    console.log(pressings)
    const pressing = pressings.filter(p => p.record_id === record.id)
    
    
    return (
        <div>
       <Card><h4>{record.title} - {record.artist.name}</h4>
       <h4><strong>Pressings</strong></h4>
       <p>{pressing.map(p => <h4>Weight: {p.weight} Color: {p.color} Label: {p.label}</h4>)}</p>
       </Card>
       </div>
    )
}

export default UserCollection
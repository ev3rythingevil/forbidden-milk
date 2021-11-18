import {useEffect} from 'react'

function UserCollection({record , pressings}){
    
    console.log(record)
    console.log(pressings)
    const pressing = pressings.filter(p => p.record_id === record.id)
    
    
    return (
        <div>
       <h1>{record.title} - {record.artist.name}</h1>
       <h3>Pressings</h3>
       <h4>{pressing.map(p => <h4>Weight: {p.weight} Color: {p.color} Label: {p.label}</h4>)}</h4>
       </div>
    )
}

export default UserCollection
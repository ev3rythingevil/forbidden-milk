// import { useEffect, useState} from 'react'
import UserCollection from './UserCollection'

function UserProfile({user}){
    
    const records = user.records
    console.log(records)
    return(
        <div>
        <h1>{user.username}'s Stax of Wax</h1>
        {records.map(record => <UserCollection record={record} pressings={user.pressings} artists={user.artists}/>)}
        </div>
    )
}

export default UserProfile
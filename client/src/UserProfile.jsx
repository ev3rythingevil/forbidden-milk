import { useEffect, useState} from 'react'
import UserCollection from './UserCollection'

function UserProfile(user){
    
    const [userRecords, setUserRecords] = useState([])

    return(
        <div>
        <h1>People are strange, when you're a stranger</h1>
        <UserCollection user={user}/>
        </div>
    )
}

export default UserProfile
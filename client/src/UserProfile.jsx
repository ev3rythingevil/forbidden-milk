import { useEffect, useState} from 'react'
import UserCollection from './UserCollection'

function UserProfile(){
    
    const [userRecords, setUserRecords] = useState([])

    useEffect(() => {
        fetch('/user_pressings')
        .then(r => r.json())
        .then(data => setUserRecords(data))
       
    }, []);
    
    return(
        <div>
        <h1>People are strange, when you're a stranger</h1>
        <UserCollection userRecords={userRecords}/>
        </div>
    )
}

export default UserProfile
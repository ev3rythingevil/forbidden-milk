import { useEffect, useState} from 'react'
import UserCollection from './UserCollection'

function UserProfile(){
    
    const [userRecords, setUserRecords] = useState()

    useEffect(() => {
        fetch('/user_pressings')
        .then(r => r.json())
        .then(data => { console.log(data)})
       
    }, []);
    
    return(
        <div>
        <h1>People are strange, when you're a stranger</h1>
        {/* {userRecords.map( record => {<UserCollection record = {record}/> }) } */}
        </div>
    )
}

export default UserProfile
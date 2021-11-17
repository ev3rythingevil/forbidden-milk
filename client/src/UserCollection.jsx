import {useEffect} from 'react'

function UserCollection(userRecords){
    
    useEffect(() => {
        fetch('/user_records')
        .then(r => r.json())
        .then(data => console.log(data))
       
    }, []);
    
    return (
        <div>
       
        </div>
    )
}

export default UserCollection
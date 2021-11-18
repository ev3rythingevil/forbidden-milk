import UserCollection from './UserCollection'
import Card from 'react-bootstrap/Card'

function UserProfile({user}){
    
    const records = user.records
    console.log(records)
    return(
        <Card>
        <h1>{user.username}'s Stax of Wax</h1>
        {records.map(record => <UserCollection record={record} pressings={user.pressings}/>)}
        </Card>
    )
}

export default UserProfile
import UserCollection from './UserCollection'

function UserProfile({user}){
    
    const records = user.records
    console.log(records)
    return(
        <div className="mt-5 , p-5">
        <h1>{user.username}'s Stax of Wax</h1>
        {records.map(record => <UserCollection record={record} pressings={user.pressings}/>)}
        </div>
    )
}

export default UserProfile
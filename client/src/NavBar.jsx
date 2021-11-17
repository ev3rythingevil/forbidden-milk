import { useState } from 'react'

function NavBar({userLogIn, loggedIn, user, doLogOut}){
    
    const [saveData, setSaveData] = useState({})
    
    function handleChange(e){
        setSaveData({...saveData, 
            [e.target.name]: e.target.value
        })
    }
    
    function logInData(e){
        e.preventDefault()
        userLogIn(saveData)
    }
    
    function logOut(e){
        e.preventDefault()
        doLogOut()
    }
    
    if (loggedIn)

    return(
        <div>
            <h1> WaxStax </h1>
            <form onSubmit={e=>logOut(e)}>
                <h2> Hello, {user.username} </h2>
                <input type="submit" value="Log Out"/>
            </form>
        </div>
    )
    else
    return(
        <div>
        <h1>WaxStax</h1>
        <form onSubmit={e => logInData(e)}>
            <label>
                Username:
                <input type="text" name="username" onChange={(e)=> handleChange(e)}/>
            </label>
            <label>
                Password:
                <input type="text" name="password" onChange={(e)=> handleChange(e)}/>
            </label>
            <input type="submit" value="Log In"/>
        </form>
        </div>

    )
}

export default NavBar
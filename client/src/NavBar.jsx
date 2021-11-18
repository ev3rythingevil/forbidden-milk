import { useState } from 'react'
import SearchBar from './SearchBar'
import { Navbar, Stack } from 'react-bootstrap'

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
            
        <Navbar>
            <Stack direction="vertical" gap={3}>
            <h1 className="text-center"> WaxStax </h1>
            <form className="mt 5 text-center" onSubmit={e=>logOut(e)}>
                <h3> Hello, {user.username} </h3>
                <input type="submit" value="Log Out"/>
                <SearchBar />
            </form>
            </Stack>
        </Navbar>
        
       
    )
    else
    return(
        <Navbar>
        <Stack direction="vertical" gap={3}>
        <h1 className="text-center">WaxStax</h1>
        <form className="m-5 5 5 5 text-center" onSubmit={e => logInData(e)}>
            <label>
                Username:
                <input type="text" name="username" onChange={(e)=> handleChange(e)}/>
            </label>
            <span>    </span>
            <label>
                Password:
                <input type="text" name="password" onChange={(e)=> handleChange(e)}/>
            </label>
            <input type="submit" value="Log In"/>
            <SearchBar/>
        </form>
        </Stack>
        </Navbar>

    )
}

export default NavBar
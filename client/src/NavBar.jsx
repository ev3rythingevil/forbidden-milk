import { useState } from 'react'
import SearchBar from './SearchBar'
import { Navbar } from 'react-bootstrap'

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
        
            <Navbar fixed="top" className = "m-3" >
            <h1> WaxStax </h1>
            <form onSubmit={e=>logOut(e)}>
                <h2> Hello, {user.username} </h2>
                <input type="submit" value="Log Out"/>
                <SearchBar />
            </form>
        </Navbar>
        
       
    )
    else
    return(
        <Navbar>
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
            <SearchBar />
        </form>
        </Navbar>

    )
}

export default NavBar
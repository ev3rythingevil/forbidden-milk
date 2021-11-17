import logo from './logo.svg';
import './App.css';
import SplashPage from './SplashPage';
import { useState } from 'react';
import NavBar from './NavBar';

function App() {

const [user, setUser] = useState({})
const [loggedIn, setLoggedIn] = useState(false)

function userLogIn(saveData){
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveData)
    })
    .then(r => r.json())
    .then( (user) => {
    user.username === saveData.username? setLoggedIn(!loggedIn) : alert(user.error)
    setUser(user)
    })
}
  
  
  if (loggedIn)
  return(
    <div>
      <NavBar userLogIn={userLogIn}/>
    <h1>Welcome User, here's some stuff to look at</h1>
    </div>
  )

  else /* no user logged in */
    return (
      <div>
        <NavBar userLogIn={userLogIn}/>
        <SplashPage />
      </div>
    );
  }

export default App;

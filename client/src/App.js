import logo from './logo.svg';
import './App.css';
import SplashPage from './SplashPage';
import { useState , useEffect } from 'react';
import NavBar from './NavBar';
import UserProfile from './UserProfile';
import { Outlet, Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Container from 'react-bootstrap/Container';



function App() {

  // states 
const [user, setUser] = useState([])
const [loggedIn, setLoggedIn] = useState(false)

// consts/variables

// useEffects/inits
  useEffect(()=> {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
         setLoggedIn(!loggedIn)
        });
      } 
    });
  }, []);

// functions
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
      setUser(user)
    user.username === saveData.username? setLoggedIn(!loggedIn) : alert(user.error)
    })
}

function doLogOut(){
  fetch("/logout",{
    method: "DELETE",
  })
  .then(()=>{
    setLoggedIn(!loggedIn)
    setUser({})
  })
}
  


  if (loggedIn)
  return(
   
    <div className='bg-light-border'>
      <Container className="p-3">
      <NavBar userLogIn={userLogIn} 
      loggedIn={loggedIn} 
      user={user} 
      doLogOut={doLogOut}
      />
      </Container>
      <UserProfile user={user}/>
      
    </div>
  )

  else /* no user logged in */
    return (
      <div>
        <NavBar userLogIn={userLogIn} loggedIn={loggedIn} />
      </div>
    );
  }

export default App;

import logo from './logo.svg';
import './App.css';
import SplashPage from './SplashPage';
import { useState , useEffect } from 'react';
import NavBar from './NavBar';

function App() {

  // states 
const [user, setUser] = useState({})
const [loggedIn, setLoggedIn] = useState(false)

// consts/variables

// useEffects/inits
  useEffect(()=> {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
         setLoggedIn(!loggedIn)
         setUser(user)
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
    user.username === saveData.username? setLoggedIn(!loggedIn) : alert(user.error)
    setUser(user)
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
    <div>
      <NavBar userLogIn={userLogIn} loggedIn={loggedIn} user={user} doLogOut={doLogOut}/>
    <h1>Welcome User, here's some stuff to look at</h1>
    </div>
  )

  else /* no user logged in */
    return (
      <div>
        <NavBar userLogIn={userLogIn} loggedIn={loggedIn} />
        <SplashPage />
      </div>
    );
  }

export default App;

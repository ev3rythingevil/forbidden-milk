import logo from './logo.svg';
import './App.css';
import SplashPage from './SplashPage';
import { useState , useEffect } from 'react';
import NavBar from './NavBar';
import UserProfile from './UserProfile';
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Container from 'react-bootstrap/Container';
import ArtistProfile from './ArtistProfile'
import ArtistList from './ArtistList';


function App() {

  // states 
const [user, setUser] = useState([])
const [loggedIn, setLoggedIn] = useState(false)
const [results, setResults] = useState([])

const history = useNavigate()
// useEffects/inits
useEffect(()=> {
    const url = 'http://localhost:4000/artists'

    fetch(url)
    .then(r=>r.json())
    .then(artists => setResults(artists))
}, [])


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
    setUser([])
    history('/')
  })
}

function addToCollection(record){
  console.log(record)
}

const createPressing = (record) => {
  fetch('http://localhost:4000/pressings', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          record_id: record.id,
          weight: 180,
          color: 'unknown',
          label: 'unknown'
      })
  }) 
      .then(r => r.json())
      .then(data => {
        window.location.reload(true);
      })
      .catch((error)=> {
          console.error('Error:', error)
      })
  
}  


  if (loggedIn)
  return(
   
    <div className='bg-light-border'>
      <Container className="p-3">
      <NavBar userLogIn={userLogIn}
        createPressing={createPressing} 
        addToCollection={addToCollection} 
      loggedIn={loggedIn} 
      user={user} 
      doLogOut={doLogOut}
      results={results}
      />
      </Container>
    <Routes>
      <Route path='/' element={<SplashPage />} />
      <Route path='/me' element={<UserProfile user={user}/>} />
      <Route path="/artists" element={<ArtistList results={results}/>}/>
      <Route path='/artists/:id' element={<ArtistProfile results={results}/>}/>
    </Routes>  
    </div>
  )

  else /* no user logged in */
    return (
      <div>
        <NavBar userLogIn={userLogIn} 
         createPressing={createPressing}
        loggedIn={loggedIn} 
        results={results}/>
         <Routes>
      <Route path='/' element={<SplashPage />} />
      <Route path="/artists" element={<ArtistList results={results}/>}/>
    </Routes>  
      </div>
    );
  }

export default App;

import logo from './logo.svg';
import './App.css';
import SplashPage from './SplashPage';
import { useState } from 'react';
import NavBar from './NavBar';

function App() {

const [user, setUser] = useState([])


function userLogIn(saveData){
    console.log(saveData)
}
  
  
  if (/*user logged in*/ user)
  return(
    <div>
      <NavBar userLogIn={userLogIn}/>
    <h1>Welcome User, here's some stuff to look at</h1>
    </div>
  )

  else /* no user logged in */
    return (
      <div>
        <NavBar />
        <SplashPage />
      </div>
    );
  }

export default App;

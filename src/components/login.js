import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoutineForm from './routineForm';
import MyRoutines from './myroutines';



const Login = (props) => {
  const {user, setUser ,isLoggedIn , setIsLoggedIn, exchangeTokenForUser, token, routineId } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); 


  const login = (ev) => {
    ev.preventDefault();
    console.log('login');
    fetch(
      'http://fitnesstrac-kr.herokuapp.com/api/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({
          
            username: username,
            password: password,
            }),
         }
        )
      .then((response) => response.json())
      .then((result) => {
        if (!result.token) {
          throw result;
        }
        const token = result.token;
        window.localStorage.setItem('token', token);
        setIsLoggedIn(true);
        exchangeTokenForUser();
        
        
        
      })
      .catch((err) => console.log(err));

  };


  const logout = ()=> {
    window.localStorage.removeItem('token');
    setUser({});
    window.location.reload(false);
  } 


  

  return (
    <div>
    {
        isLoggedIn ? 
        <div>
  
        <h1>Welcome FitnessTracker {user.username}!</h1> <br/>
        <MyRoutines  user ={ user } token={token}/>
        <button onClick={(ev) => logout(ev)}> Logout </button>
        

        </div> 
        : null
      }
      {
        !isLoggedIn ? (
            <div className='preLogin'>
                <h2 className='signin'>Please sign in</h2>
                <form className='displayLoginForm' onSubmit={login}>
                <input
                placeholder="username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                />
                <input
                placeholder="password"
                value={password}
                type="password"
                onChange={(ev) => setPassword(ev.target.value)}
                />
                <button disabled={!username || !password}>Login</button>
                </form>
            </div>) : null
        }
        </div>  
  );
}

export default Login;
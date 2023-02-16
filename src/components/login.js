import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  const exchangeTokenForUser = props.exchangeTokenForUser;
  const token = props.token;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {user, setUser ,isLoggedIn , setIsLoggedIn } = props;
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
        if (!result.success) {
          throw result;
        }
        const token = result.data.token;
        window.localStorage.setItem('token', token);
        exchangeTokenForUser();
        getPosts();
        console.log(user)
        setIsLoggedIn(true);
        
        
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
        <h1>Welcome Stranger {user.username}!</h1> <br/>
        <button onClick={ ev => navigate('./postForm')}>Make a post</button>
        <button onClick={ logout }> Logout </button>
        <section><ViewMessages  token={token} user ={user} /></section>

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
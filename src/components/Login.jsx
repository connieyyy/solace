import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { Login } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await Login(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='enter email...'/>
          <label>Password</label>
          <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='enter password...'  />
          <button type='submit'>Login</button>
          <p>Don't have an account?</p> <Link to="/Register"><p>Sign up</p></Link>
        </form>
      </div>
    </div>
  )
}


export default Login;
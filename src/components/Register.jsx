import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className = "page">
      <h1>Create your account</h1>
      <div className = "register-form">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder ="name"/> 
      
          <label>Email</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder ="email" />
          
          <label>Password</label>
          <input type='password' onChange={(e) => setEmail(e.target.value)} placeholder ="password"  />
        
          <button type='submit'> Submit </button>

          <p>Have an account? </p> 
          <Link to="/Login"><p>Login</p></Link>
        </form>
      </div>
    </div>
  )
}


export default Register;
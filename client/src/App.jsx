import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Homeboard from './components/Homeboard';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
  
      <div>
        <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          <Route path='/homeboard' element={<ProtectedRoute><Homeboard/></ProtectedRoute>} />
        </Routes>
        </AuthContextProvider>
       
    </div>
  )
}

export default App;

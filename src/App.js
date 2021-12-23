import React from 'react'
import {Routes,Route} from 'react-router'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import Error from './components/Error.jsx'
import UserDetails from './components/UserDetails.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/details" element={<UserDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;

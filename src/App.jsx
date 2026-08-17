import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import LoginForm from './components/LoginForm'
import SignupStub from './components/SignupStub'
import MfaStep from './components/MfaStep'
import ProtectedPage from './pages/ProtectedPage'
import PrivateRoute from './routes/PrivateRoute'

export default function App(){
  const location = useLocation()
  return (
    <AuthProvider>
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:16}}>
          <Link to="/">Home</Link>
          {location.pathname === '/' && (
            <Link to="/login"><button style={{padding:'6px 10px'}}>Login</button></Link>
          )}
        </div>
        <Routes>
          <Route path="/" element={<div>Welcome to the React Auth Demo.</div>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupStub />} />
          <Route path="/mfa" element={<MfaStep />} />
          <Route path="/protected" element={<PrivateRoute><ProtectedPage /></PrivateRoute>} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

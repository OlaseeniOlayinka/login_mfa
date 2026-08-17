import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { users } from '../mocks/users'

const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [mfaPassed, setMfaPassed] = useState(false)
  const [mfaCode, setMfaCode] = useState(null)
  const navigate = useNavigate()

  function login(email, password){
    const found = users.find(u => u.email === email && u.password === password)
    if(found){
      setUser(found)
      setIsAuthenticated(true)
      setMfaPassed(false)
      const code = Math.floor(100000 + Math.random()*900000).toString()
      setMfaCode(code)
      // go to MFA step
      navigate('/mfa')
      return { ok: true }
    }
    return { ok: false, error: 'Invalid credentials' }
  }

  function completeMfa(code){
    if(code === mfaCode){
      setMfaPassed(true)
      navigate('/protected')
      return { ok: true }
    }
    return { ok: false, error: 'Invalid code' }
  }

  function logout(){
    setUser(null)
    setIsAuthenticated(false)
    setMfaPassed(false)
    setMfaCode(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, mfaPassed, mfaCode, login, completeMfa, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}

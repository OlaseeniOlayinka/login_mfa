import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext.jsx'
import { Link as RouterLink } from 'react-router-dom'

function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function LoginForm(){
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [authError, setAuthError] = useState(null)

  function onSubmit(e){
    e.preventDefault()
    const next = {}
    if(!email) next.email = 'Email is required'
    else if(!validateEmail(email)) next.email = 'Email is invalid'
    if(!password) next.password = 'Password is required'
    setErrors(next)
    setAuthError(null)
    if(Object.keys(next).length>0) return

    const res = login(email, password)
    if(!res.ok) setAuthError(res.error)
  }

  return (
    <form onSubmit={onSubmit} style={{maxWidth:480}}>
      <div style={{marginBottom:12}}>
        <div style={{marginBottom:6}}>Email</div>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" style={{width:'100%',padding:8}} />
        {errors.email && <div style={{color:'red',marginTop:6}}>{errors.email}</div>}
      </div>

      <div style={{marginBottom:12}}>
        <div style={{marginBottom:6}}>Password</div>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" style={{width:'100%',padding:8}} />
        {errors.password && <div style={{color:'red',marginTop:6}}>{errors.password}</div>}
      </div>

      {authError && <div style={{color:'red',marginBottom:12}}>{authError}</div>}

      <button type="submit" style={{padding:'8px 12px',marginRight:8}}>Login</button>
      <RouterLink to="/signup">Sign Up</RouterLink>
    </form>
  )
}

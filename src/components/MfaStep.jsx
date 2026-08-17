import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext.jsx'

export default function MfaStep(){
  const { mfaCode, completeMfa, isAuthenticated } = useAuth()
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)

  if(!isAuthenticated){
    return <div>Please login first.</div>
  }

  function onSubmit(e){
    e.preventDefault()
    setError(null)
    const res = completeMfa(code)
    if(!res.ok) setError(res.error)
  }

  return (
    <div style={{maxWidth:480}}>
      <div style={{marginBottom:8}}>A one-time code has been generated for this demo. Use it to continue.</div>
      <div style={{marginBottom:12,fontWeight:'bold'}}>Demo code: {mfaCode}</div>
      <form onSubmit={onSubmit}>
        <div style={{marginBottom:12}}>
          <div style={{marginBottom:6}}>Enter code</div>
          <input value={code} onChange={e=>setCode(e.target.value)} placeholder="123456" style={{width:'100%',padding:8}} />
        </div>
        {error && <div style={{color:'red',marginBottom:12}}>{error}</div>}
        <button type="submit" style={{padding:'8px 12px'}}>Verify</button>
      </form>
    </div>
  )
}

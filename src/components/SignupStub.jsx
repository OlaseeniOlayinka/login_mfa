import React from 'react'
import { Link } from 'react-router-dom'

export default function SignupStub(){
  return (
    <div>
      <p style={{marginBottom:12}}>Sign Up is a stub for this demo. Navigate back to Login to try the flow.</p>
      <Link to="/login"><button style={{padding:'8px 12px'}}>Back to Login</button></Link>
    </div>
  )
}

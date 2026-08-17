import React from 'react'
import { useAuth } from '../contexts/AuthContext.jsx'

export default function ProtectedPage(){
  const { user, logout } = useAuth()

  const canEdit = user && user.role === 'write'

  return (
    <div>
      <h3>Protected Area</h3>
      <div style={{marginBottom:12}}>Welcome {user?.email} — role: {user?.role}</div>
      <button style={{marginRight:8}} onClick={() => alert('Viewing content')}>View</button>
      <button style={{marginRight:8}} onClick={() => alert('Editing content')} disabled={!canEdit}>{canEdit ? 'Edit' : 'Edit (read-only)'}</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

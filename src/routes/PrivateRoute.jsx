import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'

export default function PrivateRoute({ children }){
  const { isAuthenticated, mfaPassed } = useAuth()
  if(!isAuthenticated) return <Navigate to="/login" replace />
  if(!mfaPassed) return <Navigate to="/mfa" replace />
  return children
}

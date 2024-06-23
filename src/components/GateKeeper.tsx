import { selectCurrentToken, selectCurrentUser } from '@/features/authSlice'
import { RootState } from '@reduxjs/toolkit/query'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const GateKeeper: React.FC = () => {
  const token = useSelector(selectCurrentToken) //make sure that if i have token avilable i should have the user's obj as well
  const user = useSelector(selectCurrentUser)
  const location = useLocation();
  console.log("gatekeeper", token.accessToken)
  return (
    token?.accessToken && user.userInfo !== undefined ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default GateKeeper
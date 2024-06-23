import { selectCurrentToken } from '@/features/authSlice';
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const GateKeeper: React.FC = () => {
  //  const token =useSelector(selectCurrentToken) //make sure that if i have token avilable i should have the user's obj as well
  // const {userInfo} = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken);


  const location = useLocation();
  // console.log("gatekeeper", accessToken, userInfo)
  return (
    token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />

  )
}

export default GateKeeper
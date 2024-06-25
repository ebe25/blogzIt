import { selectCurrentToken, selectCurrentUser } from '@/features/authSlice';
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AuthRequired: React.FC = () => {
  //  const token =useSelector(selectCurrentToken) //make sure that if i have token avilable i should have the user's obj as well
  // const {userInfo} = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken); 
  const user = useSelector(selectCurrentUser);


  const location = useLocation();
  // console.log("gatekeeper", accessToken, userInfo)
  return (
    token && user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />

  )
}

export default AuthRequired
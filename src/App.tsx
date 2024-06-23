
import NavBar from './components/navbar'
import { Route, Routes } from "react-router-dom";
import LoginPage from './routes/login-page';
import Home from './routes/home';
import RegisterPage from './routes/register-page';
import Dashboard from './routes/dashboard';
import Navbar from './components/navbar';
import Profile from './routes/profile-page';
import Blog from './routes/blog-page';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './lib/api';
import ErrorPage from './routes/error-page';
import GateKeeper from './components/GateKeeper';


function App() {

  return (
    <>

      <Routes>
        <Route index path="/" element={<Home />} errorElement={<ErrorPage/>}/>
        <Route path='/login' element={<LoginPage />}  errorElement={<ErrorPage/>}/>
        <Route path='/register' element={<RegisterPage />} errorElement={<ErrorPage/>}/>
        <Route path='/profile/:userId' element={<Profile />} errorElement={<ErrorPage/>}/> {/**It will be a public route */}
        <Route path="/blogs/:blogId" element={<Blog />} errorElement={<ErrorPage/>}/>

        {/**Has to be a protected route . PRIVATE PROFILE*/}
        <Route element={<GateKeeper />} errorElement={<ErrorPage/>} >
          
          <Route path='/dashboard/:userId' element={<Dashboard />} />
        </Route>
        <Route />
      </Routes>

    </>
  )
}

export default App

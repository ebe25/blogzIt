
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginPage from './routes/login-page';
import Home from './routes/home';
import RegisterPage from './routes/register-page';
import Dashboard from './routes/dashboard';
import Profile from './routes/profile-page';
import Blog from './routes/blog-page';
import ErrorPage from './routes/error-page';
import GateKeeper from './components/GateKeeper';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path='/login' element={<LoginPage />} errorElement={<ErrorPage />} />
      <Route path='/register' element={<RegisterPage />} errorElement={<ErrorPage />} />
      <Route path='/profile/:userId' element={<Profile />} errorElement={<ErrorPage />} /> {/**It will be a public route */}
      <Route path="/blogs/:blogId" element={<Blog />} errorElement={<ErrorPage />} />

      {/**Has to be a protected route . PRIVATE PROFILE*/}
      <Route element={<GateKeeper />} errorElement={<ErrorPage />} >

        <Route path='/dashboard/:userId' element={<Dashboard />} />
      </Route>
      <Route />
    </>
  )
)

function App() {

  return (

    <RouterProvider router={router} />
  )
}

export default App

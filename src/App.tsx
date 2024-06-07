
import NavBar from './components/navbar'
import { Route, Routes } from "react-router-dom";
import LoginPage from './routes/login-page';
import Home from './routes/home';
import RegisterPage from './routes/register-page';
import Dashboard from './routes/dashboard';
import Navbar from './components/navbar';
import Profile from './routes/profile-page';
import Blog from './routes/blog-page';
// import Home from './routes/home';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//     index: true
//   },
//   {
//     path: "contacts/:contactId",
//     element: <Contact />,
//   },
//   {
//     path: "blogs/:id",
//     element: <Blog />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "profile/",
//     element: <Profile />,
//   }, {
//     path: "dashboard/",
//     element: <Dashboard />,
//     errorElement: <ErrorPage />
//   }, {
//     path: "login/",
//     element: <LoginPage />,
//     errorElement: <ErrorPage />
//   }, {
//     path: "register/",
//     element: <RegisterPage />,
//     errorElement: <ErrorPage />
//   }
// ]);

function App() {


  return (
    <>

      <Routes>
          <Route path="/"  element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard/:userId' element={<Dashboard />} /> {/**Has to be a protected route */}
          <Route path='/profile/:userId' element={<Profile />} /> {/**It will be a public route */}
          <Route path="/blogs/:blogId" element={<Blog/>}/>
          <Route path='/register' element={<RegisterPage />} />
        <Route />
      </Routes>
    </>
  )
}

export default App

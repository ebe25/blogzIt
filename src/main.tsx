import React from 'react';
import ReactDOM from 'react-dom/client';

import "./globals.css";
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store.ts';
import GateKeeper from './components/GateKeeper.tsx';
import Blog from './routes/blog-page.tsx';
import Dashboard from './routes/dashboard.tsx';
import ErrorPage from './routes/error-page.tsx';
import LoginPage from './routes/login-page.tsx';
import Profile from './routes/profile-page.tsx';
import RegisterPage from './routes/register-page.tsx';
import Home from './routes/home.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route  index path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path='/login' element={<LoginPage />} errorElement={<ErrorPage />} />
      <Route path='/register' element={<RegisterPage />} errorElement={<ErrorPage />} />
      <Route path='/profile/:userId' element={<Profile />} errorElement={<ErrorPage />} /> {/**It will be a public route */}
      < Route path="/blogs/:blogId" element={< Blog />} errorElement={< ErrorPage />} />

      {/**Has to be a protected route . PRIVATE PROFILE*/}
      <Route element={<GateKeeper />} errorElement={<ErrorPage />} >

        <Route path='/dashboard/:userId' element={<Dashboard />} />
      </Route>
      <Route /></>

  ))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <TooltipProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </TooltipProvider>





  </React.StrictMode>,
)

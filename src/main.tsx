import React from 'react';
import ReactDOM from 'react-dom/client';

import "./globals.css";
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster />
      <TooltipProvider>
        <App />
      </TooltipProvider>

    </BrowserRouter>




  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';

import "./globals.css";
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'

// const queryClient = new QueryClient()
import { Provider } from 'react-redux';
import { store } from './store.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster />
      <TooltipProvider>
        {/* <QueryClientProvider client={queryClient}> */}
        <Provider store={store}>
          <App />
        </Provider>
        {/* </QueryClientProvider> */}
      </TooltipProvider>

    </BrowserRouter>




  </React.StrictMode>,
)

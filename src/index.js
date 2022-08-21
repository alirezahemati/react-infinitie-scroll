import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppLoader from './components/common/AppLoader';

import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <React.Suspense fallback={<AppLoader />}>
          <App />
        </React.Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

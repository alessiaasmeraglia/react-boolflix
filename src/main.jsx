import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './index.css';

import GlobalProvider from "./contexts/GlobalProvider.jsx";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
);

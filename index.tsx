import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initGA } from './analytics';
import { HelmetProvider } from 'react-helmet-async';

initGA();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
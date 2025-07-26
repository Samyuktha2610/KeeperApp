import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { HashRouter } from 'react-router-dom'; // ✅ Use HashRouter
import './styles.css'; // ✅ Or adjust to your actual path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

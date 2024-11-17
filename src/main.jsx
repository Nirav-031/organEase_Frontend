import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
import Dashboard from './components/Dashboard.jsx';
import { Provider } from 'react-redux';
import { store } from './reduxStore/store.js';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const express = require('express');
const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/cars');

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/cars', carRoutes);

app.listen(5000, () => console.log('Backend running on port 5000'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

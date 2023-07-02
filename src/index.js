// node modules import
import React from 'react' // core react library
import ReactDOM from 'react-dom/client' // react package for working with the DOM
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// custom imports

import './index.css' // projectwise css
import App from './App' // importing app component
import reportWebVitals from './reportWebVitals' // analytics purpose

// finding div with id root and selecting it for DOM manipulation

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';



// Global CSS imports from the assets folder
// import './assets/css/bootstrap.min.css'; // Bootstrap
// import './assets/css/fontawesome-all.min.css'; // FontAwesome
// import './assets/css/swiper.min.css'; // Swiper
// import './assets/css/lightcase.css'; // Lightcase
// import './assets/css/odometer.css'; // Odometer
// import './assets/css/icomoon.css'; // Icomoon
// import './assets/css/line-awesome.min.css'; // Line-awesome
// import './assets/css/animate.css'; // Animate.css
// import './assets/css/aos.css'; // AOS.css
// import './assets/css/nice-select.css'; // Nice Select
import './assets/css/style.css'; // Your main stylesheet

// REMAINING
// Odometer

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </StrictMode>,
)

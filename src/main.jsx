import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './screens/client/LogIn/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'typeface-poppins';
// import Landing from './screens/client/Landing/Landing.jsx'
// import SignUp from './screens/client/SignUp/SignUp.jsx'
// import ViewProducts from './screens/client/ViewProducts/ViewProducts.jsx'
// import Contact from './screens/client/Contact/Contact.jsx';
// import RentNow from './screens/client/RentNow/RentNow.jsx';
// import ProductDetails from './screens/client/ProductDetails/ProductDetails.jsx';
// import Dashboard from './screens/admin/Dashboard.jsx';

const role = "client"//admin

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          {/* <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Landing />} />
          <Route path="products" element={<ViewProducts />} />
          <Route path="buyproduct/:id" element={<RentNow />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)

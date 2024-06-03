import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import JoinUs from './components/JoinUs'
import Appointment from './components/Appointment'
import Profile from './components/Profile'
import Error404 from './components/Error404'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/doctors-appointment" element={<Appointment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

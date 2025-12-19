import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage.jsx'
import PricePage from '../pages/Price/PricePage.jsx'
import ContactPage from '../pages/Contact/ContactPage.jsx'
import AboutPage from '../pages/About/AboutPage.jsx'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/price" element={<PricePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />

        </Routes>
    )
}
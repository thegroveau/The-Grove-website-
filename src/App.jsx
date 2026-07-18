import { Routes, Route } from 'react-router-dom'
import AnnouncementBar from './components/layout/AnnouncementBar.jsx'
import Navigation from './components/layout/Navigation.jsx'
import Footer from './components/layout/Footer.jsx'
import CartDrawer from './components/layout/CartDrawer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Membership from './pages/Membership.jsx'
import TrainingCampsPage from './pages/TrainingCamps.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import Collection from './pages/Collection.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-earth">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navigation />
      </div>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/membership" element={<Membership />} />
          <Route path="/pages/training-camps" element={<TrainingCampsPage />} />
          <Route path="/pages/faq" element={<FAQ />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/collections/:handle" element={<Collection />} />
          <Route path="/products/:handle" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  )
}

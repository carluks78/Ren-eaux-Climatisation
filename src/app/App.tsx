import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { FloatingCTAs } from './components/FloatingCTAs'
import { Home } from './components/pages/Home'
import { Installation } from './components/pages/Installation'
import { Depannage } from './components/pages/Depannage'
import { Maintenance } from './components/pages/Maintenance'
import { PompeAChaleur } from './components/pages/PompeAChaleur'
import { Gainable } from './components/pages/Gainable'
import { VRVVRF } from './components/pages/VRVVRF'
import { Professionnelle } from './components/pages/Professionnelle'
import { Industrielle } from './components/pages/Industrielle'
import { Zones } from './components/pages/Zones'
import { Realisations } from './components/pages/Realisations'
import { Avis } from './components/pages/Avis'
import { APropos } from './components/pages/APropos'
import { Contact } from './components/pages/Contact'
import { DepannageRGEMantes } from './components/pages/DepannageRGEMantes'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/installation-climatisation" element={<Installation />} />
            <Route path="/depannage-climatisation" element={<Depannage />} />
            <Route path="/maintenance-climatisation" element={<Maintenance />} />
            <Route path="/pompe-a-chaleur" element={<PompeAChaleur />} />
            <Route path="/climatisation-gainable" element={<Gainable />} />
            <Route path="/vrv-vrf" element={<VRVVRF />} />
            <Route path="/climatisation-professionnelle" element={<Professionnelle />} />
            <Route path="/climatisation-industrielle" element={<Industrielle />} />
            <Route path="/zones-intervention" element={<Zones />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/avis-clients" element={<Avis />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/depannage-climatisation-rge-mantes-la-jolie" element={<DepannageRGEMantes />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTAs />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

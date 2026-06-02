import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'


const services = [
  { label: 'Installation Climatisation', href: '/installation-climatisation' },
  { label: 'Dépannage Climatisation', href: '/depannage-climatisation' },
  { label: 'Maintenance Climatisation', href: '/maintenance-climatisation' },
  { label: 'Pompe à Chaleur', href: '/pompe-a-chaleur' },
  { label: 'Climatisation Gainable', href: '/climatisation-gainable' },
  { label: 'Systèmes VRV / VRF', href: '/vrv-vrf' },
  { label: 'Climatisation Professionnelle', href: '/climatisation-professionnelle' },
  { label: 'Climatisation Industrielle', href: '/climatisation-industrielle' },
]

const navLinks = [
  { label: 'Zones', href: '/zones-intervention' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Avis', href: '/avis-clients' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [location])

  const navStyle = (isActive: boolean): React.CSSProperties => ({
    color: isActive ? '#06B6D4' : '#CBD5E1',
    textDecoration: 'none',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    fontSize: '0.875rem',
    transition: 'color 0.2s',
    fontWeight: isActive ? '600' : '400',
  })

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(15,23,42,0.97)' : '#0F172A',
      backdropFilter: 'blur(12px)',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: '1px solid rgba(6,182,212,0.15)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <img
  src="/logo-og.png"
  alt="REN'EAUX Climatisation Mantes-la-Jolie"
  style={{ height: '40px', width: '40px', borderRadius: '8px', objectFit: 'cover' }}
/>
            <div>
              <div style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                REN'EAUX
              </div>
              <div style={{ color: '#06B6D4', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1 }}>
                Expert Climatisation
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="rn-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
            <NavLink to="/" end style={({ isActive }) => navStyle(isActive)}>Accueil</NavLink>

            <div style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              <button style={{
                display: 'flex', alignItems: 'center', gap: '0.3rem',
                color: '#CBD5E1', background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.5rem 0.75rem', borderRadius: '6px', fontSize: '0.875rem',
              }}>
                Services <ChevronDown size={13} />
              </button>
              {servicesOpen && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0,
                  background: '#0F172A', border: '1px solid rgba(6,182,212,0.25)',
                  borderRadius: '12px', padding: '0.5rem', minWidth: '265px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.6)', zIndex: 1001, marginTop: '4px',
                }}>
                  {services.map(s => (
                    <NavLink key={s.href} to={s.href} style={({ isActive }) => ({
                      display: 'block', color: isActive ? '#06B6D4' : '#CBD5E1',
                      textDecoration: 'none', padding: '0.55rem 0.85rem',
                      borderRadius: '8px', fontSize: '0.85rem',
                      background: isActive ? 'rgba(6,182,212,0.1)' : 'transparent',
                      transition: 'all 0.15s',
                    })}>{s.label}</NavLink>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map(l => (
              <NavLink key={l.href} to={l.href} style={({ isActive }) => navStyle(isActive)}>{l.label}</NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="rn-desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="tel:0767060524" style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              color: '#22C55E', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '700',
            }}>
              <Phone size={15} /> 07 67 06 05 24
            </a>
            <Link to="/contact" style={{
              background: 'linear-gradient(135deg, #1E40AF 0%, #06B6D4 100%)',
              color: '#fff', textDecoration: 'none', padding: '0.55rem 1.1rem',
              borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600',
              boxShadow: '0 4px 15px rgba(6,182,212,0.3)',
            }}>Devis gratuit</Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="rn-hamburger" style={{
            background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.5rem', display: 'none',
          }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: '#0F172A', borderTop: '1px solid rgba(6,182,212,0.15)',
          padding: '1rem 1.5rem 1.5rem', maxHeight: '80vh', overflowY: 'auto',
        }}>
          <NavLink to="/" end style={{ display: 'block', color: '#94A3B8', textDecoration: 'none', padding: '0.7rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem' }}>Accueil</NavLink>
          <div style={{ padding: '0.7rem 0 0.3rem', color: '#06B6D4', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Services</div>
          {services.map(s => (
            <NavLink key={s.href} to={s.href} style={{ display: 'block', color: '#94A3B8', textDecoration: 'none', padding: '0.6rem 0 0.6rem 0.75rem', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: '0.875rem' }}>{s.label}</NavLink>
          ))}
          {navLinks.map(l => (
            <NavLink key={l.href} to={l.href} style={{ display: 'block', color: '#94A3B8', textDecoration: 'none', padding: '0.7rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem' }}>{l.label}</NavLink>
          ))}
          <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <a href="tel:0767060524" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              background: '#22C55E', color: '#fff', textDecoration: 'none',
              padding: '0.9rem', borderRadius: '10px', fontWeight: '700', fontSize: '1rem',
            }}><Phone size={18} /> 07 67 06 05 24</a>
            <a href="https://wa.me/33767060524?text=Bonjour%20REN'EAUX%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20une%20climatisation%20ou%20une%20pompe%20%C3%A0%20chaleur."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                background: 'linear-gradient(135deg, #1E40AF, #06B6D4)', color: '#fff',
                textDecoration: 'none', padding: '0.9rem', borderRadius: '10px', fontWeight: '600',
              }}>Demander un devis gratuit</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .rn-desktop-nav { display: none !important; }
          .rn-desktop-cta { display: none !important; }
          .rn-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  )
}

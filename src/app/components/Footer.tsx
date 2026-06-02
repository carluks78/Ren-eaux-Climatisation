import { Link } from 'react-router'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import logoImage from '../../imports/Capture_d_e_cran_2026-06-02_a__12.37.33.png'

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

const zones = [
  { label: 'Limay (78)', href: '/zones-intervention#limay' },
  { label: 'Mantes-la-Jolie', href: '/zones-intervention#mantes-la-jolie' },
  { label: 'Les Mureaux', href: '/zones-intervention#les-mureaux' },
  { label: 'Poissy', href: '/zones-intervention#poissy' },
  { label: 'Versailles', href: '/zones-intervention#versailles' },
  { label: 'Évreux (27)', href: '/zones-intervention#evreux' },
  { label: 'Vernon', href: '/zones-intervention#vernon' },
  { label: 'Paris & IDF', href: '/zones-intervention#paris' },
]

const pages = [
  { label: 'Accueil', href: '/' },
  { label: 'Zones d\'intervention', href: '/zones-intervention' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Avis Clients', href: '/avis-clients' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#0F172A', color: '#94A3B8', borderTop: '1px solid rgba(6,182,212,0.2)' }}>
      {/* Main footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3.5rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <img src={logoImage} alt="Logo REN'EAUX" style={{ height: '40px', width: '40px', borderRadius: '8px', objectFit: 'cover' }} />
              <div>
                <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '800' }}>REN'EAUX</div>
                <div style={{ color: '#06B6D4', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Expert Climatisation</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Technicien spécialisé en installation, dépannage et maintenance de climatisation et pompes à chaleur dans les Yvelines, l'Eure et toute l'Île-de-France.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="tel:0767060524" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: '#22C55E', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '700',
              }}>
                <Phone size={15} /> 07 67 06 05 24
              </a>
              <a href="mailto:reneau.idf@gmail.com" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem',
              }}>
                <Mail size={15} /> reneau.idf@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                <MapPin size={15} color="#06B6D4" />
                Limay • Yvelines (78) • Eure (27) • IDF
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                <Clock size={15} color="#22C55E" />
                Lun–Sam : 8h–19h | Urgences 7j/7
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Nos Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {services.map(s => (
                <li key={s.href}>
                  <Link to={s.href} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#06B6D4')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Zones d'Intervention
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {zones.map(z => (
                <li key={z.href}>
                  <Link to={z.href} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.85rem' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#06B6D4')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>
                    {z.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages + CTA */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Informations
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
              {pages.map(p => (
                <li key={p.href}>
                  <Link to={p.href} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.85rem' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#06B6D4')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="tel:0767060524" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                background: '#22C55E', color: '#fff', textDecoration: 'none',
                padding: '0.7rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '700',
              }}><Phone size={15} /> Appeler maintenant</a>
              <a href="https://wa.me/33767060524?text=Bonjour%20REN'EAUX%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20une%20climatisation%20ou%20une%20pompe%20%C3%A0%20chaleur."
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  background: 'linear-gradient(135deg, #1E40AF, #06B6D4)', color: '#fff',
                  textDecoration: 'none', padding: '0.7rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600',
                }}>Devis WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.25rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem' }}>
          <span>© {year} REN'EAUX — Tous droits réservés | SIRET : en cours d'enregistrement</span>
          <span style={{ color: '#475569' }}>
            Certifié RGE • Installateur agréé • Yvelines (78) • Eure (27) • Île-de-France
          </span>
        </div>
      </div>
    </footer>
  )
}

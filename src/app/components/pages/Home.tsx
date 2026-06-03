import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  Phone, CheckCircle, Star, MapPin, Zap, Shield, Clock, Award,
  Thermometer, Wrench, Settings, Building2, Factory, ChevronRight, Wind,
} from 'lucide-react'
import acImage from '../../../imports/Capture_d_e_cran_2026-06-01_a__23.55.55.png'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const services = [
  { icon: <Wrench size={28} />, title: 'Installation Climatisation', desc: 'Pose de climatisation split, multi-split et gainable par un technicien certifié à Limay et dans les Yvelines.', href: '/installation-climatisation', color: '#1E40AF' },
  { icon: <Zap size={28} />, title: 'Dépannage Climatisation', desc: 'Intervention rapide pour tout dépannage climatisation dans les Yvelines (78), l\'Eure (27) et l\'Île-de-France.', href: '/depannage-climatisation', color: '#06B6D4' },
  { icon: <Settings size={28} />, title: 'Maintenance & Entretien', desc: 'Contrat entretien climatisation pour garantir performance et longévité de votre installation.', href: '/maintenance-climatisation', color: '#22C55E' },
  { icon: <Thermometer size={28} />, title: 'Pompe à Chaleur', desc: 'Installation et entretien de pompes à chaleur air/air et air/eau à Limay et Yvelines.', href: '/pompe-a-chaleur', color: '#F59E0B' },
  { icon: <Wind size={28} />, title: 'Climatisation Gainable', desc: 'Système gainable invisible et discret pour une climatisation totale de votre maison ou local.', href: '/climatisation-gainable', color: '#8B5CF6' },
  { icon: <Building2 size={28} />, title: 'VRV / VRF', desc: 'Systèmes VRV et VRF pour immeubles, commerces et bâtiments tertiaires dans les Yvelines.', href: '/vrv-vrf', color: '#EC4899' },
  { icon: <Building2 size={28} />, title: 'Climatisation Professionnelle', desc: 'Solutions climatisation pour bureaux, commerces et locaux professionnels en Île-de-France.', href: '/climatisation-professionnelle', color: '#06B6D4' },
  { icon: <Factory size={28} />, title: 'Climatisation Industrielle', desc: 'Grandes puissances, salles serveurs, entrepôts : nous maîtrisons toutes les configurations industrielles.', href: '/climatisation-industrielle', color: '#1E40AF' },
]

const stats = [
  { value: '500+', label: 'Installations réalisées' },
  { value: '15+', label: 'Années d\'expérience' },
  { value: '4.9/5', label: 'Note clients Google' },
  { value: '24h', label: 'Délai intervention moyen' },
]

const avantages = [
  { icon: <Award size={22} />, title: 'Certifié RGE', desc: 'Éligible aux aides de l\'État pour votre pompe à chaleur' },
  { icon: <Clock size={22} />, title: 'Réactivité maximale', desc: 'Intervention sous 24h dans les Yvelines et l\'Eure' },
  { icon: <Shield size={22} />, title: 'Garantie décennale', desc: 'Toutes nos installations sont couvertes et assurées' },
  { icon: <Star size={22} />, title: 'Expertise reconnue', desc: 'Spécialiste des marques Daikin, Mitsubishi, Atlantic, Fujitsu' },
  { icon: <CheckCircle size={22} />, title: 'Diagnostic gratuit', desc: 'Devis sans engagement pour tout projet de climatisation' },
  { icon: <MapPin size={22} />, title: 'Local & disponible', desc: 'Basé à Limay, disponible dans tout le 78 et le 27' },
]

const faqs = [
  { q: 'Quel est le coût d\'une installation climatisation à Limay ?', a: 'Le prix d\'une installation climatisation à Limay varie de 1 500 € à 4 500 € selon le type de système (split, multi-split, gainable) et la superficie. Contactez REN\'EAUX pour un devis gratuit et personnalisé.' },
  { q: 'Intervenez-vous en urgence pour une climatisation en panne ?', a: 'Oui, REN\'EAUX intervient en urgence pour tout dépannage climatisation dans les Yvelines (78), l\'Eure (27) et toute l\'Île-de-France. Appelez le 07 67 06 05 24 pour une intervention rapide.' },
  { q: 'Quelle marque de climatisation recommandez-vous ?', a: 'Nous installons et entretenons les marques leaders : Daikin, Mitsubishi Electric, Atlantic, Fujitsu, LG et Panasonic. Nous vous conseillons la solution la mieux adaptée à votre logement et votre budget.' },
  { q: 'Une pompe à chaleur est-elle éligible aux aides de l\'État ?', a: 'Oui. En tant que technicien certifié RGE, REN\'EAUX vous permet d\'accéder à MaPrimeRénov\', l\'éco-PTZ et la TVA à 5,5 % pour l\'installation de votre pompe à chaleur.' },
  { q: 'Quelle est la différence entre un split et un multi-split ?', a: 'Un split simple relie une unité extérieure à une seule unité intérieure. Un multi-split permet de connecter plusieurs unités intérieures à une seule unité extérieure, idéal pour climatiser plusieurs pièces à coût réduit.' },
]

const temoignages = [
  { name: 'Marie L.', ville: 'Limay (78)', note: 5, texte: 'Intervention rapide pour la pose de notre climatisation split. Travail soigné, technicien très professionnel. Je recommande vivement REN\'EAUX !', },
  { name: 'Pierre D.', ville: 'Mantes-la-Jolie', note: 5, texte: 'Dépannage de notre clim en plein été en moins de 24h. Tarif correct et technicien compétent. Super expérience.', },
  { name: 'Sylvie M.', ville: 'Les Mureaux', note: 5, texte: 'Installation pompe à chaleur réalisée avec soin. REN\'EAUX nous a accompagnés pour les aides MaPrimeRénov\'. Très satisfaite !', },
]

export function Home() {
  useEffect(() => {
    document.title = "REN'EAUX - Climatisation Limay | Installateur Climatisation Yvelines 78"
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'REN\'EAUX, expert en installation, dépannage et maintenance climatisation à Limay et dans les Yvelines (78). Pompe à chaleur, climatisation gainable, VRV/VRF. Devis gratuit. ☎ 07 67 06 05 24')
    const schema = {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      "name": "REN'EAUX",
      "description": "Expert en installation, dépannage et maintenance climatisation à Limay, Yvelines, Eure et Île-de-France",
      "telephone": "0767060524",
      "email": "reneau.idf@gmail.com",
      "url": "https://reneaux-climatisation.fr",
      "address": { "@type": "PostalAddress", "addressLocality": "Limay", "postalCode": "78520", "addressCountry": "FR" },
      "areaServed": ["Limay", "Yvelines", "Eure", "Île-de-France"],
      "priceRange": "€€",
      "openingHours": "Mo-Sa 08:00-19:00",
      "sameAs": [],
    }
    let s = document.getElementById('schema-local')
    if (!s) { s = document.createElement('script'); s.id = 'schema-local'; s.setAttribute('type', 'application/ld+json'); document.head.appendChild(s) }
    s.textContent = JSON.stringify(schema)
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>

      {/* ===== HERO ===== */}
      <section style={{
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundImage: `url(${acImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center right',
}}>
        {/* Overlay dégradé : bleu opaque à gauche, transparent à droite */}
<div style={{
  position: 'absolute', inset: 0,
  background: 'linear-gradient(to right, rgba(15,23,42,0.97) 0%, rgba(15,23,42,0.92) 30%, rgba(15,23,42,0.7) 55%, rgba(15,23,42,0.2) 80%, rgba(15,23,42,0.0) 100%)',
  zIndex: 1,
}} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem', width: '100%', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="rn-hero-grid">
            {/* Left content */}
            <motion.div {...fadeUp}>
              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)',
                borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.5rem',
                color: '#06B6D4', fontSize: '0.8rem', fontWeight: '600',
              }}>
                <MapPin size={13} /> Expert Climatisation — Limay · Yvelines · Île-de-France
              </div>

              <h1 style={{
                color: '#FFFFFF', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '900',
                lineHeight: 1.15, marginBottom: '1.25rem', letterSpacing: '-0.02em',
              }}>
                Installateur Climatisation<br />
                <span style={{ background: 'linear-gradient(135deg, #06B6D4, #1E40AF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  à Limay & Yvelines
                </span>
              </h1>

              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '520px' }}>
                <strong style={{ color: '#CBD5E1' }}>REN'EAUX</strong> — Technicien spécialisé en{' '}
                <Link to="/installation-climatisation" style={{ color: '#06B6D4', textDecoration: 'none' }}>installation de climatisation</Link>,{' '}
                <Link to="/depannage-climatisation" style={{ color: '#06B6D4', textDecoration: 'none' }}>dépannage</Link>,{' '}
                <Link to="/maintenance-climatisation" style={{ color: '#06B6D4', textDecoration: 'none' }}>maintenance</Link> et{' '}
                <Link to="/pompe-a-chaleur" style={{ color: '#06B6D4', textDecoration: 'none' }}>pompe à chaleur</Link>{' '}
                dans les Yvelines (78), l'Eure (27) et toute l'Île-de-France.
                Devis gratuit — Intervention sous 24h.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                <a href="tel:0767060524" style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  background: '#22C55E', color: '#fff', textDecoration: 'none',
                  padding: '0.9rem 1.75rem', borderRadius: '10px', fontWeight: '700', fontSize: '1rem',
                  boxShadow: '0 4px 20px rgba(34,197,94,0.4)',
                }}>
                  <Phone size={19} /> Appeler maintenant
                </a>
                <Link to="/contact" style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#fff', textDecoration: 'none',
                  padding: '0.9rem 1.75rem', borderRadius: '10px', fontWeight: '600', fontSize: '1rem',
                }}>
                  Devis gratuit <ChevronRight size={18} />
                </Link>
              </div>

              {/* Trust signals */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {['✓ Certifié RGE', '✓ Devis gratuit', '✓ Intervention 24h', '✓ Garantie décennale'].map(t => (
                  <span key={t} style={{ color: '#94A3B8', fontSize: '0.82rem' }}>{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(6,182,212,0.2)',
                borderRadius: '24px',
                padding: '1.5rem',
                boxShadow: '0 30px 80px rgba(0,0,0,0.4), 0 0 60px rgba(6,182,212,0.08)',
              }}>
                
                {/* Floating badge */}
                <div style={{
                  position: 'absolute', bottom: '-1rem', left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #1E40AF, #06B6D4)',
                  borderRadius: '50px', padding: '0.6rem 1.5rem',
                  color: '#fff', fontSize: '0.85rem', fontWeight: '700',
                  whiteSpace: 'nowrap', boxShadow: '0 8px 25px rgba(6,182,212,0.4)',
                }}>
                  
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section style={{ background: '#F8FAFC', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {stats.map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  textAlign: 'center', padding: '2rem 1rem',
                  background: '#fff', borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(6,182,212,0.1)',
                }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0F172A', background: 'linear-gradient(135deg, #1E40AF, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                <div style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '0.25rem' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nos Expertises</div>
            <h2 style={{ color: '#0F172A', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '800', marginBottom: '1rem' }}>
              Services de Climatisation à Limay & Yvelines
            </h2>
            <p style={{ color: '#64748B', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              Du particulier au professionnel, REN'EAUX maîtrise toutes les technologies de climatisation et pompe à chaleur dans les Yvelines (78), l'Eure (27) et l'Île-de-France.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}>
                <Link to={s.href} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    background: '#F8FAFC', borderRadius: '16px', padding: '1.75rem',
                    border: '1px solid rgba(0,0,0,0.06)',
                    transition: 'all 0.3s', cursor: 'pointer', height: '100%',
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.transform = 'translateY(-4px)'
                      el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'
                      el.style.borderColor = s.color
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.transform = 'translateY(0)'
                      el.style.boxShadow = 'none'
                      el.style.borderColor = 'rgba(0,0,0,0.06)'
                    }}>
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '12px',
                      background: `${s.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: s.color, marginBottom: '1rem',
                    }}>
                      {s.icon}
                    </div>
                    <h3 style={{ color: '#0F172A', fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem' }}>{s.title}</h3>
                    <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.6 }}>{s.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: s.color, fontSize: '0.85rem', fontWeight: '600', marginTop: '1rem' }}>
                      En savoir plus <ChevronRight size={15} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section style={{ background: '#0F172A', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Pourquoi choisir REN'EAUX ?</div>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '800' }}>
              L'expert climatisation de confiance dans les Yvelines
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {avantages.map((a, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6,182,212,0.15)',
                  borderRadius: '16px', padding: '1.75rem',
                }}>
                <div style={{ color: '#06B6D4', marginBottom: '0.75rem' }}>{a.icon}</div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '700', marginBottom: '0.4rem' }}>{a.title}</h3>
                <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.6 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TÉMOIGNAGES ===== */}
      <section style={{ background: '#F8FAFC', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Avis Clients</div>
            <h2 style={{ color: '#0F172A', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '800' }}>
              Ce que disent nos clients
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {temoignages.map((t, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: '#fff', borderRadius: '16px', padding: '1.75rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}>
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.75rem' }}>
                  {[...Array(t.note)].map((_, j) => <Star key={j} size={16} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem', fontStyle: 'italic' }}>"{t.texte}"</p>
                <div>
                  <div style={{ color: '#0F172A', fontWeight: '700', fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>{t.ville}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/avis-clients" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: '#1E40AF', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem',
            }}>Voir tous les avis clients <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ===== ZONES ===== */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div {...fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="rn-hero-grid">
            <div>
              <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Zone d'Intervention</div>
              <h2 style={{ color: '#0F172A', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '800', marginBottom: '1rem' }}>
                Climatisation Limay, Yvelines & Île-de-France
              </h2>
              <p style={{ color: '#64748B', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                REN'EAUX intervient pour l'installation, le dépannage et la maintenance climatisation dans tout le département des Yvelines (78), l'Eure (27) et l'ensemble de l'Île-de-France.
                Basé à <strong>Limay</strong>, nous couvrons Mantes-la-Jolie, Les Mureaux, Poissy, Versailles, Évreux, Vernon, Paris et bien plus encore.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {['Limay', 'Mantes-la-Jolie', 'Les Mureaux', 'Poissy', 'Versailles', 'Saint-Germain-en-Laye', 'Évreux', 'Vernon', 'Paris', 'Île-de-France'].map(z => (
                  <span key={z} style={{
                    background: '#F8FAFC', border: '1px solid rgba(6,182,212,0.3)',
                    color: '#0F172A', padding: '0.35rem 0.85rem', borderRadius: '50px', fontSize: '0.8rem',
                  }}>{z}</span>
                ))}
              </div>
              <Link to="/zones-intervention" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'linear-gradient(135deg, #1E40AF, #06B6D4)',
                color: '#fff', textDecoration: 'none',
                padding: '0.85rem 1.75rem', borderRadius: '10px', fontWeight: '600',
              }}>Voir ma zone <ChevronRight size={16} /></Link>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #0F172A, #1E3A5F)',
              borderRadius: '20px', padding: '2.5rem',
              border: '1px solid rgba(6,182,212,0.2)',
            }}>
              <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '700', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Contactez-nous</div>
              <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem' }}>Devis gratuit & sans engagement</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Obtenez votre devis de climatisation ou pompe à chaleur sous 24h. Diagnostic offert.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="tel:0767060524" style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  background: '#22C55E', color: '#fff', textDecoration: 'none',
                  padding: '0.9rem 1.25rem', borderRadius: '10px', fontWeight: '700',
                }}><Phone size={18} /> 07 67 06 05 24</a>
                <Link to="/contact" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  color: '#fff', textDecoration: 'none',
                  padding: '0.9rem 1.25rem', borderRadius: '10px', fontWeight: '600',
                }}>Formulaire de contact</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== MANTES-LA-JOLIE RGE ===== */}
<section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
    
    <h2 style={{
      textAlign: 'center',
      color: '#0F172A',
      fontSize: '2rem',
      fontWeight: '800',
      marginBottom: '1rem'
    }}>
      Climatisation RGE à Mantes-la-Jolie
    </h2>

    <p style={{
      textAlign: 'center',
      color: '#64748B',
      maxWidth: '700px',
      margin: '0 auto 3rem'
    }}>
      Découvrez nos prestations de climatisation certifiées RGE à
      Mantes-la-Jolie.
    </p>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: '1.5rem'
    }}>

      <Link
        to="/climatisation-rge-mantes-la-jolie"
        style={{ textDecoration: 'none' }}
      >
        <div className="seo-card">
          <h3>Installation Climatisation RGE</h3>
          <p>
            Installation de climatisation réversible à Mantes-la-Jolie.
          </p>
        </div>
      </Link>

      <Link
        to="/entretien-climatisation-rge-mantes-la-jolie"
        style={{ textDecoration: 'none' }}
      >
        <div className="seo-card">
          <h3>Entretien Climatisation RGE</h3>
          <p>
            Contrat d'entretien et maintenance de climatisation.
          </p>
        </div>
      </Link>

      <Link
        to="/depannage-climatisation-rge-mantes-la-jolie"
        style={{ textDecoration: 'none' }}
      >
        <div className="seo-card">
          <h3>Dépannage Climatisation RGE</h3>
          <p>
            Intervention rapide sur tout type de climatisation.
          </p>
        </div>
      </Link>

    </div>
  </div>
</section>

      {/* ===== FAQ ===== */}
      <section style={{ background: '#F8FAFC', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>FAQ</div>
            <h2 style={{ color: '#0F172A', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '800' }}>
              Questions fréquentes — Climatisation Yvelines
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  background: '#fff', borderRadius: '14px', padding: '1.5rem',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)',
                }}>
                <h3 style={{ color: '#0F172A', fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem' }}>{f.q}</h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 50%, #06B6D4 100%)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '900', marginBottom: '1rem' }}>
              Besoin d'un installateur climatisation à Limay ?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              REN'EAUX vous répond dans la journée et intervient sous 24h dans les Yvelines, l'Eure et toute l'Île-de-France.
              Diagnostic gratuit. Devis sans engagement.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <a href="tel:0767060524" style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                background: '#22C55E', color: '#fff', textDecoration: 'none',
                padding: '1rem 2rem', borderRadius: '12px', fontWeight: '700', fontSize: '1.05rem',
                boxShadow: '0 4px 20px rgba(34,197,94,0.4)',
              }}><Phone size={20} /> Appeler maintenant</a>
              <Link to="/contact" style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
                color: '#fff', textDecoration: 'none',
                padding: '1rem 2rem', borderRadius: '12px', fontWeight: '600', fontSize: '1.05rem',
              }}>Devis gratuit en ligne</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .rn-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

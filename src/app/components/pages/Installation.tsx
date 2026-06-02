import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, CheckCircle, ChevronRight, Wrench, Star, Shield, Clock, Zap } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const types = [
  { title: 'Climatisation Split Murale', desc: 'L\'option la plus répandue pour une seule pièce. Discret, silencieux et économique, le split mural convient parfaitement aux chambres, séjours et bureaux. Installation rapide par REN\'EAUX à Limay.', link: null },
  { title: 'Climatisation Multi-Split', desc: 'Plusieurs unités intérieures reliées à une seule unité extérieure. Idéal pour climatiser plusieurs pièces sans multiplier les groupes extérieurs. Solution plébiscitée dans les Yvelines.', link: null },
  { title: 'Climatisation Gainable', desc: 'Système invisible intégré dans les combles ou faux-plafonds. Toutes les pièces sont climatisées via des gaines sans aucun appareil visible. Confort maximal.', link: '/climatisation-gainable' },
  { title: 'Pompe à Chaleur Air/Air', desc: 'Chauffage et climatisation réversible en un seul système. La pompe à chaleur air/air permet de chauffer en hiver et de rafraîchir en été avec un rendement exceptionnel.', link: '/pompe-a-chaleur' },
]

const etapes = [
  { num: '01', title: 'Visite technique gratuite', desc: 'REN\'EAUX se déplace chez vous à Limay ou dans les Yvelines pour évaluer votre logement, vos besoins et vous conseiller la meilleure solution de climatisation.' },
  { num: '02', title: 'Devis détaillé sous 24h', desc: 'Vous recevez un devis complet, sans surprise, incluant la fourniture, la pose, les raccordements électriques et le passage des fluides frigorigènes.' },
  { num: '03', title: 'Installation par nos techniciens', desc: 'Nos techniciens certifiés réalisent la pose dans les règles de l\'art, avec câblage électrique, raccordement des frigorènes et test de mise en service.' },
  { num: '04', title: 'Mise en service & formation', desc: 'Nous mettons en service votre climatisation et vous formons à l\'utilisation optimale de votre système pour maximiser les économies d\'énergie.' },
]

const faqs = [
  { q: 'Combien de temps dure l\'installation d\'une climatisation ?', a: 'L\'installation d\'un climatiseur split mural dure généralement une demi-journée (3 à 5 heures). Un système multi-split ou gainable peut nécessiter 1 à 2 jours selon la configuration du logement.' },
  { q: 'Faut-il un permis de construire pour installer une climatisation ?', a: 'En général, aucun permis n\'est requis pour un split mural standard. Cependant, si votre logement est en zone protégée ou en copropriété, une déclaration préalable peut être nécessaire. REN\'EAUX vous guide dans les démarches.' },
  { q: 'Quelle puissance de climatisation choisir pour mon logement à Limay ?', a: 'La puissance dépend de la superficie, de l\'isolation et de l\'exposition de votre logement. En général, comptez 1 kW de puissance pour 10 m² bien isolés. REN\'EAUX effectue un calcul précis lors de la visite technique.' },
  { q: 'Installez-vous toutes les marques de climatisation ?', a: 'Oui. REN\'EAUX installe et entretient les principales marques : Daikin, Mitsubishi Electric, Atlantic, Fujitsu, LG, Panasonic, Samsung, Toshiba. Nous vous conseillons la marque adaptée à votre budget et vos besoins.' },
  { q: 'Puis-je bénéficier d\'aides pour l\'installation d\'une climatisation réversible ?', a: 'Oui, sous certaines conditions. Si votre climatisation réversible constitue votre seul système de chauffage, des aides peuvent s\'appliquer. Pour une pompe à chaleur, les aides MaPrimeRénov\' sont disponibles. REN\'EAUX est certifié RGE.' },
]

export function Installation() {
  useEffect(() => {
    document.title = "Installation Climatisation Limay | Poseur Climatisation Yvelines 78 — REN'EAUX"
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Installation Climatisation</span>
          </div>
          <motion.div {...fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.25rem', color: '#06B6D4', fontSize: '0.8rem', fontWeight: '600' }}>
              <Wrench size={13} /> Installation Climatisation
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Installation Climatisation à Limay<br />
              <span style={{ color: '#06B6D4' }}>& dans les Yvelines (78)</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', marginBottom: '2rem' }}>
              REN'EAUX, votre <strong style={{ color: '#CBD5E1' }}>installateur climatisation à Limay</strong> et dans les Yvelines (78).
              Pose de climatisation split, multi-split, gainable et pompe à chaleur pour particuliers et professionnels.
              Devis gratuit — Intervention rapide.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700' }}>
                <Phone size={17} /> 07 67 06 05 24
              </a>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '600' }}>
                Devis gratuit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }} className="rn-content-grid">
            <div>
              <motion.div {...fadeUp}>
                <h2 style={{ color: '#0F172A', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                  Pourquoi faire appel à REN'EAUX pour l'installation de votre climatisation à Limay ?
                </h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  L'<strong>installation d'une climatisation à Limay</strong> nécessite l'intervention d'un technicien qualifié et habilité à manipuler les fluides frigorigènes. REN'EAUX dispose de toutes les certifications requises pour réaliser votre installation dans les Yvelines (78), l'Eure (27) et toute l'Île-de-France.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  Notre expertise couvre l'ensemble des technologies de <strong>climatisation split</strong>, <strong>multi-split</strong>, <strong>gainable</strong> et des <strong>systèmes VRV/VRF</strong> pour les particuliers comme pour les professionnels. Chaque installation est réalisée dans le strict respect des normes en vigueur, avec des matériaux de qualité et des marques reconnues comme Daikin, Mitsubishi Electric ou Atlantic.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '2rem' }}>
                  Basés à <strong>Limay</strong>, nous intervenons rapidement dans toutes les communes des <strong>Yvelines</strong> : Mantes-la-Jolie, Les Mureaux, Poissy, Conflans-Sainte-Honorine, Sartrouville, Versailles, Rambouillet et bien d'autres. Notre réactivité et notre sérieux ont fait notre réputation dans tout le département.
                </p>
              </motion.div>

              <motion.div {...fadeUp}>
                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                  Types d'installation climatisation à Limay
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                  {types.map((t, i) => (
                    <div key={i} style={{ background: '#F8FAFC', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <h3 style={{ color: '#0F172A', fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem' }}>{t.title}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.7 }}>{t.desc}</p>
                      {t.link && <Link to={t.link} style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none' }}>En savoir plus →</Link>}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                  Notre processus d'installation climatisation dans les Yvelines
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                  {etapes.map((e, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                      <div style={{ flexShrink: 0, width: '48px', height: '48px', background: 'linear-gradient(135deg, #1E40AF, #06B6D4)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '0.9rem' }}>{e.num}</div>
                      <div>
                        <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.3rem' }}>{e.title}</h3>
                        <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.7 }}>{e.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>FAQ — Installation Climatisation Limay</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {faqs.map((f, i) => (
                    <div key={i} style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                      <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{f.q}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.7 }}>{f.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '90px' }}>
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(6,182,212,0.2)', marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Devis Gratuit</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>Obtenez votre devis d'installation climatisation à Limay sous 24h.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '700', justifyContent: 'center' }}><Phone size={17} /> 07 67 06 05 24</a>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '600' }}>Formulaire contact</Link>
                </div>
              </div>
              <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '1rem', fontSize: '0.95rem' }}>Nos garanties</h3>
                {[{ icon: <Shield size={16} />, text: 'Garantie décennale' }, { icon: <Star size={16} />, text: 'Technicien certifié RGE' }, { icon: <Clock size={16} />, text: 'Devis sous 24h' }, { icon: <Zap size={16} />, text: 'Intervention rapide' }, { icon: <CheckCircle size={16} />, text: 'Diagnostic gratuit' }].map((g, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#22C55E' }}>{g.icon}</span> {g.text}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Services liés</h3>
                {[{ label: 'Dépannage climatisation', href: '/depannage-climatisation' }, { label: 'Maintenance climatisation', href: '/maintenance-climatisation' }, { label: 'Pompe à chaleur', href: '/pompe-a-chaleur' }, { label: 'Climatisation gainable', href: '/climatisation-gainable' }, { label: 'Systèmes VRV/VRF', href: '/vrv-vrf' }].map(l => (
                  <Link key={l.href} to={l.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1E40AF', textDecoration: 'none', fontSize: '0.875rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <ChevronRight size={14} /> {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .rn-content-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}

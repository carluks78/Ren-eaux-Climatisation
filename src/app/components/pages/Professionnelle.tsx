import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Building2, CheckCircle } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const secteurs = [
  { title: 'Bureaux & Open Spaces', desc: 'Climatisation tertiaire pour bureaux individuels, open spaces et salles de réunion. Confort thermique et productivité des équipes.' },
  { title: 'Commerces & Boutiques', desc: 'Maintien d\'une température optimale pour l\'accueil des clients et la conservation des produits. Installation discrète et performante.' },
  { title: 'Restaurants & CHR', desc: 'Climatisation adaptée aux cuisines professionnelles et salles de restaurant dans les Yvelines. Normes HACCP respectées.' },
  { title: 'Hôtels & Hébergements', desc: 'Systèmes VRV/VRF ou multi-split pour la climatisation individuelle de chaque chambre. Confort guests garanti.' },
  { title: 'Cliniques & Santé', desc: 'Solutions de traitement d\'air et de climatisation pour les établissements de santé. Filtration et qualité d\'air optimale.' },
  { title: 'Entrepôts logistiques', desc: 'Climatisation de grands volumes pour le bien-être des collaborateurs et la protection des marchandises sensibles à la température.' },
]

const faqs = [
  { q: 'Intervenez-vous pour les entreprises dans les Yvelines ?', a: 'Oui. REN\'EAUX est un partenaire de confiance pour les entreprises, commerces, bureaux et professionnels dans les Yvelines (78), l\'Eure (27) et l\'Île-de-France. Nous proposons des contrats adaptés aux besoins professionnels.' },
  { q: 'Proposez-vous des contrats de maintenance pour les professionnels ?', a: 'Oui, REN\'EAUX propose des contrats de maintenance climatisation préventive et curative pour les professionnels. Multi-sites, horaires adaptés, rapport d\'intervention mensuel ou trimestriel.' },
  { q: 'Peut-on installer une climatisation professionnelle sans fermer le commerce ?', a: 'Dans la plupart des cas, oui. REN\'EAUX planifie les interventions en dehors des heures d\'ouverture ou en sections pour minimiser les nuisances. Nous adaptons notre planning à vos contraintes d\'exploitation.' },
  { q: 'Quels systèmes recommandez-vous pour un bureau de 200 m² dans les Yvelines ?', a: 'Pour un bureau de 200 m², nous recommandons généralement un système multi-split ou un petit VRF avec 4 à 8 unités intérieures selon la configuration. REN\'EAUX réalise gratuitement l\'étude thermique pour dimensionner l\'installation optimale.' },
]

export function Professionnelle() {
  useEffect(() => {
    document.title = "Climatisation Professionnelle Yvelines | Climatisation Bureaux Limay — REN'EAUX"
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Climatisation Professionnelle</span>
          </div>
          <motion.div {...fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.25rem', color: '#06B6D4', fontSize: '0.8rem', fontWeight: '600' }}>
              <Building2 size={13} /> Tertiaire · Commercial · Résidentiel collectif
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Climatisation Professionnelle<br />
              <span style={{ color: '#06B6D4' }}>Yvelines (78) — Bureaux, Commerces, CHR</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', marginBottom: '2rem' }}>
              REN'EAUX accompagne les <strong style={{ color: '#CBD5E1' }}>professionnels</strong> dans leurs projets de climatisation tertiaire et commerciale dans les Yvelines, l'Eure et l'Île-de-France. Audit, installation, maintenance — une solution complète.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700' }}>
                <Phone size={17} /> 07 67 06 05 24
              </a>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '600' }}>
                Devis professionnel
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }} className="rn-content-grid">
            <div>
              <motion.div {...fadeUp}>
                <h2 style={{ color: '#0F172A', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Votre partenaire climatisation professionnelle dans les Yvelines</h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  REN'EAUX propose une offre complète de <strong>climatisation professionnelle dans les Yvelines</strong> et l'Île-de-France : audit de vos besoins, dimensionnement de l'installation, pose par des techniciens certifiés et contrats de maintenance préventive adaptés à votre activité.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '2rem' }}>
                  Que vous soyez gérant d'un commerce à Limay, responsable d'un parc immobilier de bureaux dans les Yvelines, ou directeur d'une clinique en Île-de-France, REN'EAUX adapte sa solution de climatisation à vos contraintes techniques, réglementaires et budgétaires.
                </p>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Secteurs d'activité couverts</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {secteurs.map((s, i) => (
                    <div key={i} style={{ background: '#F8FAFC', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <h3 style={{ color: '#0F172A', fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.4rem' }}>{s.title}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Solutions proposées aux professionnels</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.5rem' }}>
                  {['Système multi-split pour bureaux de 50 à 500 m²', 'VRV / VRF pour grands bâtiments tertiaires (voir notre page dédiée)', 'Climatisation gainable pour immeubles de bureaux', 'Contrats de maintenance préventive et curative', 'Dépannage prioritaire sous 24h pour les professionnels', 'Audit énergétique et conseil en optimisation des consommations'].map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle size={16} color="#22C55E" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.5 }}>{s}</span>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>FAQ — Climatisation Professionnelle Yvelines</h2>
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

            <div style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(6,182,212,0.2)' }}>
                <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Devis Pro Gratuit</div>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Audit et devis climatisation professionnelle sous 48h dans les Yvelines.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '700' }}><Phone size={17} /> 07 67 06 05 24</a>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '600' }}>Formulaire pro</Link>
                </div>
              </div>
              <div>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Services liés</h3>
                {[{ label: 'Systèmes VRV / VRF', href: '/vrv-vrf' }, { label: 'Climatisation industrielle', href: '/climatisation-industrielle' }, { label: 'Climatisation gainable', href: '/climatisation-gainable' }, { label: 'Maintenance climatisation', href: '/maintenance-climatisation' }].map(l => (
                  <Link key={l.href} to={l.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1E40AF', textDecoration: 'none', fontSize: '0.875rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <ChevronRight size={14} /> {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .rn-content-grid { grid-template-columns: 1fr !important; } .rn-two-col { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}

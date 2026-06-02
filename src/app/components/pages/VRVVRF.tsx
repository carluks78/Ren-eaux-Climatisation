import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Building2, CheckCircle } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const avantages = [
  'Jusqu\'à 50 unités intérieures sur une seule unité extérieure', 'Gestion individuelle de chaque zone ou pièce', 'Technologie inverter pour des économies d\'énergie maximales', 'Récupération de chaleur entre zones simultanées', 'Monitoring centralisé via BMS ou smartphone', 'Idéal pour hôtels, bureaux, centres commerciaux, cliniques', 'Maintenance simplifiée — diagnostic à distance possible', 'Faibles consommations électriques grâce au compresseur à débit variable'
]

const faqs = [
  { q: 'Quelle est la différence entre VRV et VRF ?', a: 'VRV (Variable Refrigerant Volume) est une marque déposée de Daikin, tandis que VRF (Variable Refrigerant Flow) est le terme générique utilisé par les autres fabricants (Mitsubishi, LG, Samsung...). Les deux technologies sont identiques dans leur fonctionnement.' },
  { q: 'Dans quels types de bâtiments installe-t-on un système VRV/VRF ?', a: 'Les systèmes VRV/VRF sont adaptés aux bâtiments tertiaires et commerciaux : bureaux, hôtels, centres commerciaux, cliniques, écoles, restaurants, immeubles de logements collectifs.' },
  { q: 'REN\'EAUX installe-t-il des systèmes VRV/VRF dans les Yvelines ?', a: 'Oui. REN\'EAUX est spécialisé dans l\'installation et la maintenance de systèmes VRV/VRF pour les professionnels dans les Yvelines (78), l\'Eure (27) et l\'Île-de-France. Contactez-nous pour un audit et un devis.' },
  { q: 'Peut-on gérer un système VRV/VRF à distance ?', a: 'Oui. Les systèmes VRV/VRF modernes sont connectés et peuvent être pilotés via une interface centralisée (BMS) ou une application smartphone. REN\'EAUX peut configurer le monitoring adapté à votre installation.' },
  { q: 'Quelle est la durée de vie d\'un système VRV/VRF ?', a: 'Avec un entretien régulier, un système VRV/VRF a une durée de vie de 15 à 25 ans. REN\'EAUX propose des contrats de maintenance VRV/VRF adaptés aux professionnels.' },
]

export function VRVVRF() {
  useEffect(() => {
    document.title = "Systèmes VRV VRF Limay | Installation VRV VRF Yvelines 78 — REN'EAUX"
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Systèmes VRV / VRF</span>
          </div>
          <motion.div {...fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)', borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.25rem', color: '#F472B6', fontSize: '0.8rem', fontWeight: '600' }}>
              <Building2 size={13} /> Climatisation Tertiaire & Commerciale
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Systèmes VRV / VRF Limay<br />
              <span style={{ color: '#06B6D4' }}>Installation VRV Yvelines & Île-de-France</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', marginBottom: '2rem' }}>
              REN'EAUX installe et entretient les <strong style={{ color: '#CBD5E1' }}>systèmes VRV et VRF</strong> pour les bâtiments tertiaires, commerciaux et industriels dans les Yvelines (78), l'Eure (27) et l'Île-de-France. La solution multi-zones haute performance.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700' }}>
                <Phone size={17} /> 07 67 06 05 24
              </a>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '600' }}>
                Audit & devis VRV gratuit
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
                <h2 style={{ color: '#0F172A', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                  Expert VRV / VRF dans les Yvelines et l'Île-de-France
                </h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  Les systèmes <strong>VRV (Variable Refrigerant Volume)</strong> et <strong>VRF (Variable Refrigerant Flow)</strong> représentent l'élite de la climatisation multi-zones pour les bâtiments tertiaires et commerciaux. Une seule unité extérieure peut alimenter jusqu'à 50 unités intérieures dans différentes zones, avec une gestion totalement indépendante de chaque espace.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  REN'EAUX est votre partenaire pour l'installation de systèmes <strong>VRV Daikin</strong>, <strong>VRF Mitsubishi Electric</strong>, <strong>LG Multi V</strong> et autres dans les Yvelines (78), l'Eure (27) et toute l'Île-de-France. Notre expertise couvre l'audit de vos besoins, le dimensionnement, la pose des équipements et la mise en service.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '2rem' }}>
                  Les systèmes VRV/VRF permettent également la <strong>récupération de chaleur</strong> : quand certaines zones se refroidissent, la chaleur récupérée est redistribuée dans les zones qui en ont besoin, réduisant la consommation globale jusqu'à 30% par rapport à des splits classiques.
                </p>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Avantages des systèmes VRV / VRF</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {avantages.map((a, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', padding: '0.5rem 0' }}>
                      <CheckCircle size={16} color="#22C55E" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.5 }}>{a}</span>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Applications VRV / VRF dans les Yvelines</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2.5rem' }} className="rn-three-col">
                  {['Bureaux & Open spaces', 'Hôtels & Résidences', 'Centres commerciaux', 'Cliniques & Établissements de santé', 'Restaurants & CHR', 'Écoles & Établissements publics'].map((app, i) => (
                    <div key={i} style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1rem', border: '1px solid rgba(0,0,0,0.06)', textAlign: 'center', color: '#475569', fontSize: '0.875rem', fontWeight: '600' }}>{app}</div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>FAQ — Systèmes VRV / VRF Yvelines</h2>
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
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(236,72,153,0.2)' }}>
                <div style={{ color: '#F472B6', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Audit VRV Gratuit</div>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Faites auditer votre projet VRV/VRF par nos experts. Devis sous 48h.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '700' }}><Phone size={17} /> 07 67 06 05 24</a>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '600' }}>Formulaire contact</Link>
                </div>
              </div>
              <div>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Services liés</h3>
                {[{ label: 'Climatisation professionnelle', href: '/climatisation-professionnelle' }, { label: 'Climatisation industrielle', href: '/climatisation-industrielle' }, { label: 'Climatisation gainable', href: '/climatisation-gainable' }, { label: 'Maintenance climatisation', href: '/maintenance-climatisation' }].map(l => (
                  <Link key={l.href} to={l.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1E40AF', textDecoration: 'none', fontSize: '0.875rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <ChevronRight size={14} /> {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .rn-content-grid { grid-template-columns: 1fr !important; } .rn-two-col { grid-template-columns: 1fr !important; } .rn-three-col { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </div>
  )
}

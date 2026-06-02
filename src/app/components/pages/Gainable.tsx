import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Wind, CheckCircle } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const avantages = [
  'Système totalement invisible — aucun appareil visible', 'Climatisation uniforme dans toutes les pièces', 'Silencieux — l\'unité est dans les combles', 'Idéal pour les maisons de 80 m² à 250 m²', 'Réversible — chauffe en hiver, refroidit en été', 'Intégration possible avec la VMC', 'Économies d\'énergie grâce aux dernières technologies inverter', 'Compatible pompe à chaleur pour les aides MaPrimeRénov\''
]

const faqs = [
  { q: 'Qu\'est-ce qu\'une climatisation gainable ?', a: 'La climatisation gainable est un système centralisé où une unité intérieure unique, installée en combles ou dans un faux-plafond, distribue l\'air climatisé dans toutes les pièces via un réseau de gaines. Aucun appareil n\'est visible dans les pièces.' },
  { q: 'La climatisation gainable est-elle adaptée aux maisons dans les Yvelines ?', a: 'Oui, absolument. La climatisation gainable est particulièrement adaptée aux maisons individuelles des Yvelines de 80 à 250 m². Elle nécessite un espace technique (combles perdus, faux-plafond) pour l\'installation de l\'unité intérieure et des gaines.' },
  { q: 'Combien coûte une installation gainable à Limay ?', a: 'Le prix d\'une installation de climatisation gainable varie de 6 000 € à 15 000 € selon la superficie et la configuration du logement. Contactez REN\'EAUX pour un devis précis et gratuit.' },
  { q: 'Peut-on installer une climatisation gainable dans une maison existante ?', a: 'Oui, mais cela nécessite d\'avoir accès aux combles ou à un faux-plafond pour le passage des gaines. REN\'EAUX évalue la faisabilité lors d\'une visite technique gratuite dans les Yvelines.' },
  { q: 'La climatisation gainable est-elle éligible aux aides de l\'État ?', a: 'Si votre installation gainable fait office de pompe à chaleur réversible et que vous êtes certifié RGE (c\'est le cas de REN\'EAUX), vous pouvez être éligible à certaines aides. Renseignez-vous auprès de nous.' },
]

export function Gainable() {
  useEffect(() => {
    document.title = "Climatisation Gainable Limay | Installation Gainable Yvelines 78 — REN'EAUX"
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Climatisation Gainable</span>
          </div>
          <motion.div {...fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.25rem', color: '#A78BFA', fontSize: '0.8rem', fontWeight: '600' }}>
              <Wind size={13} /> Confort Total — Discret & Invisible
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Climatisation Gainable Limay<br />
              <span style={{ color: '#06B6D4' }}>& Yvelines — Installation Expert</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', marginBottom: '2rem' }}>
              La <strong style={{ color: '#CBD5E1' }}>climatisation gainable</strong> offre un confort thermique parfait dans toutes les pièces de votre maison, sans aucun appareil visible. REN'EAUX, spécialiste du gainable à Limay et dans les Yvelines.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700' }}>
                <Phone size={17} /> 07 67 06 05 24
              </a>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '600' }}>
                Devis gainable gratuit
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
                  Spécialiste climatisation gainable dans les Yvelines
                </h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  La <strong>climatisation gainable</strong> est la solution premium pour les maisons souhaitant une climatisation totale sans compromettre l'esthétique des pièces. Aucun appareil visible, aucun bruit dans les pièces de vie — seulement de l'air frais ou chaud distribué discrètement via des bouches d'aération dans les murs ou plafonds.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  REN'EAUX, installateur de <strong>climatisation gainable à Limay</strong>, réalise l'étude complète de votre projet : calcul des débits d'air, dimensionnement de l'unité intérieure, tracé des gaines, intégration dans vos combles ou faux-plafond. Chaque installation est personnalisée pour garantir un confort thermique parfait dans chaque pièce.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '2rem' }}>
                  Nous travaillons avec les meilleures marques de gainable : Daikin, Mitsubishi Electric, Atlantic, Fujitsu. Votre système gainable est réversible (chaud/froid), silencieux et peut être couplé à une <Link to="/pompe-a-chaleur" style={{ color: '#06B6D4', textDecoration: 'none' }}>pompe à chaleur</Link> pour bénéficier des aides de l'État.
                </p>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Les avantages de la climatisation gainable</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {avantages.map((a, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', padding: '0.5rem 0' }}>
                      <CheckCircle size={16} color="#22C55E" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.5 }}>{a}</span>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Gainable vs Split — Quel système choisir ?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(139,92,246,0.2)' }}>
                    <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.5rem' }}>Climatisation Gainable</h3>
                    <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.7 }}>Invisible, silencieux dans les pièces, couvre toute la maison, idéal dès la construction ou rénovation avec accès combles. Budget plus élevé mais confort maximal.</p>
                  </div>
                  <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.5rem' }}>Climatisation Split</h3>
                    <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.7 }}>Visible mais très discret, installation rapide, budget plus faible. Parfait pour climatiser une ou plusieurs pièces spécifiques. Voir <Link to="/installation-climatisation" style={{ color: '#06B6D4', textDecoration: 'none' }}>installation split</Link>.</p>
                  </div>
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>FAQ — Climatisation Gainable Yvelines</h2>
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
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(139,92,246,0.2)' }}>
                <div style={{ color: '#A78BFA', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Devis Gainable</div>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Visite technique gratuite et devis précis sous 24h pour votre projet gainable.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '700' }}><Phone size={17} /> 07 67 06 05 24</a>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '600' }}>Formulaire contact</Link>
                </div>
              </div>
              <div>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Services liés</h3>
                {[{ label: 'Installation climatisation', href: '/installation-climatisation' }, { label: 'Pompe à chaleur', href: '/pompe-a-chaleur' }, { label: 'VRV / VRF', href: '/vrv-vrf' }, { label: 'Climatisation professionnelle', href: '/climatisation-professionnelle' }].map(l => (
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

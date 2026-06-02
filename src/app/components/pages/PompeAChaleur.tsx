import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Thermometer, CheckCircle, Star, Shield } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const types = [
  { title: 'PAC Air/Air', desc: 'Chauffe en hiver et refroidit en été. Système réversible idéal pour les maisons et appartements. COP élevé et éligible aux aides de l\'État avec REN\'EAUX certifié RGE.' },
  { title: 'PAC Air/Eau', desc: 'Alimente votre plancher chauffant ou vos radiateurs basse température. Solution idéale pour remplacer une chaudière fioul ou gaz. Économies importantes sur facture de chauffage.' },
  { title: 'PAC Géothermique', desc: 'Capte les calories du sol via des sondes ou collecteurs enterrés. Rendement optimal quelle que soit la saison. Pour les maisons individuelles avec terrain disponible.' },
  { title: 'PAC Hybride', desc: 'Combine une pompe à chaleur et une chaudière existante pour une transition douce et économique vers les énergies renouvelables.' },
]

const aides = [
  { label: 'MaPrimeRénov\'', desc: 'Jusqu\'à 10 200 € pour une PAC air/eau selon vos revenus' },
  { label: 'Éco-PTZ', desc: 'Prêt à taux zéro jusqu\'à 50 000 € sans conditions de ressources' },
  { label: 'TVA à 5,5%', desc: 'Taux réduit de TVA sur la fourniture et la pose de votre PAC' },
  { label: 'CEE', desc: 'Certificats d\'économies d\'énergie pour financer une partie de vos travaux' },
]

const faqs = [
  { q: 'Quelle est la différence entre une pompe à chaleur et une climatisation réversible ?', a: 'Une climatisation réversible (split) est principalement conçue pour le rafraîchissement et peut aussi chauffer. Une pompe à chaleur est dimensionnée pour le chauffage en priorité, avec des performances de chauffage bien supérieures.' },
  { q: 'Est-ce qu\'une pompe à chaleur chauffe suffisamment en hiver dans les Yvelines ?', a: 'Oui. Les PAC air/air et air/eau modernes fonctionnent jusqu\'à -15°C ou -20°C selon les modèles. Dans les Yvelines, les hivers sont modérés et la PAC assurera votre confort même par temps froid.' },
  { q: 'Combien coûte l\'installation d\'une pompe à chaleur à Limay ?', a: 'Le prix varie selon le type de PAC : de 3 000 € à 5 000 € pour une PAC air/air, de 8 000 € à 20 000 € pour une PAC air/eau. Les aides de l\'État (MaPrimeRénov\', éco-PTZ) réduisent significativement ce coût.' },
  { q: 'REN\'EAUX est-il certifié RGE pour les pompes à chaleur ?', a: 'Oui, REN\'EAUX est certifié RGE (Reconnu Garant de l\'Environnement), ce qui vous permet de bénéficier de MaPrimeRénov\' et des autres aides de l\'État pour votre installation de pompe à chaleur.' },
  { q: 'Quelle marque de pompe à chaleur recommandez-vous ?', a: 'Nous travaillons avec les meilleurs fabricants : Daikin, Atlantic, Mitsubishi Electric, Panasonic, LG, De Dietrich. Nous vous conseillons la solution optimale selon votre logement, votre budget et vos objectifs d\'économies d\'énergie.' },
]

export function PompeAChaleur() {
  useEffect(() => {
    document.title = "Pompe à Chaleur Limay | Installation PAC Yvelines 78 — REN'EAUX"
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Pompe à Chaleur</span>
          </div>
          <motion.div {...fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.25rem', color: '#F59E0B', fontSize: '0.8rem', fontWeight: '600' }}>
              <Thermometer size={13} /> Certifié RGE — Éligible MaPrimeRénov'
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Pompe à Chaleur Limay<br />
              <span style={{ color: '#06B6D4' }}>Installation & Entretien PAC Yvelines</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', marginBottom: '2rem' }}>
              REN'EAUX installe, entretient et dépanne les <strong style={{ color: '#CBD5E1' }}>pompes à chaleur</strong> air/air et air/eau à Limay et dans les Yvelines. Certifié RGE pour l'accès à MaPrimeRénov' et à l'éco-PTZ.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700' }}>
                <Phone size={17} /> 07 67 06 05 24
              </a>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '600' }}>
                Devis PAC gratuit
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
                  Installation pompe à chaleur à Limay — Expert PAC Yvelines
                </h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  La <strong>pompe à chaleur</strong> est la solution de chauffage et de climatisation la plus économique et écologique du marché. REN'EAUX, installateur de pompes à chaleur certifié RGE à Limay, vous accompagne de la conception à la mise en service de votre PAC dans les Yvelines (78), l'Eure (27) et l'Île-de-France.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  Avec un <strong>coefficient de performance (COP)</strong> de 3 à 5, une pompe à chaleur produit 3 à 5 fois plus d'énergie qu'elle n'en consomme. Les économies sur votre facture d'énergie sont immédiates et significatives, notamment en remplacement d'une chaudière fioul ou gaz.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '2rem' }}>
                  En tant que technicien <strong>certifié RGE</strong>, REN'EAUX vous ouvre l'accès à toutes les aides de l'État : <strong>MaPrimeRénov'</strong>, <strong>éco-PTZ</strong>, TVA à 5,5% et certificats d'économies d'énergie (CEE). Nous vous accompagnons dans toutes vos démarches administratives.
                </p>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Types de pompes à chaleur installées à Limay</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {types.map((t, i) => (
                    <div key={i} style={{ background: '#F8FAFC', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <h3 style={{ color: '#0F172A', fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.4rem' }}>{t.title}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.6 }}>{t.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Aides financières pour votre pompe à chaleur</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {aides.map((a, i) => (
                    <div key={i} style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '14px', padding: '1.25rem' }}>
                      <div style={{ color: '#22C55E', fontWeight: '800', fontSize: '0.95rem', marginBottom: '0.3rem' }}>{a.label}</div>
                      <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.6 }}>{a.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>FAQ — Pompe à chaleur Limay & Yvelines</h2>
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
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(245,158,11,0.2)' }}>
                <div style={{ color: '#F59E0B', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Certifié RGE</div>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Bénéficiez des aides de l'État pour votre pompe à chaleur. Devis gratuit et sans engagement.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '700' }}><Phone size={17} /> 07 67 06 05 24</a>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '600' }}>Devis PAC en ligne</Link>
                </div>
              </div>
              <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '1rem', fontSize: '0.95rem' }}>Nos certifications</h3>
                {[{ icon: <Star size={16} />, text: 'Certifié RGE' }, { icon: <Shield size={16} />, text: 'Habilitation fluides frigorigènes' }, { icon: <CheckCircle size={16} />, text: 'Garantie décennale' }, { icon: <CheckCircle size={16} />, text: 'Toutes marques PAC' }].map((g, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#22C55E' }}>{g.icon}</span> {g.text}
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Services liés</h3>
                {[{ label: 'Installation climatisation', href: '/installation-climatisation' }, { label: 'Maintenance climatisation', href: '/maintenance-climatisation' }, { label: 'Climatisation gainable', href: '/climatisation-gainable' }].map(l => (
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

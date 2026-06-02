import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Factory, CheckCircle } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const applications = [
  { title: 'Salles de serveurs & datacenters', desc: 'Précision de température et d\'humidité critique. Systèmes de climatisation de précision 24h/24.' },
  { title: 'Entrepôts & zones de stockage', desc: 'Climatisation de grands volumes pour la protection des marchandises sensibles et le confort des salariés.' },
  { title: 'Ateliers de production', desc: 'Maintien des conditions thermiques pour les processus industriels et la sécurité des opérateurs.' },
  { title: 'Laboratoires & salles blanches', desc: 'Contrôle strict de la température, de l\'humidité et de la filtration de l\'air selon les normes ISO.' },
  { title: 'Usines agroalimentaires', desc: 'Respect des réglementations sanitaires avec des systèmes de climatisation adaptés aux environnements HACCP.' },
  { title: 'Bâtiments industriels', desc: 'Installation de systèmes VRF haute capacité pour les grandes surfaces industrielles dans les Yvelines.' },
]

const faqs = [
  { q: 'REN\'EAUX intervient-il pour la climatisation industrielle dans les Yvelines ?', a: 'Oui. REN\'EAUX est spécialisé dans la climatisation industrielle dans les Yvelines (78), l\'Eure (27) et l\'Île-de-France. Nous gérons des projets de toutes envergures, de la salle de serveurs à l\'entrepôt logistique.' },
  { q: 'Quels systèmes de climatisation pour une salle de serveurs ?', a: 'Pour une salle de serveurs, nous recommandons des précision cooling (climatiseurs de précision) avec redondance N+1 ou N+2, contrôle d\'humidité et alarmes. REN\'EAUX maîtrise les systèmes Stulz, Emerson, Airedale.' },
  { q: 'Proposez-vous un service d\'astreinte 24h/24 pour les industriels ?', a: 'Oui, REN\'EAUX peut proposer des contrats de maintenance avec astreinte 24h/24 pour les installations critiques (salles de serveurs, chaînes de froid). Contactez-nous pour connaître nos formules.' },
  { q: 'Combien coûte la climatisation d\'un entrepôt de 1000 m² dans les Yvelines ?', a: 'Le coût dépend de l\'isolation du bâtiment, de la hauteur sous plafond, des charges thermiques internes et des exigences de température. REN\'EAUX réalise gratuitement l\'étude de faisabilité et le chiffrage.' },
]

export function Industrielle() {
  useEffect(() => {
    document.title = "Climatisation Industrielle Yvelines | Climatisation Entrepôt Limay — REN'EAUX"
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Climatisation Industrielle</span>
          </div>
          <motion.div {...fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(30,64,175,0.2)', border: '1px solid rgba(30,64,175,0.4)', borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.25rem', color: '#93C5FD', fontSize: '0.8rem', fontWeight: '600' }}>
              <Factory size={13} /> Grandes Puissances · Projets Complexes
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Climatisation Industrielle<br />
              <span style={{ color: '#06B6D4' }}>Yvelines & Île-de-France — Toutes Puissances</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', marginBottom: '2rem' }}>
              REN'EAUX maîtrise les projets de <strong style={{ color: '#CBD5E1' }}>climatisation industrielle</strong> de toutes envergures dans les Yvelines (78) et l'Île-de-France : entrepôts, salles de serveurs, ateliers de production, salles blanches et bâtiments industriels.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700' }}>
                <Phone size={17} /> 07 67 06 05 24
              </a>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '600' }}>
                Etude & devis industriel
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
                <h2 style={{ color: '#0F172A', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Expert climatisation industrielle dans les Yvelines</h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  La <strong>climatisation industrielle</strong> nécessite une expertise spécifique : calcul de charges thermiques complexes, sélection d'équipements haute performance, intégration dans des process industriels et respect de normes strictes. REN'EAUX dispose de l'expertise technique pour relever ces défis dans les Yvelines et l'Île-de-France.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '2rem' }}>
                  Nous intervenons pour des projets de <strong>climatisation de grandes puissances</strong> : chillers, tour de refroidissement, précision cooling pour salles de serveurs, systèmes VRF haute capacité pour entrepôts. Chaque projet fait l'objet d'un audit technique préalable et d'un dimensionnement précis.
                </p>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Applications industrielles</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {applications.map((a, i) => (
                    <div key={i} style={{ background: '#F8FAFC', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <h3 style={{ color: '#0F172A', fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.4rem' }}>{a.title}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>{a.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Notre approche pour les projets industriels</h2>
                {['Audit technique et relevé de plans détaillé', 'Calcul de charges thermiques selon normes RT', 'Dimensionnement optimal des équipements', 'Sélection des meilleures marques industrielles', 'Installation par équipe certifiée et expérimentée', 'Mise en service et formation des équipes de maintenance', 'Contrat de maintenance préventive adapté'].map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle size={16} color="#22C55E" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#475569', fontSize: '0.875rem' }}>{s}</span>
                  </div>
                ))}

                <div style={{ marginTop: '2.5rem' }}>
                  <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>FAQ — Climatisation Industrielle</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((f, i) => (
                      <div key={i} style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{f.q}</h3>
                        <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.7 }}>{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(30,64,175,0.3)' }}>
                <div style={{ color: '#93C5FD', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Projet Industriel</div>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Étude technique gratuite pour votre projet de climatisation industrielle.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '700' }}><Phone size={17} /> 07 67 06 05 24</a>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '600' }}>Formulaire industriel</Link>
                </div>
              </div>
              <div>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Services liés</h3>
                {[{ label: 'Climatisation professionnelle', href: '/climatisation-professionnelle' }, { label: 'Systèmes VRV / VRF', href: '/vrv-vrf' }, { label: 'Maintenance climatisation', href: '/maintenance-climatisation' }, { label: 'Dépannage climatisation', href: '/depannage-climatisation' }].map(l => (
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

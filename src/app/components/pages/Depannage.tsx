import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Zap, AlertTriangle, Clock, CheckCircle, Shield } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const pannes = [
  { title: 'Climatisation qui ne refroidit plus', desc: 'Fuite de gaz frigorigène, compresseur défaillant ou filtre encrassé. REN\'EAUX diagnostique et répare votre climatisation sous 24h dans les Yvelines.' },
  { title: 'Climatisation qui fait du bruit', desc: 'Vibrations, sifflements ou claquements anormaux sont souvent signe d\'un composant usé ou mal fixé. Intervention rapide par notre dépanneur à Limay.' },
  { title: 'Climatisation qui ne s\'allume pas', desc: 'Panne électrique, fusible grillé, carte électronique défectueuse. REN\'EAUX répare tous types de pannes électriques sur votre climatisation.' },
  { title: 'Fuite d\'eau de la climatisation', desc: 'Bac de condensation bouché, pompe de relevage défectueuse ou gaine de condensats obstruée. Réparation rapide et nettoyage complet.' },
  { title: 'Code erreur affiché', desc: 'E1, E2, F3… chaque code erreur correspond à un défaut spécifique. Nos techniciens certifiés décodent et réparent toutes les anomalies.' },
  { title: 'Mauvaise odeur de la climatisation', desc: 'Moisissures dans les filtres ou l\'évaporateur, circuit de condensats colmaté. Nettoyage et désinfection professionnels par REN\'EAUX.' },
]

const faqs = [
  { q: 'Intervenez-vous en urgence pour un dépannage climatisation dans les Yvelines ?', a: 'Oui. REN\'EAUX propose un service de dépannage climatisation rapide dans les Yvelines (78), l\'Eure (27) et l\'Île-de-France. Appelez le 07 67 06 05 24 pour une intervention le jour même ou le lendemain selon votre urgence.' },
  { q: 'Quelles marques de climatisation dépannez-vous ?', a: 'Nous dépannons toutes les marques de climatisation : Daikin, Mitsubishi Electric, Atlantic, Fujitsu, LG, Panasonic, Samsung, Toshiba, Hitachi, Carrier, Trane, et bien d\'autres.' },
  { q: 'Combien coûte un dépannage climatisation à Limay ?', a: 'Le coût dépend de la nature de la panne. Un diagnostic est facturé forfaitairement. La réparation (remplacement de pièces, recharge en gaz) est devisée avant intervention. Appelez-nous pour un tarif précis.' },
  { q: 'Ma climatisation perd du gaz, est-ce dangereux ?', a: 'Une fuite de gaz frigorigène n\'est pas directement dangereuse pour la santé mais entraîne une perte d\'efficacité et peut endommager le compresseur. Il est impératif de faire appel à un technicien habilité comme REN\'EAUX pour localiser et réparer la fuite.' },
  { q: 'Intervenez-vous le week-end pour les pannes de climatisation ?', a: 'Oui, REN\'EAUX propose des interventions les week-ends pour les urgences climatisation dans les Yvelines et les zones couvertes. Contactez-nous au 07 67 06 05 24.' },
]

export function Depannage() {
  useEffect(() => {
    document.title = "Dépannage Climatisation Limay | Réparation Climatisation Yvelines 78 — REN'EAUX"
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Dépannage Climatisation</span>
          </div>
          <motion.div {...fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.25rem', color: '#F87171', fontSize: '0.8rem', fontWeight: '600' }}>
              <Zap size={13} /> Intervention Rapide 24h/48h
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Dépannage Climatisation Limay<br />
              <span style={{ color: '#06B6D4' }}>& Yvelines (78) — Réparation Rapide</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', marginBottom: '2rem' }}>
              Votre <strong style={{ color: '#CBD5E1' }}>climatisation est en panne</strong> ? REN'EAUX intervient rapidement pour le dépannage et la réparation de tous systèmes de climatisation à Limay, Mantes-la-Jolie, Les Mureaux et dans tout le 78.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#EF4444', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700', boxShadow: '0 4px 20px rgba(239,68,68,0.4)' }}>
                <Phone size={17} /> Urgence — 07 67 06 05 24
              </a>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '600' }}>
                Décrire ma panne
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
                  Dépanneur climatisation rapide à Limay et dans les Yvelines
                </h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  REN'EAUX est votre <strong>dépanneur climatisation à Limay</strong> et dans les Yvelines (78). Qu'il s'agisse d'une panne soudaine en plein été, d'un dysfonctionnement chronique ou d'une fuite de frigorigène, notre technicien spécialisé intervient rapidement pour diagnostiquer et réparer votre installation.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  Nous maîtrisons le dépannage de toutes les technologies : <strong>climatisation split</strong>, <strong>multi-split</strong>, <strong>gainable</strong>, systèmes <Link to="/vrv-vrf" style={{ color: '#06B6D4', textDecoration: 'none' }}>VRV/VRF</Link> et <Link to="/pompe-a-chaleur" style={{ color: '#06B6D4', textDecoration: 'none' }}>pompe à chaleur</Link>. Toutes les marques sont couvertes.
                </p>
                <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '12px', padding: '1.25rem', marginBottom: '2rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <AlertTriangle size={20} color="#EF4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <strong>Climatisation en panne en été ?</strong> Appelez immédiatement le <a href="tel:0767060524" style={{ color: '#EF4444', fontWeight: '700', textDecoration: 'none' }}>07 67 06 05 24</a>. REN'EAUX intervient sous 24h à 48h dans les Yvelines et l'Île-de-France.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Pannes climatisation fréquentes — REN'EAUX intervient</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {pannes.map((p, i) => (
                    <div key={i} style={{ background: '#F8FAFC', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <h3 style={{ color: '#0F172A', fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.4rem' }}>{p.title}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp}>
                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>Zones de dépannage climatisation</h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  REN'EAUX assure le <strong>dépannage climatisation dans les Yvelines (78)</strong> : Limay, Mantes-la-Jolie, Mantes-la-Ville, Les Mureaux, Poissy, Conflans-Sainte-Honorine, Sartrouville, Versailles, Saint-Germain-en-Laye, Rambouillet.
                  Nous intervenons également dans l'<strong>Eure (27)</strong> : Évreux, Vernon, Pacy-sur-Eure, et dans toute l'<strong>Île-de-France</strong>.
                </p>
                <Link to="/zones-intervention" style={{ color: '#1E40AF', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>Voir toutes les zones d'intervention →</Link>
              </motion.div>

              <motion.div {...fadeUp} style={{ marginTop: '2.5rem' }}>
                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>FAQ — Dépannage Climatisation Yvelines</h2>
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
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(239,68,68,0.3)' }}>
                <div style={{ color: '#F87171', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Urgence Dépannage</div>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Climatisation en panne ? Appelez REN'EAUX maintenant — intervention sous 24h.</p>
                <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#EF4444', color: '#fff', textDecoration: 'none', padding: '1rem', borderRadius: '10px', fontWeight: '700', fontSize: '1rem' }}><Phone size={18} /> 07 67 06 05 24</a>
              </div>
              <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '1rem', fontSize: '0.95rem' }}>Nos engagements</h3>
                {[{ icon: <Clock size={16} />, text: 'Intervention sous 24–48h' }, { icon: <Shield size={16} />, text: 'Diagnostic transparent' }, { icon: <CheckCircle size={16} />, text: 'Devis avant réparation' }, { icon: <Zap size={16} />, text: 'Toutes marques dépannées' }].map((g, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#22C55E' }}>{g.icon}</span> {g.text}
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Services liés</h3>
                {[{ label: 'Installation climatisation', href: '/installation-climatisation' }, { label: 'Maintenance climatisation', href: '/maintenance-climatisation' }, { label: 'Pompe à chaleur', href: '/pompe-a-chaleur' }].map(l => (
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

import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Settings, CheckCircle, Shield, Clock } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const prestations = [
  'Nettoyage des filtres de l\'unité intérieure', 'Nettoyage de l\'évaporateur et du condenseur', 'Vérification du niveau de charge en gaz frigorigène',
  'Contrôle de l\'étanchéité du circuit frigorifique', 'Vérification du circuit électrique et des connexions', 'Contrôle du compresseur et des ventilateurs',
  'Nettoyage et contrôle du bac et circuit de condensats', 'Test de fonctionnement complet en modes froid et chaud', 'Mesure des pressions et températures d\'échange',
  'Rapport d\'intervention détaillé remis au client',
]

const faqs = [
  { q: 'À quelle fréquence faut-il entretenir sa climatisation ?', a: 'Il est recommandé de réaliser un entretien annuel de votre climatisation, idéalement au printemps avant la saison estivale. Pour les systèmes gainables et les installations professionnelles, un entretien bi-annuel est conseillé.' },
  { q: 'L\'entretien de la climatisation est-il obligatoire ?', a: 'Oui. La réglementation française impose un contrôle d\'étanchéité annuel pour les systèmes contenant plus de 2 kg de fluide frigorigène. De plus, un entretien régulier est souvent requis pour maintenir la garantie constructeur.' },
  { q: 'Proposez-vous un contrat d\'entretien climatisation dans les Yvelines ?', a: 'Oui, REN\'EAUX propose des contrats d\'entretien climatisation annuels ou bi-annuels couvrant l\'ensemble des interventions préventives. Contactez-nous pour connaître nos formules adaptées à votre installation.' },
  { q: 'Que se passe-t-il si je ne fais pas entretenir ma climatisation ?', a: 'Un défaut d\'entretien entraîne une perte de performance progressive (jusqu\'à 30%), une consommation énergétique accrue, un risque de panne prématuré et l\'annulation de votre garantie constructeur. L\'entretien régulier est un investissement rentable.' },
  { q: 'Combien coûte un contrat d\'entretien climatisation ?', a: 'Le coût d\'un contrat d\'entretien climatisation varie selon le nombre d\'appareils et la fréquence des interventions. Contactez REN\'EAUX au 07 67 06 05 24 pour un devis personnalisé sans engagement.' },
]

export function Maintenance() {
  useEffect(() => {
    document.title = "Maintenance Climatisation Limay | Entretien Climatisation Yvelines 78 — REN'EAUX"
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Maintenance Climatisation</span>
          </div>
          <motion.div {...fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.25rem', color: '#22C55E', fontSize: '0.8rem', fontWeight: '600' }}>
              <Settings size={13} /> Entretien & Maintenance
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Maintenance Climatisation Limay<br />
              <span style={{ color: '#06B6D4' }}>Contrat Entretien Yvelines (78)</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', marginBottom: '2rem' }}>
              REN'EAUX assure l'<strong style={{ color: '#CBD5E1' }}>entretien et la maintenance de votre climatisation</strong> à Limay et dans les Yvelines. Contrats annuels, interventions préventives et correctives par un technicien certifié.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700' }}>
                <Phone size={17} /> 07 67 06 05 24
              </a>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '600' }}>
                Demander un contrat
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
                  Pourquoi l'entretien régulier de votre climatisation est indispensable
                </h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  Un <strong>entretien régulier de votre climatisation</strong> à Limay vous garantit des performances optimales, une durée de vie prolongée et des économies d'énergie significatives. Sans maintenance préventive, un climatiseur perd jusqu'à 30% de son rendement en 3 ans.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  REN'EAUX propose des <strong>contrats d'entretien climatisation dans les Yvelines</strong> adaptés à chaque situation : particuliers, professionnels, restaurants, bureaux, entrepôts. Nos techniciens certifiés réalisent un bilan complet de votre installation et vous remettent un rapport d'intervention détaillé.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '2rem' }}>
                  La <strong>maintenance climatisation</strong> inclut également le contrôle d'étanchéité du circuit frigorigène, obligatoire selon la réglementation française pour les systèmes contenant plus de 2 kg de fluide. REN'EAUX est habilité à intervenir sur tous les types de fluides frigorigènes.
                </p>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>Ce qui est inclus dans notre entretien climatisation</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {prestations.map((p, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', padding: '0.5rem 0' }}>
                      <CheckCircle size={16} color="#22C55E" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.5 }}>{p}</span>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>
                  Maintenance climatisation pour particuliers et professionnels
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.5rem' }}>Particuliers</h3>
                    <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.7 }}>Entretien annuel de votre split ou multi-split à Limay et dans les Yvelines. Contrat avec rapport et garantie de performance.</p>
                  </div>
                  <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.5rem' }}>Professionnels</h3>
                    <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.7 }}>Contrats multi-sites, maintenance préventive et curative pour commerces, bureaux et industries dans le 78 et le 27.</p>
                  </div>
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>FAQ — Entretien Climatisation Yvelines</h2>
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
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(34,197,94,0.2)' }}>
                <div style={{ color: '#22C55E', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Contrat Entretien</div>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Protégez votre installation et faites des économies avec notre contrat d'entretien annuel.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '700' }}><Phone size={17} /> 07 67 06 05 24</a>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '600' }}>Demander un devis</Link>
                </div>
              </div>
              <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '1rem', fontSize: '0.95rem' }}>Avantages du contrat</h3>
                {[{ icon: <Shield size={16} />, text: 'Garantie performances' }, { icon: <Clock size={16} />, text: 'Priorité d\'intervention' }, { icon: <CheckCircle size={16} />, text: 'Pièces à tarif préférentiel' }, { icon: <Settings size={16} />, text: 'Rapport annuel détaillé' }].map((g, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#22C55E' }}>{g.icon}</span> {g.text}
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Services liés</h3>
                {[{ label: 'Dépannage climatisation', href: '/depannage-climatisation' }, { label: 'Installation climatisation', href: '/installation-climatisation' }, { label: 'Pompe à chaleur', href: '/pompe-a-chaleur' }].map(l => (
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

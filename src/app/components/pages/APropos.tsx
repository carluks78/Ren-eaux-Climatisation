import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Award, Shield, Clock, Star, CheckCircle, MapPin } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const certifications = [
  { icon: <Award size={22} />, title: 'Certifié RGE', desc: 'Reconnu Garant de l\'Environnement — éligibilité MaPrimeRénov\', éco-PTZ, CEE' },
  { icon: <Shield size={22} />, title: 'Habilitation Fluides Frigorigènes', desc: 'Catégorie I — manipulation de tous les fluides frigorigènes autorisée' },
  { icon: <Shield size={22} />, title: 'Assurance Décennale', desc: 'Toutes nos installations sont couvertes par notre assurance décennale' },
  { icon: <Star size={22} />, title: 'Technicien Certifié Constructeurs', desc: 'Formé par les constructeurs Daikin, Mitsubishi Electric, Atlantic' },
]

const valeurs = [
  { title: 'Réactivité', desc: 'Nous savons que votre confort thermique ne peut pas attendre. C\'est pourquoi nous nous engageons à répondre à toute demande dans la journée et à intervenir sous 24h à 48h dans notre zone d\'intervention.' },
  { title: 'Transparence', desc: 'Chaque devis REN\'EAUX est détaillé, clair et sans surprise. Nous vous expliquons chaque poste de coût avant toute intervention. Aucun frais caché, aucune mauvaise surprise sur la facture finale.' },
  { title: 'Qualité', desc: 'Nous utilisons uniquement des équipements de marques reconnues (Daikin, Mitsubishi, Atlantic) et des matériaux de qualité professionnelle. Chaque installation est réalisée dans les règles de l\'art.' },
  { title: 'Proximité', desc: 'Basé à Limay (78520), REN\'EAUX est un acteur local des Yvelines. Nous connaissons nos clients, notre territoire et les spécificités climatiques de la région.' },
]

export function APropos() {
  useEffect(() => {
    document.title = "À Propos — REN'EAUX | Expert Climatisation Limay, Yvelines (78)"
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>À Propos</span>
          </div>
          <motion.div {...fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }} className="rn-about-header">
            <div>
              <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
                REN'EAUX — L'expert climatisation<br />
                <span style={{ color: '#06B6D4' }}>de confiance à Limay & Yvelines</span>
              </h1>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '640px' }}>
                Technicien spécialisé en climatisation et pompe à chaleur, REN'EAUX est votre partenaire de confiance pour tous vos projets thermiques dans les Yvelines (78), l'Eure (27) et toute l'Île-de-France.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <img
  src="/logo-og.png"
  alt="REN'EAUX Climatisation Mantes-la-Jolie"
  style={{ height: '40px', width: '40px', borderRadius: '8px', objectFit: 'cover' }}
/>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '5rem', alignItems: 'center' }} className="rn-two-col">
            <motion.div {...fadeUp}>
              <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Notre Histoire</div>
              <h2 style={{ color: '#0F172A', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '800', marginBottom: '1rem' }}>
                Un technicien passionné au service de votre confort
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                REN'EAUX est née de la passion d'un technicien HVAC expérimenté pour son métier et de la conviction que les habitants des Yvelines méritaient un service de climatisation de qualité, réactif et transparent.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                Basé à <strong>Limay (78520)</strong>, REN'EAUX couvre les Yvelines (78), l'Eure (27) et l'ensemble de l'Île-de-France pour tous les projets de <Link to="/installation-climatisation" style={{ color: '#06B6D4', textDecoration: 'none' }}>installation de climatisation</Link>, <Link to="/depannage-climatisation" style={{ color: '#06B6D4', textDecoration: 'none' }}>dépannage</Link>, <Link to="/maintenance-climatisation" style={{ color: '#06B6D4', textDecoration: 'none' }}>maintenance</Link> et <Link to="/pompe-a-chaleur" style={{ color: '#06B6D4', textDecoration: 'none' }}>pompe à chaleur</Link>.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.85 }}>
                Notre engagement : vous apporter le meilleur du confort thermique, au juste prix, avec un service irréprochable du premier contact jusqu'à la fin de garantie.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { val: '500+', label: 'Installations réalisées' },
                  { val: '15+', label: 'Années d\'expérience' },
                  { val: '4.9/5', label: 'Note clients' },
                  { val: '24h', label: 'Délai intervention' },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', textAlign: 'center',
                    border: '1px solid rgba(6,182,212,0.1)',
                  }}>
                    <div style={{ fontSize: '2rem', fontWeight: '900', background: 'linear-gradient(135deg, #1E40AF, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1 }}>{s.val}</div>
                    <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '0.25rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div {...fadeUp}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Certifications & Qualifications</div>
              <h2 style={{ color: '#0F172A', fontSize: '1.6rem', fontWeight: '800' }}>Des garanties sérieuses pour votre tranquillité</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
              {certifications.map((c, i) => (
                <div key={i} style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(6,182,212,0.1)' }}>
                  <div style={{ color: '#06B6D4', marginBottom: '0.75rem' }}>{c.icon}</div>
                  <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{c.title}</h3>
                  <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Valeurs */}
          <motion.div {...fadeUp}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ color: '#06B6D4', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nos Valeurs</div>
              <h2 style={{ color: '#0F172A', fontSize: '1.6rem', fontWeight: '800' }}>Ce qui nous distingue</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
              {valeurs.map((v, i) => (
                <div key={i} style={{ background: '#0F172A', borderRadius: '16px', padding: '1.75rem', border: '1px solid rgba(6,182,212,0.15)' }}>
                  <h3 style={{ color: '#06B6D4', fontWeight: '800', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{v.title}</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div {...fadeUp}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ color: '#0F172A', fontSize: '1.6rem', fontWeight: '800' }}>Nos services de climatisation</h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', marginBottom: '3rem' }}>
              {[
                { label: 'Installation climatisation', href: '/installation-climatisation' },
                { label: 'Dépannage climatisation', href: '/depannage-climatisation' },
                { label: 'Maintenance climatisation', href: '/maintenance-climatisation' },
                { label: 'Pompe à chaleur', href: '/pompe-a-chaleur' },
                { label: 'Climatisation gainable', href: '/climatisation-gainable' },
                { label: 'Systèmes VRV/VRF', href: '/vrv-vrf' },
                { label: 'Climatisation professionnelle', href: '/climatisation-professionnelle' },
                { label: 'Climatisation industrielle', href: '/climatisation-industrielle' },
              ].map(s => (
                <Link key={s.href} to={s.href} style={{
                  background: '#F8FAFC', border: '1px solid rgba(30,64,175,0.2)',
                  color: '#1E40AF', textDecoration: 'none', padding: '0.5rem 1rem',
                  borderRadius: '50px', fontSize: '0.875rem', fontWeight: '600',
                }}>{s.label}</Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div {...fadeUp} style={{ background: 'linear-gradient(135deg, #0F172A, #1E40AF)', borderRadius: '20px', padding: '3rem', textAlign: 'center', border: '1px solid rgba(6,182,212,0.2)' }}>
            <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.5rem' }}>Contactez REN'EAUX</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.5rem', color: '#94A3B8', fontSize: '0.9rem' }}>
              <span><Phone size={15} style={{ display: 'inline', verticalAlign: 'middle' }} /> 07 67 06 05 24</span>
              <span>✉ reneau.idf@gmail.com</span>
              <span><MapPin size={15} style={{ display: 'inline', verticalAlign: 'middle' }} /> Limay (78520)</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700' }}><Phone size={17} /> Appeler maintenant</a>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '600' }}>Formulaire de contact</Link>
            </div>
          </motion.div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .rn-two-col { grid-template-columns: 1fr !important; } .rn-about-header { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}

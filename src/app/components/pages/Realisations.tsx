import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Star, MapPin } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const realisations = [
  { type: 'Installation', service: 'Climatisation Split Mural', ville: 'Limay (78)', desc: 'Installation d\'une climatisation split mural Daikin 3,5 kW dans un séjour de 35 m². Intervention en 4 heures, mise en service complète.', note: 5, client: 'M. Dupont' },
  { type: 'Installation', service: 'Système Multi-Split', ville: 'Mantes-la-Jolie (78)', desc: 'Installation d\'un système multi-split Mitsubishi Electric 3 têtes pour une maison de 120 m². 3 chambres et séjour climatisés.', note: 5, client: 'Mme Martin' },
  { type: 'Installation', service: 'Pompe à Chaleur Air/Eau', ville: 'Les Mureaux (78)', desc: 'Remplacement chaudière fioul par pompe à chaleur Atlantic 9 kW. Économies estimées à 1 200 €/an. Eligible MaPrimeRénov\'', note: 5, client: 'M. Bernard' },
  { type: 'Dépannage', service: 'Réparation Climatisation', ville: 'Poissy (78)', desc: 'Dépannage en urgence d\'une climatisation LG en panne (fuite de gaz R32). Détection de fuite, réparation et recharge effectuées le jour même.', note: 5, client: 'Cabinet médical' },
  { type: 'Installation', service: 'Climatisation Gainable', ville: 'Versailles (78)', desc: 'Installation d\'un système gainable Daikin dans une maison de 180 m². 6 bouches d\'aération, thermostat connecté, réseau de gaines en combles.', note: 5, client: 'M. & Mme Leclerc' },
  { type: 'Installation', service: 'Système VRF Commercial', ville: 'Évreux (27)', desc: 'Installation d\'un système VRF LG Multi V pour 800 m² de bureaux. 12 unités intérieures, monitoring centralisé, contrat de maintenance inclus.', note: 5, client: 'Société Normandie Tech' },
  { type: 'Maintenance', service: 'Contrat Entretien Annuel', ville: 'Saint-Germain-en-Laye (78)', desc: 'Contrat d\'entretien annuel pour 3 splits Fujitsu dans un appartement de standing. Nettoyage, contrôle étanchéité et rapport d\'intervention.', note: 5, client: 'Mme Fontaine' },
  { type: 'Installation', service: 'Multi-Split Professionnel', ville: 'Vernon (27)', desc: 'Installation multi-split Samsung 4 têtes pour un restaurant de 150 m². Planification en dehors des heures d\'ouverture, mise en service sous 2 jours.', note: 5, client: 'Restaurant Le Normand' },
]

const typeColors: Record<string, string> = {
  Installation: '#1E40AF',
  Dépannage: '#EF4444',
  Maintenance: '#22C55E',
}

export function Realisations() {
  useEffect(() => {
    document.title = "Réalisations Climatisation Yvelines | Projets REN'EAUX — Limay, Mantes, Versailles"
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Réalisations</span>
          </div>
          <motion.div {...fadeUp}>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Nos Réalisations Climatisation<br />
              <span style={{ color: '#06B6D4' }}>Yvelines & Île-de-France</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              Découvrez nos installations, dépannages et contrats d'entretien réalisés pour nos clients particuliers et professionnels dans les Yvelines, l'Eure et l'Île-de-France.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ background: '#F8FAFC', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {realisations.map((r, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}>
                <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.05)' }}>
                  {/* Colored header */}
                  <div style={{ background: `${typeColors[r.type]}15`, borderBottom: `3px solid ${typeColors[r.type]}`, padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ background: typeColors[r.type], color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700' }}>{r.type}</span>
                    <div style={{ display: 'flex', gap: '0.15rem' }}>
                      {[...Array(r.note)].map((_, j) => <Star key={j} size={14} fill="#F59E0B" color="#F59E0B" />)}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ color: '#0F172A', fontSize: '1rem', fontWeight: '700', marginBottom: '0.4rem' }}>{r.service}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#94A3B8', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
                      <MapPin size={13} /> {r.ville}
                    </div>
                    <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1rem' }}>{r.desc}</p>
                    <div style={{ color: '#64748B', fontSize: '0.8rem' }}>Client : <strong style={{ color: '#0F172A' }}>{r.client}</strong></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'linear-gradient(135deg, #1E40AF, #06B6D4)', color: '#fff', textDecoration: 'none', padding: '1rem 2rem', borderRadius: '12px', fontWeight: '700', fontSize: '1rem' }}>
              <Phone size={18} /> Demander votre devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

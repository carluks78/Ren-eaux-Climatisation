import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Star, MapPin } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const avis = [
  { name: 'Marie L.', ville: 'Limay (78)', note: 5, date: 'Mai 2025', service: 'Installation climatisation', texte: 'Intervention rapide pour la pose de notre climatisation split. Travail soigné, technicien très professionnel et ponctuel. Propre, efficace. Je recommande vivement REN\'EAUX à tous mes voisins de Limay !' },
  { name: 'Pierre D.', ville: 'Mantes-la-Jolie', note: 5, date: 'Juillet 2025', service: 'Dépannage climatisation', texte: 'Dépannage de notre climatisation en plein été en moins de 24h. Tarif correct et bien expliqué avant intervention. Technicien compétent et sympathique. Super expérience.' },
  { name: 'Sylvie M.', ville: 'Les Mureaux', note: 5, date: 'Mars 2025', service: 'Pompe à chaleur', texte: 'Installation pompe à chaleur réalisée avec soin. REN\'EAUX nous a accompagnés pour les aides MaPrimeRénov\'. Économies visibles dès la première facture. Très satisfaite du travail réalisé !' },
  { name: 'Jean-Paul R.', ville: 'Versailles (78)', note: 5, date: 'Juin 2025', service: 'Climatisation gainable', texte: 'Projet de climatisation gainable dans notre maison de 200 m². Étude thermique sérieuse, installation propre et discrète. Confort remarquable dans toutes les pièces. Excellent rapport qualité/prix.' },
  { name: 'Sophie B.', ville: 'Poissy (78)', note: 5, date: 'Avril 2025', service: 'Maintenance annuelle', texte: 'Contrat d\'entretien annuel pour nos 3 climatisations. Technicien ponctuel, rapport d\'intervention détaillé. Prestation sérieuse et professionnelle. Je renouvelle le contrat sans hésitation.' },
  { name: 'François T.', ville: 'Saint-Germain-en-Laye', note: 5, date: 'Août 2025', service: 'Installation multi-split', texte: 'Multi-split 3 têtes installé en 2 jours. Travail impeccable, passage des gaines soigné. La maison est enfin agréable l\'été. Merci REN\'EAUX pour le professionnalisme et la qualité du service.' },
  { name: 'Directeur N.', ville: 'Évreux (27)', note: 5, date: 'Février 2025', service: 'VRF professionnel', texte: 'Installation VRF pour notre société dans l\'Eure. Projet bien géré, respect des délais, équipe sérieuse. Le système fonctionne parfaitement 8 mois après l\'installation. Partenaire fiable.' },
  { name: 'Carole V.', ville: 'Rambouillet (78)', note: 5, date: 'Septembre 2025', service: 'Dépannage PAC', texte: 'Panne de pompe à chaleur en plein hiver, intervention le lendemain matin. Diagnostic précis, pièce commandée et installée en 48h. Merci pour la réactivité exceptionnelle !' },
  { name: 'Thierry G.', ville: 'Vernon (27)', note: 5, date: 'Octobre 2025', service: 'Installation split', texte: 'Installation climatisation réversible dans mon bureau à domicile. REN\'EAUX est venu estimer le travail gratuitement, devis reçu le lendemain, installation faite 3 jours après. Parfait !' },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "REN'EAUX",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "9",
    "bestRating": "5",
  },
  "review": avis.map(a => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": a.name },
    "reviewRating": { "@type": "Rating", "ratingValue": a.note.toString(), "bestRating": "5" },
    "reviewBody": a.texte,
    "datePublished": "2025",
  })),
}

export function Avis() {
  useEffect(() => {
    document.title = "Avis Clients — Climatisation Yvelines | REN'EAUX Limay — 5 étoiles"
    let s = document.getElementById('schema-reviews')
    if (!s) { s = document.createElement('script'); s.id = 'schema-reviews'; s.setAttribute('type', 'application/ld+json'); document.head.appendChild(s) }
    s.textContent = JSON.stringify(schema)
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Avis Clients</span>
          </div>
          <motion.div {...fadeUp}>
            {/* Stars */}
            <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1rem' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="#F59E0B" color="#F59E0B" />)}
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Avis Clients REN'EAUX<br />
              <span style={{ color: '#06B6D4' }}>Climatisation Yvelines — Note 5/5</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '640px' }}>
              Découvrez les avis de nos clients satisfaits pour nos services de climatisation, dépannage et pompe à chaleur dans les Yvelines (78), l'Eure (27) et l'Île-de-France.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Score summary */}
      <section style={{ background: '#F8FAFC', padding: '2.5rem 1.5rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0F172A', lineHeight: 1 }}>5.0</div>
            <div style={{ display: 'flex', gap: '0.2rem', justifyContent: 'center', margin: '0.4rem 0' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />)}
            </div>
            <div style={{ color: '#64748B', fontSize: '0.85rem' }}>Note moyenne</div>
          </div>
          {[{ val: '100%', label: 'Clients satisfaits' }, { val: '9', label: 'Avis vérifiés' }, { val: '5★', label: 'Note maximale' }].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '900', color: '#1E40AF' }}>{s.val}</div>
              <div style={{ color: '#64748B', fontSize: '0.85rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#fff', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {avis.map((a, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}>
                <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.75rem', border: '1px solid rgba(0,0,0,0.06)', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', gap: '0.15rem' }}>
                      {[...Array(a.note)].map((_, j) => <Star key={j} size={16} fill="#F59E0B" color="#F59E0B" />)}
                    </div>
                    <span style={{ color: '#94A3B8', fontSize: '0.78rem' }}>{a.date}</span>
                  </div>
                  <div style={{ background: 'rgba(6,182,212,0.08)', color: '#0F172A', padding: '0.25rem 0.65rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '600', display: 'inline-block', marginBottom: '0.75rem' }}>{a.service}</div>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem', fontStyle: 'italic' }}>"{a.texte}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #1E40AF, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '700', fontSize: '1rem', flexShrink: 0 }}>
                      {a.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ color: '#0F172A', fontWeight: '700', fontSize: '0.9rem' }}>{a.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#94A3B8', fontSize: '0.78rem' }}>
                        <MapPin size={11} /> {a.ville}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} style={{ marginTop: '3rem', background: '#0F172A', borderRadius: '20px', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(6,182,212,0.2)' }}>
            <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem' }}>Rejoignez nos clients satisfaits</h2>
            <p style={{ color: '#94A3B8', marginBottom: '1.5rem' }}>Devis gratuit et intervention rapide dans les Yvelines, l'Eure et l'Île-de-France.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700' }}>
                <Phone size={17} /> 07 67 06 05 24
              </a>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '600' }}>
                Demander un devis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

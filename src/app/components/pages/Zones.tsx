import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, MapPin } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const zones = [
  {
    id: 'limay',
    city: 'Limay',
    dept: '78',
    title: 'Climatisation Limay (78520)',
    content: 'REN\'EAUX est basé à Limay (78520) et intervient en priorité pour toute prestation de climatisation, pompe à chaleur et dépannage dans cette commune. Proche de Mantes-la-Jolie, Limay est notre zone d\'intervention principale dans les Yvelines. Installation de climatisation split, multi-split et gainable pour les particuliers et professionnels de Limay.',
    keywords: 'installateur climatisation Limay, dépannage climatisation Limay, pompe à chaleur Limay',
  },
  {
    id: 'mantes-la-jolie',
    city: 'Mantes-la-Jolie',
    dept: '78',
    title: 'Climatisation Mantes-la-Jolie (78200)',
    content: 'REN\'EAUX intervient pour l\'installation, le dépannage et la maintenance de climatisation à Mantes-la-Jolie. Ville importante des Yvelines, Mantes-la-Jolie concentre de nombreux particuliers et professionnels à la recherche d\'un technicien climatisation fiable et réactif. Devis gratuit à Mantes-la-Jolie.',
    keywords: 'climatisation Mantes-la-Jolie, installateur climatisation Mantes, dépannage clim Mantes',
  },
  {
    id: 'les-mureaux',
    city: 'Les Mureaux',
    dept: '78',
    title: 'Climatisation Les Mureaux (78130)',
    content: 'Technicien climatisation aux Mureaux, REN\'EAUX intervient rapidement pour l\'installation de climatisation split et multi-split, le dépannage et l\'entretien de vos équipements. Les Mureaux est à moins de 15 minutes de notre base à Limay — intervention rapide garantie.',
    keywords: 'climatisation Les Mureaux, installateur climatisation Mureaux, dépannage clim 78130',
  },
  {
    id: 'poissy',
    city: 'Poissy',
    dept: '78',
    title: 'Climatisation Poissy (78300)',
    content: 'REN\'EAUX installe et dépanne les systèmes de climatisation à Poissy (78300). Que vous soyez particulier ou professionnel à Poissy, notre technicien certifié se déplace pour un diagnostic gratuit et un devis personnalisé. Interventions sous 24h à 48h.',
    keywords: 'climatisation Poissy, installateur climatisation Poissy, dépannage clim Poissy',
  },
  {
    id: 'versailles',
    city: 'Versailles',
    dept: '78',
    title: 'Climatisation Versailles (78000)',
    content: 'Installateur de climatisation à Versailles, REN\'EAUX propose des solutions haut de gamme adaptées aux appartements haussmanniens, maisons bourgeoises et locaux professionnels de la ville royale. Discrétion et élégance dans nos installations à Versailles.',
    keywords: 'climatisation Versailles, installateur climatisation Versailles, pompe à chaleur Versailles',
  },
  {
    id: 'saint-germain-en-laye',
    city: 'Saint-Germain-en-Laye',
    dept: '78',
    title: 'Climatisation Saint-Germain-en-Laye (78100)',
    content: 'REN\'EAUX intervient pour l\'installation et la maintenance de climatisation à Saint-Germain-en-Laye. Maisons de ville, appartements et bureaux de Saint-Germain profitent de notre expertise pour un confort thermique optimal toute l\'année.',
    keywords: 'climatisation Saint-Germain-en-Laye, installateur climatisation Saint-Germain, clim 78100',
  },
  {
    id: 'rambouillet',
    city: 'Rambouillet',
    dept: '78',
    title: 'Climatisation Rambouillet (78120)',
    content: 'Technicien climatisation à Rambouillet, REN\'EAUX couvre le secteur sud des Yvelines pour l\'installation, le dépannage et l\'entretien de climatisation. Pompes à chaleur éligibles MaPrimeRénov\' disponibles à Rambouillet.',
    keywords: 'climatisation Rambouillet, installateur climatisation Rambouillet, pompe à chaleur Rambouillet',
  },
  {
    id: 'evreux',
    city: 'Évreux',
    dept: '27',
    title: 'Climatisation Évreux (27000)',
    content: 'REN\'EAUX étend son intervention dans l\'Eure (27) avec un service complet de climatisation à Évreux. Installation, dépannage et maintenance climatisation à Évreux pour particuliers et entreprises. Délai d\'intervention sous 24h à 48h.',
    keywords: 'climatisation Évreux, installateur climatisation Évreux, dépannage clim 27',
  },
  {
    id: 'vernon',
    city: 'Vernon',
    dept: '27',
    title: 'Climatisation Vernon (27200)',
    content: 'À la frontière entre les Yvelines et l\'Eure, Vernon bénéficie d\'une position idéale pour les interventions de REN\'EAUX. Installation de climatisation, pompe à chaleur et dépannage à Vernon et dans les communes environnantes de l\'Eure.',
    keywords: 'climatisation Vernon, installateur climatisation Vernon, pompe à chaleur Vernon 27',
  },
  {
    id: 'paris',
    city: 'Paris & Île-de-France',
    dept: 'IDF',
    title: 'Climatisation Paris & Île-de-France',
    content: 'REN\'EAUX intervient dans l\'ensemble de l\'Île-de-France pour les projets de climatisation, pompe à chaleur et systèmes VRV/VRF. Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Essonne et Val-d\'Oise : nous nous déplaçons partout pour les projets d\'envergure ou les clients fidèles.',
    keywords: 'climatisation Paris, installateur climatisation Île-de-France, pompe à chaleur IDF',
  },
]

export function Zones() {
  useEffect(() => {
    document.title = "Zones d'Intervention — Climatisation Yvelines 78, Eure 27, Île-de-France — REN'EAUX"
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Zones d'Intervention</span>
          </div>
          <motion.div {...fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.25rem', color: '#06B6D4', fontSize: '0.8rem', fontWeight: '600' }}>
              <MapPin size={13} /> Yvelines · Eure · Île-de-France
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Zones d'Intervention Climatisation<br />
              <span style={{ color: '#06B6D4' }}>Yvelines (78) — Eure (27) — Île-de-France</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', marginBottom: '2rem' }}>
              REN'EAUX intervient pour l'installation, le dépannage et la maintenance de climatisation et pompe à chaleur dans toutes les communes des <strong style={{ color: '#CBD5E1' }}>Yvelines (78)</strong>, de l'<strong style={{ color: '#CBD5E1' }}>Eure (27)</strong> et de l'<strong style={{ color: '#CBD5E1' }}>Île-de-France</strong>.
            </p>
            <a href="tel:0767060524" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700' }}>
              <Phone size={17} /> 07 67 06 05 24 — Vérifier ma zone
            </a>
          </motion.div>
        </div>
      </section>

      {/* Zone badges */}
      <section style={{ background: '#F8FAFC', padding: '2.5rem 1.5rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
            {zones.map(z => (
              <a key={z.id} href={`#${z.id}`} style={{
                background: z.dept === '27' ? 'rgba(6,182,212,0.1)' : z.dept === 'IDF' ? 'rgba(34,197,94,0.1)' : 'rgba(30,64,175,0.1)',
                border: `1px solid ${z.dept === '27' ? 'rgba(6,182,212,0.3)' : z.dept === 'IDF' ? 'rgba(34,197,94,0.3)' : 'rgba(30,64,175,0.3)'}`,
                color: '#0F172A', textDecoration: 'none', padding: '0.4rem 0.9rem',
                borderRadius: '50px', fontSize: '0.85rem', fontWeight: '500',
              }}>
                {z.city} <span style={{ color: '#94A3B8', fontSize: '0.75rem' }}>({z.dept})</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Zone sections */}
      <section style={{ background: '#fff', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {zones.map((z, i) => (
              <motion.div key={z.id} id={z.id} {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'start', paddingBottom: '3rem', borderBottom: i < zones.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }} className="rn-zone-grid">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <MapPin size={18} color="#06B6D4" />
                      <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: '800' }}>{z.title}</h2>
                    </div>
                    <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>{z.content}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                      {[...new Set(z.keywords.split(', '))].map(k => (
                        <span key={k} style={{ background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.07)', color: '#475569', padding: '0.25rem 0.65rem', borderRadius: '50px', fontSize: '0.78rem' }}>{k}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <Link to="/installation-climatisation" style={{ color: '#1E40AF', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600' }}>Installation climatisation</Link>
                      <span style={{ color: '#CBD5E1' }}>·</span>
                      <Link to="/depannage-climatisation" style={{ color: '#1E40AF', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600' }}>Dépannage</Link>
                      <span style={{ color: '#CBD5E1' }}>·</span>
                      <Link to="/maintenance-climatisation" style={{ color: '#1E40AF', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600' }}>Maintenance</Link>
                      <span style={{ color: '#CBD5E1' }}>·</span>
                      <Link to="/pompe-a-chaleur" style={{ color: '#1E40AF', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600' }}>Pompe à chaleur</Link>
                    </div>
                  </div>
                  <div style={{ background: '#0F172A', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(6,182,212,0.15)' }}>
                    <div style={{ color: '#06B6D4', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Intervention à {z.city}</div>
                    <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>Devis gratuit sous 24h — Intervention rapide dans votre secteur.</p>
                    <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.7rem 1rem', borderRadius: '8px', fontWeight: '700', fontSize: '0.875rem', justifyContent: 'center' }}>
                      <Phone size={15} /> 07 67 06 05 24
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E40AF)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '800', marginBottom: '1rem' }}>
              Votre commune n'est pas listée ?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              REN'EAUX intervient dans toute la région. Contactez-nous pour vérifier si votre commune est couverte.
            </p>
            <a href="tel:0767060524" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '1rem 2rem', borderRadius: '12px', fontWeight: '700', fontSize: '1rem' }}>
              <Phone size={19} /> Appelez-nous — 07 67 06 05 24
            </a>
          </motion.div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .rn-zone-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}

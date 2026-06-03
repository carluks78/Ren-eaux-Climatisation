import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Award, CheckCircle, Star, Shield, MapPin, Thermometer } from 'lucide-react'
import rgeImage from '../../../imports/logo-qualipac.png'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const aides = [
  { label: 'MaPrimeRénov\'', montant: 'Jusqu\'à 10 200 €', desc: 'Pour l\'installation d\'une pompe à chaleur ou climatisation éligible selon vos revenus.' },
  { label: 'Éco-PTZ', montant: 'Jusqu\'à 50 000 €', desc: 'Prêt à taux zéro pour financer vos travaux de rénovation énergétique sans condition de revenus.' },
  { label: 'TVA à 5,5 %', montant: 'Au lieu de 20 %', desc: 'Taux réduit de TVA sur la fourniture et la main-d\'œuvre pour toute installation RGE.' },
  { label: 'CEE', montant: 'Variable', desc: 'Certificats d\'économies d\'énergie versés par les fournisseurs d\'énergie en complément des aides.' },
]

const types = [
  { title: 'Climatisation Split Mural RGE', desc: 'Installation de climatiseur mural réversible (split) à Mantes-la-Jolie par technicien RGE. Eligible aux aides de l\'État si votre logement remplit les critères.' },
  { title: 'Pompe à Chaleur Air/Air RGE', desc: 'La pompe à chaleur air/air est le système de chauffage/climatisation le plus aidé. En tant qu\'installateur RGE QualiPAC à Mantes, REN\'EAUX vous ouvre toutes les aides.' },
  { title: 'Pompe à Chaleur Air/Eau RGE', desc: 'Remplacement de chaudière par une PAC air/eau à Mantes-la-Jolie. Éligible MaPrimeRénov\' jusqu\'à 10 200 € avec un installateur RGE certifié.' },
  { title: 'Climatisation Multi-Split RGE', desc: 'Installation multi-split pour plusieurs pièces à Mantes. Technicien certifié RGE — devis complet incluant les aides auxquelles vous avez droit.' },
]

const pourquoiRge = [
  'Seul un installateur RGE peut vous faire bénéficier de MaPrimeRénov\'',
  'La certification RGE garantit la qualité et la conformité de l\'installation',
  'L\'éco-PTZ (prêt à taux zéro) est conditionné à un installateur RGE',
  'La TVA à 5,5 % s\'applique uniquement avec un artisan RGE',
  'Les CEE (Certificats d\'Économies d\'Énergie) nécessitent un technicien RGE',
  'Votre assurance décennale est couverte par un professionnel certifié',
]

const faqs = [
  {
    q: 'Qu\'est-ce que la certification RGE et pourquoi est-elle importante à Mantes-la-Jolie ?',
    a: 'RGE signifie Reconnu Garant de l\'Environnement. C\'est une certification délivrée par l\'État français aux artisans spécialisés en travaux de rénovation énergétique. À Mantes-la-Jolie, seul un installateur RGE comme REN\'EAUX vous permet de bénéficier de MaPrimeRénov\', de l\'éco-PTZ et de la TVA à 5,5 % pour votre climatisation ou pompe à chaleur.',
  },
  {
    q: 'REN\'EAUX est-il certifié RGE QualiPAC à Mantes-la-Jolie ?',
    a: 'Oui. REN\'EAUX est certifié RGE QualiPAC, la certification spécifique aux pompes à chaleur. Cette certification couvre l\'installation de pompes à chaleur air/air, air/eau ainsi que les systèmes de climatisation réversible à Mantes-la-Jolie et dans tout le département des Yvelines (78).',
  },
  {
    q: 'Quelles aides peut-on obtenir pour une climatisation RGE à Mantes-la-Jolie ?',
    a: 'Avec REN\'EAUX, installateur RGE à Mantes-la-Jolie, vous pouvez bénéficier de : MaPrimeRénov\' (de 1 000 € à 10 200 € selon vos revenus), l\'éco-PTZ (jusqu\'à 50 000 €), la TVA à 5,5 % sur la fourniture et la pose, et les CEE (Certificats d\'Économies d\'Énergie). REN\'EAUX vous accompagne dans toutes les démarches.',
  },
  {
    q: 'Combien coûte l\'installation d\'une climatisation RGE à Mantes-la-Jolie ?',
    a: 'Le prix d\'une installation climatisation à Mantes-la-Jolie varie de 1 500 € à 6 000 € selon le type de système. Après déduction des aides MaPrimeRénov\' et CEE, votre reste à charge peut être fortement réduit. REN\'EAUX vous établit un devis gratuit incluant le calcul précis de vos aides.',
  },
  {
    q: 'Puis-je bénéficier de MaPrimeRénov\' pour une climatisation à Mantes-la-Jolie ?',
    a: 'Oui, sous conditions. MaPrimeRénov\' s\'applique principalement aux pompes à chaleur (air/air et air/eau) qui constituent votre système de chauffage principal. Pour un climatiseur en complément d\'un autre chauffage, d\'autres aides comme les CEE peuvent s\'appliquer. REN\'EAUX évalue votre situation gratuitement.',
  },
  {
    q: 'Quel délai pour l\'installation d\'une climatisation à Mantes-la-Jolie ?',
    a: 'Après visite technique gratuite et acceptation du devis, REN\'EAUX peut généralement intervenir pour l\'installation de votre climatisation à Mantes-la-Jolie sous 3 à 10 jours selon notre planning. Pour les urgences, contactez-nous au 07 67 06 05 24.',
  },
]

export function ClimatisationRGEMantes() {
  useEffect(() => {
    document.title = "Climatisation RGE Mantes-la-Jolie | Installateur RGE QualiPAC 78200 — REN'EAUX"
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'REN\'EAUX, installateur climatisation RGE QualiPAC à Mantes-la-Jolie (78200). Bénéficiez de MaPrimeRénov\', éco-PTZ et TVA à 5,5 % pour votre climatisation ou pompe à chaleur. ☎ 07 67 06 05 24')

    const schema = {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      "name": "REN'EAUX — Installateur Climatisation RGE Mantes-la-Jolie",
      "description": "Installateur climatisation et pompe à chaleur certifié RGE QualiPAC à Mantes-la-Jolie (78200). Éligible MaPrimeRénov\', éco-PTZ, TVA 5,5%.",
      "telephone": "0767060524",
      "email": "reneau.idf@gmail.com",
      "areaServed": "Mantes-la-Jolie, Yvelines, 78200",
      "hasCredential": "RGE QualiPAC",
    }
    let s = document.getElementById('schema-rge-mantes')
    if (!s) { s = document.createElement('script'); s.id = 'schema-rge-mantes'; s.setAttribute('type', 'application/ld+json'); document.head.appendChild(s) }
    s.textContent = JSON.stringify(schema)
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', padding: '5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(6,182,212,0.06) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.82rem' }}>Accueil</Link>
            <ChevronRight size={13} color="#475569" />
            <Link to="/zones-intervention" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.82rem' }}>Zones</Link>
            <ChevronRight size={13} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.82rem' }}>Climatisation RGE Mantes-la-Jolie</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }} className="rn-hero-rge-grid">
            <motion.div {...fadeUp}>
              {/* RGE Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.35)', borderRadius: '50px', padding: '0.45rem 1.1rem', marginBottom: '1.25rem' }}>
                <Award size={14} color="#A78BFA" />
                <span style={{ color: '#A78BFA', fontSize: '0.82rem', fontWeight: '700' }}>Installateur Certifié RGE QualiPAC</span>
              </div>

              <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: '900', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Climatisation RGE<br />
                <span style={{ background: 'linear-gradient(135deg, #06B6D4, #1E40AF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Mantes-la-Jolie (78200)
                </span>
              </h1>

              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '620px', marginBottom: '1.75rem' }}>
                <strong style={{ color: '#CBD5E1' }}>REN'EAUX</strong>, votre installateur de climatisation certifié <strong style={{ color: '#A78BFA' }}>RGE QualiPAC</strong> à Mantes-la-Jolie.
                Bénéficiez de <strong style={{ color: '#22C55E' }}>MaPrimeRénov'</strong>, de l'<strong style={{ color: '#22C55E' }}>éco-PTZ</strong> et de la <strong style={{ color: '#22C55E' }}>TVA à 5,5 %</strong>
                pour votre installation de climatisation ou pompe à chaleur dans les Yvelines (78).
              </p>

              {/* Aides pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {['MaPrimeRénov\'', 'Éco-PTZ', 'TVA 5,5 %', 'CEE'].map(a => (
                  <span key={a} style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', color: '#22C55E', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700' }}>{a}</span>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.9rem 1.75rem', borderRadius: '10px', fontWeight: '700', fontSize: '1rem', boxShadow: '0 4px 20px rgba(34,197,94,0.4)' }}>
                  <Phone size={19} /> 07 67 06 05 24
                </a>
                <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.9rem 1.75rem', borderRadius: '10px', fontWeight: '600', fontSize: '1rem' }}>
                  Devis RGE gratuit <ChevronRight size={17} />
                </Link>
              </div>
            </motion.div>

            {/* RGE Logo */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }} className="rn-rge-logo-col">
              <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: '20px', padding: '1.5rem 2rem' }}>
                <img src={rgeImage} alt="Logo RGE QualiPAC — Certification REN'EAUX" style={{ width: '180px', height: 'auto', display: 'block' }} />
              </div>
              <p style={{ color: '#64748B', fontSize: '0.78rem', textAlign: 'center', maxWidth: '200px' }}>
                Certification officielle délivrée par l'État
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Aides financières - bande verte */}
      <section style={{ background: 'linear-gradient(135deg, #064E3B, #065F46)', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ color: '#34D399', fontSize: '0.82rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Aides de l'État — Installateur RGE à Mantes-la-Jolie</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {aides.map((a, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
                style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(52,211,153,0.2)' }}>
                <div style={{ color: '#34D399', fontWeight: '800', fontSize: '1rem', marginBottom: '0.2rem' }}>{a.label}</div>
                <div style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{a.montant}</div>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem', lineHeight: 1.6 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }} className="rn-content-grid">
            <div>
              <motion.div {...fadeUp}>
                <h2 style={{ color: '#0F172A', fontSize: '1.65rem', fontWeight: '800', marginBottom: '1rem' }}>
                  Installateur climatisation RGE QualiPAC à Mantes-la-Jolie
                </h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  Vous recherchez un <strong>installateur climatisation RGE à Mantes-la-Jolie</strong> (78200) ? REN'EAUX est votre technicien certifié RGE QualiPAC dans les Yvelines. Notre certification vous garantit non seulement une installation réalisée dans les règles de l'art, mais aussi l'accès à <strong>toutes les aides financières de l'État</strong> : MaPrimeRénov', éco-PTZ, TVA à 5,5 % et certificats d'économies d'énergie (CEE).
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  À Mantes-la-Jolie, comme dans l'ensemble des Yvelines (78), la demande de climatisation et de pompe à chaleur est en forte croissance. Face à la hausse des températures et aux économies d'énergie réalisables, de plus en plus de particuliers et de professionnels font le choix d'équipements thermiques performants. REN'EAUX vous accompagne de la sélection du matériel jusqu'à la demande d'aides, en passant par la pose et la mise en service.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '2rem' }}>
                  Notre zone d'intervention couvre toute la communauté urbaine du Grand Paris Seine et Oise : <strong>Mantes-la-Jolie</strong>, Mantes-la-Ville, Buchelay, Magnanville, Rosny-sur-Seine, Rolleboise et l'ensemble du Mantois. Voir aussi notre service d'<Link to="/entretien-climatisation-rge-mantes-la-jolie" style={{ color: '#06B6D4', textDecoration: 'none' }}>entretien climatisation RGE à Mantes</Link> et de <Link to="/depannage-climatisation-rge-mantes-la-jolie" style={{ color: '#06B6D4', textDecoration: 'none' }}>dépannage climatisation RGE à Mantes</Link>.
                </p>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>
                  Pourquoi choisir un installateur RGE à Mantes-la-Jolie ?
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {pourquoiRge.map((r, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', padding: '0.4rem 0' }}>
                      <CheckCircle size={16} color="#22C55E" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.5 }}>{r}</span>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>
                  Nos installations climatisation RGE à Mantes-la-Jolie
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {types.map((t, i) => (
                    <div key={i} style={{ background: '#F8FAFC', borderRadius: '14px', padding: '1.4rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <h3 style={{ color: '#0F172A', fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.4rem' }}>{t.title}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.65 }}>{t.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Zone couverte */}
                <div style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '16px', padding: '1.5rem', marginBottom: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <MapPin size={18} color="#06B6D4" />
                    <h3 style={{ color: '#0F172A', fontWeight: '700', fontSize: '1rem' }}>Zone couverte autour de Mantes-la-Jolie</h3>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.75 }}>
                    REN'EAUX intervient à <strong>Mantes-la-Jolie (78200)</strong>, Mantes-la-Ville (78711), Buchelay (78200), Magnanville (78200), Rolleboise (78270), Rosny-sur-Seine (78710), Bonnières-sur-Seine, Limay (78520) et dans toutes les communes du Mantois.
                  </p>
                  <Link to="/zones-intervention" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', marginTop: '0.5rem', display: 'inline-block' }}>
                    Voir toutes nos zones d'intervention →
                  </Link>
                </div>

                {/* FAQ */}
                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                  FAQ — Climatisation RGE Mantes-la-Jolie
                </h2>
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

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Logo RGE */}
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '1.75rem', border: '1px solid rgba(139,92,246,0.25)', textAlign: 'center' }}>
                <img src={rgeImage} alt="Certification RGE QualiPAC REN'EAUX" style={{ width: '150px', height: 'auto', margin: '0 auto 1rem', display: 'block' }} />
                <div style={{ color: '#A78BFA', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Certifié RGE QualiPAC</div>
                <p style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.6 }}>Certification officielle pour l'accès aux aides de l'État à Mantes-la-Jolie.</p>
              </div>

              {/* CTA */}
              <div style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', borderRadius: '20px', padding: '1.75rem', border: '1px solid rgba(34,197,94,0.2)' }}>
                <div style={{ color: '#22C55E', fontSize: '0.82rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Devis Gratuit</div>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>Devis climatisation RGE à Mantes-la-Jolie sous 24h. Calcul des aides inclus.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '700' }}><Phone size={17} /> 07 67 06 05 24</a>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '600', fontSize: '0.875rem' }}>Formulaire de devis</Link>
                </div>
              </div>

              {/* Aides */}
              <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(34,197,94,0.15)' }}>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Aides disponibles</h3>
                {[{ label: 'MaPrimeRénov\'', val: 'Jusqu\'à 10 200 €' }, { label: 'Éco-PTZ', val: 'Jusqu\'à 50 000 €' }, { label: 'TVA réduite', val: '5,5 % au lieu de 20 %' }, { label: 'CEE', val: 'Variable selon offres' }].map((a, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ color: '#475569', fontSize: '0.82rem' }}>{a.label}</span>
                    <span style={{ color: '#22C55E', fontWeight: '700', fontSize: '0.82rem' }}>{a.val}</span>
                  </div>
                ))}
              </div>

              {/* Pages liées */}
              <div>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Pages Mantes-la-Jolie</h3>
                {[
                  { label: 'Entretien climatisation RGE Mantes', href: '/entretien-climatisation-rge-mantes-la-jolie' },
                  { label: 'Dépannage climatisation RGE Mantes', href: '/depannage-climatisation-rge-mantes-la-jolie' },
                  { label: 'Installation climatisation', href: '/installation-climatisation' },
                  { label: 'Pompe à chaleur', href: '/pompe-a-chaleur' },
                ].map(l => (
                  <Link key={l.href} to={l.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1E40AF', textDecoration: 'none', fontSize: '0.85rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <ChevronRight size={14} /> {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ background: 'linear-gradient(135deg, #064E3B, #1E40AF)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <img src={rgeImage} alt="RGE QualiPAC" style={{ height: '60px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            </div>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '900', marginBottom: '0.75rem' }}>
              Votre devis climatisation RGE à Mantes-la-Jolie
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
              REN'EAUX calcule vos aides MaPrimeRénov', éco-PTZ et CEE inclus dans votre devis. <br />Réponse sous 24h — Diagnostic gratuit à Mantes-la-Jolie.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '1rem 2rem', borderRadius: '12px', fontWeight: '700', fontSize: '1rem', boxShadow: '0 4px 20px rgba(34,197,94,0.4)' }}>
                <Phone size={20} /> Appeler maintenant
              </a>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.25)', color: '#fff', textDecoration: 'none', padding: '1rem 2rem', borderRadius: '12px', fontWeight: '600' }}>
                Devis en ligne
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .rn-content-grid { grid-template-columns: 1fr !important; }
          .rn-two-col { grid-template-columns: 1fr !important; }
          .rn-hero-rge-grid { grid-template-columns: 1fr !important; }
          .rn-rge-logo-col { display: none !important; }
        }
      `}</style>
    </div>
  )
}

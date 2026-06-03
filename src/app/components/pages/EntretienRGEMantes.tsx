import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Award, CheckCircle, Settings, Shield, Clock, Star } from 'lucide-react'
import rgeImage from '../../../imports/logo-qualipac.png'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const prestations = [
  'Nettoyage complet des filtres de l\'unité intérieure', 'Nettoyage et désinfection de l\'évaporateur', 'Contrôle d\'étanchéité du circuit frigorigène (obligatoire)',
  'Vérification du niveau de charge en gaz frigorigène', 'Contrôle du compresseur et des organes de sécurité', 'Inspection du circuit électrique et des connexions',
  'Nettoyage et vérification du circuit de condensats', 'Test de fonctionnement modes froid et chaud', 'Mesure des températures et pressions de service',
  'Attestation d\'entretien remise au client (obligatoire)', 'Rapport d\'intervention complet signé', 'Conseils d\'utilisation pour économiser l\'énergie',
]

const reglementaire = [
  {
    title: 'Contrôle d\'étanchéité annuel obligatoire',
    desc: 'Tout système de climatisation contenant plus de 2 kg de fluide frigorigène est soumis à un contrôle d\'étanchéité annuel obligatoire (décret n°2011-396). REN\'EAUX, technicien habilité, réalise ce contrôle à Mantes-la-Jolie et vous remet l\'attestation réglementaire.',
  },
  {
    title: 'Attestation d\'entretien annuelle',
    desc: 'La loi française impose une attestation d\'entretien annuel pour tout système de climatisation. Ce document est souvent requis par les assurances et les bailleurs pour valider la couverture de l\'installation.',
  },
  {
    title: 'Maintien de la garantie constructeur',
    desc: 'Un entretien régulier par un technicien certifié est indispensable pour maintenir la garantie constructeur de votre climatisation. Sans entretien annuel attesté, la garantie peut être annulée par le fabricant.',
  },
]

const avantages = [
  { icon: <Shield size={20} />, title: 'Performance maintenue', desc: 'Un climatiseur bien entretenu conserve 100 % de ses performances initiales. Sans entretien, il perd jusqu\'à 30 % d\'efficacité en 3 ans.' },
  { icon: <Clock size={20} />, title: 'Durée de vie prolongée', desc: 'L\'entretien annuel multiplie la durée de vie de votre équipement par 2. Évitez les pannes prématurées et les coûts de remplacement.' },
  { icon: <Star size={20} />, title: 'Économies d\'énergie', desc: 'Un climatiseur propre et bien réglé consomme moins d\'électricité. L\'entretien s\'autofinance en 1 à 2 ans d\'économies sur votre facture.' },
  { icon: <CheckCircle size={20} />, title: 'Air sain et purifié', desc: 'Les filtres et l\'évaporateur encrassés propagent bactéries et moisissures dans l\'air ambiant. L\'entretien RGE garantit une qualité d\'air optimale.' },
]

const faqs = [
  {
    q: 'L\'entretien climatisation est-il obligatoire à Mantes-la-Jolie ?',
    a: 'Oui. En France, l\'entretien annuel des systèmes de climatisation contenant plus de 2 kg de fluide frigorigène est obligatoire (décret n°2011-396). De plus, de nombreux assureurs et bailleurs exigent une attestation d\'entretien annuelle. REN\'EAUX réalise cet entretien réglementaire à Mantes-la-Jolie.',
  },
  {
    q: 'Pourquoi choisir un technicien RGE pour l\'entretien de ma climatisation à Mantes ?',
    a: 'Un technicien RGE comme REN\'EAUX est certifié par l\'État et formé aux dernières normes et techniques. Seul un technicien habilité peut manipuler les fluides frigorigènes et réaliser le contrôle d\'étanchéité réglementaire. De plus, un entretien réalisé par un technicien RGE préserve l\'éligibilité de votre installation aux aides de l\'État.',
  },
  {
    q: 'À quelle fréquence faut-il entretenir sa climatisation à Mantes-la-Jolie ?',
    a: 'Un entretien annuel est recommandé pour tout système de climatisation, idéalement au printemps avant la saison estivale. Pour les systèmes VRV/VRF et les installations professionnelles, un entretien semestriel est conseillé. REN\'EAUX propose des contrats d\'entretien climatisation annuels ou bi-annuels à Mantes-la-Jolie.',
  },
  {
    q: 'Proposez-vous un contrat d\'entretien climatisation à Mantes-la-Jolie ?',
    a: 'Oui. REN\'EAUX propose des contrats d\'entretien climatisation annuels à Mantes-la-Jolie pour particuliers et professionnels. Le contrat inclut la visite de maintenance, le rapport d\'intervention, l\'attestation réglementaire et une intervention préventive prioritaire en cas de panne.',
  },
  {
    q: 'Combien coûte l\'entretien d\'une climatisation à Mantes-la-Jolie ?',
    a: 'Le prix d\'un entretien annuel de climatisation à Mantes-la-Jolie varie selon le type et le nombre d\'équipements. Contactez REN\'EAUX au 07 67 06 05 24 pour un devis d\'entretien gratuit et sans engagement. Des formules de contrat avantageux sont disponibles.',
  },
  {
    q: 'Que risque-t-on si on ne fait pas entretenir sa climatisation à Mantes ?',
    a: 'Sans entretien régulier, votre climatisation perd progressivement en performance (jusqu\'à 30 % en 3 ans), consomme davantage d\'électricité, risque une panne prématurée et peut propager des micro-organismes dans l\'air. De plus, la garantie constructeur peut être annulée et l\'attestation réglementaire sera absente en cas de contrôle.',
  },
]

export function EntretienRGEMantes() {
  useEffect(() => {
    document.title = "Entretien Climatisation RGE Mantes-la-Jolie | Maintenance Agréée 78200 — REN'EAUX"
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'REN\'EAUX assure l\'entretien et la maintenance de climatisation à Mantes-la-Jolie par un technicien RGE certifié. Contrôle d\'étanchéité obligatoire, attestation réglementaire, contrat annuel. ☎ 07 67 06 05 24')

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Entretien Climatisation RGE Mantes-la-Jolie",
      "provider": { "@type": "LocalBusiness", "name": "REN'EAUX", "telephone": "0767060524" },
      "areaServed": "Mantes-la-Jolie, 78200",
      "description": "Entretien et maintenance climatisation par technicien certifié RGE QualiPAC à Mantes-la-Jolie. Contrôle d'étanchéité obligatoire, attestation réglementaire.",
    }
    let s = document.getElementById('schema-entretien-mantes')
    if (!s) { s = document.createElement('script'); s.id = 'schema-entretien-mantes'; s.setAttribute('type', 'application/ld+json'); document.head.appendChild(s) }
    s.textContent = JSON.stringify(schema)
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', padding: '5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 40%, rgba(34,197,94,0.06) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.82rem' }}>Accueil</Link>
            <ChevronRight size={13} color="#475569" />
            <Link to="/maintenance-climatisation" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.82rem' }}>Maintenance</Link>
            <ChevronRight size={13} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.82rem' }}>Entretien RGE Mantes-la-Jolie</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }} className="rn-hero-rge-grid">
            <motion.div {...fadeUp}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '50px', padding: '0.45rem 1.1rem', marginBottom: '1.25rem' }}>
                <Settings size={14} color="#22C55E" />
                <span style={{ color: '#22C55E', fontSize: '0.82rem', fontWeight: '700' }}>Entretien Réglementaire — Technicien RGE Certifié</span>
              </div>

              <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: '900', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Entretien Climatisation RGE<br />
                <span style={{ background: 'linear-gradient(135deg, #22C55E, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Mantes-la-Jolie (78200)
                </span>
              </h1>

              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '620px', marginBottom: '1.75rem' }}>
                REN'EAUX assure l'<strong style={{ color: '#CBD5E1' }}>entretien annuel</strong> et la <strong style={{ color: '#CBD5E1' }}>maintenance</strong> de vos climatisations à Mantes-la-Jolie par un technicien certifié <strong style={{ color: '#22C55E' }}>RGE QualiPAC</strong>.
                Contrôle d'étanchéité réglementaire, attestation officielle, contrat d'entretien annuel.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {['Contrôle étanchéité', 'Attestation légale', 'Rapport complet', 'Toutes marques'].map(a => (
                  <span key={a} style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', color: '#22C55E', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.78rem', fontWeight: '600' }}>{a}</span>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.9rem 1.75rem', borderRadius: '10px', fontWeight: '700', fontSize: '1rem', boxShadow: '0 4px 20px rgba(34,197,94,0.4)' }}>
                  <Phone size={19} /> 07 67 06 05 24
                </a>
                <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.9rem 1.75rem', borderRadius: '10px', fontWeight: '600', fontSize: '1rem' }}>
                  Contrat entretien <ChevronRight size={17} />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }} className="rn-rge-logo-col">
              <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '20px', padding: '1.5rem 2rem' }}>
                <img src={rgeImage} alt="Logo RGE QualiPAC — Entretien certifié Mantes-la-Jolie" style={{ width: '180px', height: 'auto', display: 'block' }} />
              </div>
              <p style={{ color: '#64748B', fontSize: '0.78rem', textAlign: 'center', maxWidth: '200px' }}>Technicien habilité — Entretien réglementaire</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }} className="rn-content-grid">
            <div>
              <motion.div {...fadeUp}>
                <h2 style={{ color: '#0F172A', fontSize: '1.65rem', fontWeight: '800', marginBottom: '1rem' }}>
                  Technicien RGE pour l'entretien climatisation à Mantes-la-Jolie
                </h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  L'<strong>entretien climatisation à Mantes-la-Jolie</strong> est une obligation légale ET une nécessité technique. REN'EAUX, technicien certifié RGE QualiPAC, réalise l'entretien complet de votre installation selon les normes en vigueur, avec remise de l'attestation réglementaire officielle.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  Un <strong>entretien climatisation régulier</strong> à Mantes-la-Jolie garantit des performances optimales, une consommation d'énergie maîtrisée et une durée de vie maximale de votre équipement. Sans entretien, un climatiseur perd jusqu'à 30 % de son rendement en 3 ans et consomme significativement plus d'électricité.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '2rem' }}>
                  Nous intervenons pour l'entretien de toutes les marques de climatisation à Mantes-la-Jolie : Daikin, Mitsubishi Electric, Atlantic, Fujitsu, LG, Panasonic, Samsung, Toshiba, Hitachi. Voir aussi notre service d'<Link to="/installation-climatisation" style={{ color: '#06B6D4', textDecoration: 'none' }}>installation climatisation</Link> et de <Link to="/depannage-climatisation-rge-mantes-la-jolie" style={{ color: '#06B6D4', textDecoration: 'none' }}>dépannage RGE à Mantes</Link>.
                </p>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Ce que comprend notre entretien climatisation à Mantes-la-Jolie</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {prestations.map((p, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', padding: '0.4rem 0' }}>
                      <CheckCircle size={15} color="#22C55E" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.5 }}>{p}</span>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Obligations réglementaires — Entretien climatisation à Mantes</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                  {reglementaire.map((r, i) => (
                    <div key={i} style={{ background: 'rgba(6,182,212,0.04)', border: '1px solid rgba(6,182,212,0.15)', borderRadius: '14px', padding: '1.35rem' }}>
                      <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{r.title}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.7 }}>{r.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Pourquoi entretenir régulièrement votre climatisation ?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.1rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {avantages.map((a, i) => (
                    <div key={i} style={{ background: '#F8FAFC', borderRadius: '14px', padding: '1.35rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <div style={{ color: '#22C55E', marginBottom: '0.6rem' }}>{a.icon}</div>
                      <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.35rem', fontSize: '0.95rem' }}>{a.title}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.65 }}>{a.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>FAQ — Entretien Climatisation RGE Mantes-la-Jolie</h2>
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
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '1.75rem', border: '1px solid rgba(34,197,94,0.2)', textAlign: 'center' }}>
                <img src={rgeImage} alt="RGE QualiPAC" style={{ width: '140px', height: 'auto', margin: '0 auto 1rem', display: 'block' }} />
                <div style={{ color: '#22C55E', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Technicien RGE Certifié</div>
                <p style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>Entretien réglementaire avec attestation officielle à Mantes-la-Jolie.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '700' }}><Phone size={17} /> 07 67 06 05 24</a>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '600', fontSize: '0.875rem' }}>Demander un contrat</Link>
                </div>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '1rem', fontSize: '0.95rem' }}>Inclus dans l'entretien</h3>
                {[{ icon: <CheckCircle size={15} />, text: 'Attestation réglementaire' }, { icon: <Shield size={15} />, text: 'Contrôle d\'étanchéité' }, { icon: <Settings size={15} />, text: 'Rapport d\'intervention' }, { icon: <Clock size={15} />, text: 'Priorité dépannage' }, { icon: <Star size={15} />, text: 'Toutes marques couvertes' }].map((g, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.875rem', marginBottom: '0.45rem' }}>
                    <span style={{ color: '#22C55E' }}>{g.icon}</span> {g.text}
                  </div>
                ))}
              </div>

              <div>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Pages Mantes-la-Jolie</h3>
                {[
                  { label: 'Climatisation RGE Mantes', href: '/climatisation-rge-mantes-la-jolie' },
                  { label: 'Dépannage RGE Mantes', href: '/depannage-climatisation-rge-mantes-la-jolie' },
                  { label: 'Maintenance climatisation', href: '/maintenance-climatisation' },
                  { label: 'Installation climatisation', href: '/installation-climatisation' },
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
      <style>{`@media (max-width: 768px) { .rn-content-grid { grid-template-columns: 1fr !important; } .rn-two-col { grid-template-columns: 1fr !important; } .rn-hero-rge-grid { grid-template-columns: 1fr !important; } .rn-rge-logo-col { display: none !important; } }`}</style>
    </div>
  )
}

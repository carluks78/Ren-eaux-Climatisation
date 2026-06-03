import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, ChevronRight, Award, CheckCircle, Zap, AlertTriangle, Shield, Clock } from 'lucide-react'
import rgeImage from '../../../imports/logo-qualipac.png'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const pannes = [
  { title: 'Climatisation ne refroidit plus', desc: 'Fuite de gaz frigorigène, compresseur défaillant, filtre encrassé. REN\'EAUX dépanne à Mantes-la-Jolie sous 24h.' },
  { title: 'Climatisation qui fait du bruit', desc: 'Vibrations, sifflements ou claquements anormaux. Diagnostic précis et réparation par notre technicien RGE à Mantes.' },
  { title: 'Fuite d\'eau intérieure', desc: 'Bac de condensation bouché, pompe de relevage HS. Réparation rapide et propre à Mantes-la-Jolie et alentours.' },
  { title: 'Code erreur affiché', desc: 'E1, E2, F3, U4… REN\'EAUX décode et répare toutes les erreurs sur toutes les marques de climatisation.' },
  { title: 'Climatisation ne s\'allume pas', desc: 'Panne électrique, fusible grillé, télécommande défectueuse. Intervention rapide à Mantes (78200).' },
  { title: 'Mauvaise odeur de la clim', desc: 'Moisissures dans les filtres ou l\'évaporateur. Nettoyage, désinfection et traitement anti-moisissures professionnel.' },
]

const engagements = [
  { icon: <Zap size={20} />, title: 'Intervention sous 24–48h', desc: 'REN\'EAUX intervient sous 24 à 48h à Mantes-la-Jolie pour tout dépannage climatisation. Urgences le jour même selon disponibilité.' },
  { icon: <Shield size={20} />, title: 'Diagnostic transparent', desc: 'Avant toute réparation, REN\'EAUX vous présente le diagnostic complet et un devis de réparation détaillé. Aucune surprise.' },
  { icon: <CheckCircle size={20} />, title: 'Technicien RGE certifié', desc: 'Notre technicien RGE est habilité à manipuler les fluides frigorigènes et à effectuer le contrôle d\'étanchéité réglementaire.' },
  { icon: <Clock size={20} />, title: 'Toutes marques dépannées', desc: 'Daikin, Mitsubishi, Atlantic, Fujitsu, LG, Samsung, Panasonic, Toshiba... Nous dépannons toutes les marques à Mantes.' },
]

const faqs = [
  {
    q: 'REN\'EAUX intervient-il en urgence pour un dépannage climatisation à Mantes-la-Jolie ?',
    a: 'Oui. REN\'EAUX propose un service de dépannage climatisation rapide à Mantes-la-Jolie (78200) et dans l\'ensemble du Mantois. Appelez le 07 67 06 05 24 pour une intervention le jour même ou le lendemain selon votre urgence. Nous intervenons 7j/7 pour les urgences.',
  },
  {
    q: 'Pourquoi faire appel à un dépanneur RGE pour ma climatisation à Mantes ?',
    a: 'Un dépanneur RGE comme REN\'EAUX est habilité à manipuler les fluides frigorigènes (F-gaz) et à réaliser le contrôle d\'étanchéité réglementaire. Il peut également effectuer une recharge de fluide si nécessaire, ce qui est interdit aux non-habilités. De plus, une réparation réalisée par un technicien RGE préserve votre garantie constructeur.',
  },
  {
    q: 'Combien coûte un dépannage climatisation à Mantes-la-Jolie ?',
    a: 'Le coût d\'un dépannage climatisation à Mantes-la-Jolie comprend un forfait de déplacement/diagnostic et le coût de la réparation (pièces + main-d\'œuvre). REN\'EAUX vous communique le devis complet avant toute intervention. Appelez le 07 67 06 05 24 pour une estimation.',
  },
  {
    q: 'Pouvez-vous recharger le gaz de ma climatisation à Mantes-la-Jolie ?',
    a: 'Oui. REN\'EAUX est habilité pour la manipulation et la recharge des fluides frigorigènes (R32, R410A, R407C, R22). La recharge doit obligatoirement être précédée d\'une recherche de fuite et d\'une réparation de celle-ci. Nous effectuons tout cela en une intervention à Mantes-la-Jolie.',
  },
  {
    q: 'Ma climatisation perd du gaz, est-ce une panne grave à Mantes ?',
    a: 'Une fuite de gaz frigorigène n\'est pas directement dangereuse mais elle dégrade les performances et peut endommager le compresseur si elle n\'est pas traitée rapidement. Contactez REN\'EAUX dès que possible au 07 67 06 05 24 pour un diagnostic et une réparation à Mantes-la-Jolie.',
  },
  {
    q: 'Quelles marques de climatisation dépannez-vous à Mantes-la-Jolie ?',
    a: 'REN\'EAUX dépanne toutes les marques de climatisation à Mantes-la-Jolie : Daikin, Mitsubishi Electric, Atlantic, Fujitsu, LG, Panasonic, Samsung, Toshiba, Hitachi, Carrier, Trane, et bien d\'autres. Aucune marque ne nous résiste.',
  },
]

export function DepannageRGEMantes() {
  useEffect(() => {
    document.title = "Dépannage Climatisation RGE Mantes-la-Jolie | Réparation Rapide 78200 — REN'EAUX"
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'REN\'EAUX dépanne votre climatisation à Mantes-la-Jolie (78200). Technicien RGE certifié, intervention sous 24h, toutes marques réparées. Recharge gaz, diagnostic gratuit. ☎ 07 67 06 05 24')

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Dépannage Climatisation RGE Mantes-la-Jolie",
      "provider": { "@type": "LocalBusiness", "name": "REN'EAUX", "telephone": "0767060524" },
      "areaServed": "Mantes-la-Jolie, 78200",
      "description": "Dépannage et réparation climatisation par technicien certifié RGE QualiPAC à Mantes-la-Jolie. Intervention sous 24h, toutes marques, recharge gaz.",
    }
    let s = document.getElementById('schema-depannage-mantes')
    if (!s) { s = document.createElement('script'); s.id = 'schema-depannage-mantes'; s.setAttribute('type', 'application/ld+json'); document.head.appendChild(s) }
    s.textContent = JSON.stringify(schema)
  }, [])

  return (
    <div style={{ paddingTop: '70px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1A0A0A 0%, #2D1515 40%, #0F172A 100%)', padding: '5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 75% 40%, rgba(239,68,68,0.07) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.82rem' }}>Accueil</Link>
            <ChevronRight size={13} color="#475569" />
            <Link to="/depannage-climatisation" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.82rem' }}>Dépannage</Link>
            <ChevronRight size={13} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.82rem' }}>Dépannage RGE Mantes-la-Jolie</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }} className="rn-hero-rge-grid">
            <motion.div {...fadeUp}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '50px', padding: '0.45rem 1.1rem', marginBottom: '1.25rem' }}>
                <Zap size={14} color="#F87171" />
                <span style={{ color: '#F87171', fontSize: '0.82rem', fontWeight: '700' }}>Urgence 24h — Technicien RGE Certifié</span>
              </div>

              <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: '900', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Dépannage Climatisation RGE<br />
                <span style={{ background: 'linear-gradient(135deg, #F87171, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Mantes-la-Jolie (78200) — Intervention Rapide
                </span>
              </h1>

              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '620px', marginBottom: '1.75rem' }}>
                Votre <strong style={{ color: '#CBD5E1' }}>climatisation est en panne à Mantes-la-Jolie</strong> ? REN'EAUX, technicien certifié <strong style={{ color: '#F87171' }}>RGE QualiPAC</strong>, intervient sous 24h pour diagnostiquer et réparer votre climatisation. Toutes marques — Recharge gaz possible.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {['Intervention 24h', 'Toutes marques', 'Recharge gaz', 'Diagnostic inclus', 'Devis avant réparation'].map(a => (
                  <span key={a} style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#F87171', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.78rem', fontWeight: '600' }}>{a}</span>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#EF4444', color: '#fff', textDecoration: 'none', padding: '0.9rem 1.75rem', borderRadius: '10px', fontWeight: '700', fontSize: '1rem', boxShadow: '0 4px 20px rgba(239,68,68,0.4)' }}>
                  <Phone size={19} /> Urgence — 07 67 06 05 24
                </a>
                <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.9rem 1.75rem', borderRadius: '10px', fontWeight: '600', fontSize: '1rem' }}>
                  Décrire ma panne <ChevronRight size={17} />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }} className="rn-rge-logo-col">
              <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '20px', padding: '1.5rem 2rem' }}>
                <img src={rgeImage} alt="Logo RGE QualiPAC — Dépannage certifié Mantes-la-Jolie" style={{ width: '180px', height: 'auto', display: 'block' }} />
              </div>
              <p style={{ color: '#64748B', fontSize: '0.78rem', textAlign: 'center', maxWidth: '200px' }}>Technicien habilité F-Gaz — Dépannage réglementaire</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Urgence bar */}
      <section style={{ background: '#991B1B', padding: '1rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FCA5A5', fontWeight: '700' }}>
            <AlertTriangle size={18} /> Climatisation en panne à Mantes-la-Jolie ?
          </div>
          <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#fff', color: '#991B1B', textDecoration: 'none', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: '800', fontSize: '1rem' }}>
            <Phone size={17} /> 07 67 06 05 24
          </a>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Intervention sous 24h — 7j/7 pour les urgences</span>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }} className="rn-content-grid">
            <div>
              <motion.div {...fadeUp}>
                <h2 style={{ color: '#0F172A', fontSize: '1.65rem', fontWeight: '800', marginBottom: '1rem' }}>
                  Dépanneur climatisation RGE à Mantes-la-Jolie — Intervention rapide
                </h2>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  REN'EAUX est votre <strong>dépanneur climatisation RGE à Mantes-la-Jolie</strong> (78200). En tant que technicien certifié RGE QualiPAC et habilité à la manipulation des fluides frigorigènes, nous sommes autorisés à effectuer tous types de réparations sur vos systèmes de climatisation : diagnostic de panne, remplacement de pièces, recharge en gaz frigorigène et contrôle d'étanchéité réglementaire.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '1rem' }}>
                  Contrairement à un technicien non certifié, <strong>REN'EAUX peut légalement recharger le gaz frigorigène</strong> de votre climatisation à Mantes-la-Jolie. Cette intervention nécessite une habilitation spécifique (catégorie I) que possède notre technicien. En cas de fuite, nous localisons la fuite, réparons le circuit et rechargeons le fluide lors d'une même intervention.
                </p>
                <p style={{ color: '#475569', lineHeight: 1.85, marginBottom: '2rem' }}>
                  Nous intervenons pour le <strong>dépannage climatisation dans tout le secteur de Mantes-la-Jolie</strong> : Mantes-la-Jolie, Mantes-la-Ville, Buchelay, Magnanville, Limay, Rosny-sur-Seine. Voir aussi notre service d'<Link to="/entretien-climatisation-rge-mantes-la-jolie" style={{ color: '#06B6D4', textDecoration: 'none' }}>entretien RGE à Mantes</Link> et notre service d'<Link to="/installation-climatisation" style={{ color: '#06B6D4', textDecoration: 'none' }}>installation climatisation</Link>.
                </p>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Pannes climatisation réparées à Mantes-la-Jolie</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {pannes.map((p, i) => (
                    <div key={i} style={{ background: '#F8FAFC', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(239,68,68,0.1)' }}>
                      <h3 style={{ color: '#0F172A', fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.4rem' }}>{p.title}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.65 }}>{p.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Nos engagements pour le dépannage à Mantes-la-Jolie</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.1rem', marginBottom: '2.5rem' }} className="rn-two-col">
                  {engagements.map((e, i) => (
                    <div key={i} style={{ background: '#F8FAFC', borderRadius: '14px', padding: '1.35rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <div style={{ color: '#EF4444', marginBottom: '0.6rem' }}>{e.icon}</div>
                      <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.35rem', fontSize: '0.95rem' }}>{e.title}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.65 }}>{e.desc}</p>
                    </div>
                  ))}
                </div>

                <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>FAQ — Dépannage Climatisation RGE Mantes-la-Jolie</h2>
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
              <div style={{ background: '#0F172A', borderRadius: '20px', padding: '1.75rem', border: '1px solid rgba(239,68,68,0.25)', textAlign: 'center' }}>
                <div style={{ color: '#F87171', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Urgence Dépannage</div>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>Climatisation en panne à Mantes ? Appelez REN'EAUX — Technicien RGE disponible sous 24h.</p>
                <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#EF4444', color: '#fff', textDecoration: 'none', padding: '1rem', borderRadius: '10px', fontWeight: '800', fontSize: '1.05rem', boxShadow: '0 4px 15px rgba(239,68,68,0.4)', marginBottom: '0.75rem' }}><Phone size={19} /> 07 67 06 05 24</a>
                <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', padding: '0.8rem', borderRadius: '10px', fontWeight: '600', fontSize: '0.875rem' }}>Décrire ma panne</Link>
              </div>

              <div style={{ background: '#0F172A', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(139,92,246,0.2)', textAlign: 'center' }}>
                <img src={rgeImage} alt="RGE QualiPAC" style={{ width: '130px', height: 'auto', margin: '0 auto 0.75rem', display: 'block' }} />
                <div style={{ color: '#A78BFA', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Habilité F-Gaz Catégorie I</div>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Nos interventions</h3>
                {[{ icon: <CheckCircle size={15} />, text: 'Diagnostic complet' }, { icon: <Zap size={15} />, text: 'Recharge gaz frigorigène' }, { icon: <Shield size={15} />, text: 'Contrôle étanchéité' }, { icon: <Clock size={15} />, text: 'Intervention 24–48h' }, { icon: <Award size={15} />, text: 'Garantie RGE' }].map((g, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.875rem', marginBottom: '0.45rem' }}>
                    <span style={{ color: '#EF4444' }}>{g.icon}</span> {g.text}
                  </div>
                ))}
              </div>

              <div>
                <h3 style={{ color: '#0F172A', fontWeight: '700', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Pages Mantes-la-Jolie</h3>
                {[
                  { label: 'Climatisation RGE Mantes', href: '/climatisation-rge-mantes-la-jolie' },
                  { label: 'Entretien RGE Mantes', href: '/entretien-climatisation-rge-mantes-la-jolie' },
                  { label: 'Dépannage climatisation', href: '/depannage-climatisation' },
                  { label: 'Zones d\'intervention', href: '/zones-intervention' },
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

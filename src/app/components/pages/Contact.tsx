import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Phone, Mail, MapPin, Clock, ChevronRight, MessageCircle, Send, CheckCircle } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const services = [
  'Installation climatisation', 'Dépannage climatisation', 'Maintenance / Entretien', 'Pompe à chaleur',
  'Climatisation gainable', 'Systèmes VRV / VRF', 'Climatisation professionnelle', 'Climatisation industrielle', 'Autre'
]

export function Contact() {
  useEffect(() => {
    document.title = "Contact — REN'EAUX | Devis Climatisation Limay, Yvelines 78 — 07 67 06 05 24"
  }, [])

  const [form, setForm] = useState({ nom: '', email: '', telephone: '', service: '', message: '', ville: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const waMessage = encodeURIComponent(`Bonjour REN'EAUX, je souhaite obtenir un devis pour une climatisation ou une pompe à chaleur.`)

  return (
    <div style={{ paddingTop: '70px' }}>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Link to="/" style={{ color: '#06B6D4', textDecoration: 'none', fontSize: '0.85rem' }}>Accueil</Link>
            <ChevronRight size={14} color="#475569" />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Contact</span>
          </div>
          <motion.div {...fadeUp}>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1rem' }}>
              Contactez REN'EAUX<br />
              <span style={{ color: '#06B6D4' }}>Devis Gratuit — Réponse sous 24h</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '640px' }}>
              Un projet de climatisation, une panne, un entretien à planifier ? Contactez-nous par téléphone, WhatsApp ou via le formulaire. REN'EAUX vous répond dans la journée.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ background: '#F8FAFC', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }} className="rn-contact-grid">

            {/* Left — coordonnées */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <motion.div {...fadeUp}>
                <h2 style={{ color: '#0F172A', fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.5rem' }}>Nos coordonnées</h2>

                {/* Phone */}
                <a href="tel:0767060524" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', borderRadius: '14px', padding: '1.25rem', textDecoration: 'none', border: '1px solid rgba(34,197,94,0.3)', marginBottom: '0.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} color="#22C55E" />
                  </div>
                  <div>
                    <div style={{ color: '#64748B', fontSize: '0.8rem', marginBottom: '0.1rem' }}>Téléphone</div>
                    <div style={{ color: '#0F172A', fontWeight: '800', fontSize: '1.1rem' }}>07 67 06 05 24</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href={`https://wa.me/33767060524?text=${waMessage}`} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', borderRadius: '14px', padding: '1.25rem', textDecoration: 'none', border: '1px solid rgba(37,211,102,0.3)', marginBottom: '0.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37,211,102,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={22} color="#25D366" />
                  </div>
                  <div>
                    <div style={{ color: '#64748B', fontSize: '0.8rem', marginBottom: '0.1rem' }}>WhatsApp</div>
                    <div style={{ color: '#0F172A', fontWeight: '700' }}>Message rapide & devis</div>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:reneau.idf@gmail.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', borderRadius: '14px', padding: '1.25rem', textDecoration: 'none', border: '1px solid rgba(6,182,212,0.3)', marginBottom: '0.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(6,182,212,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} color="#06B6D4" />
                  </div>
                  <div>
                    <div style={{ color: '#64748B', fontSize: '0.8rem', marginBottom: '0.1rem' }}>Email</div>
                    <div style={{ color: '#0F172A', fontWeight: '700' }}>reneau.idf@gmail.com</div>
                  </div>
                </a>

                {/* Adresse */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '0.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(30,64,175,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} color="#1E40AF" />
                  </div>
                  <div>
                    <div style={{ color: '#64748B', fontSize: '0.8rem', marginBottom: '0.1rem' }}>Zone d'intervention</div>
                    <div style={{ color: '#0F172A', fontWeight: '700', fontSize: '0.9rem' }}>Limay • Yvelines (78) • Eure (27) • IDF</div>
                  </div>
                </div>

                {/* Horaires */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} color="#F59E0B" />
                  </div>
                  <div>
                    <div style={{ color: '#64748B', fontSize: '0.8rem', marginBottom: '0.1rem' }}>Horaires</div>
                    <div style={{ color: '#0F172A', fontWeight: '700', fontSize: '0.9rem' }}>Lun–Sam : 8h–19h | Urgences 7j/7</div>
                  </div>
                </div>
              </motion.div>

              {/* Services rapides */}
              <motion.div {...fadeUp} transition={{ delay: 0.1 }} style={{ background: '#0F172A', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(6,182,212,0.15)' }}>
                <div style={{ color: '#06B6D4', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nos services</div>
                {[
                  { label: 'Installation climatisation', href: '/installation-climatisation' },
                  { label: 'Dépannage climatisation', href: '/depannage-climatisation' },
                  { label: 'Pompe à chaleur', href: '/pompe-a-chaleur' },
                  { label: 'Climatisation gainable', href: '/climatisation-gainable' },
                ].map(l => (
                  <Link key={l.href} to={l.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8', textDecoration: 'none', fontSize: '0.875rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <ChevronRight size={14} color="#06B6D4" /> {l.label}
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.06)' }}>
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <CheckCircle size={60} color="#22C55E" style={{ margin: '0 auto 1rem' }} />
                    <h2 style={{ color: '#0F172A', fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Message envoyé !</h2>
                    <p style={{ color: '#475569', lineHeight: 1.7 }}>Merci pour votre demande. REN'EAUX vous contactera dans les plus brefs délais (sous 24h maximum).</p>
                    <a href="tel:0767060524" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#22C55E', color: '#fff', textDecoration: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '700', marginTop: '1.5rem' }}>
                      <Phone size={17} /> Appeler maintenant — 07 67 06 05 24
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 style={{ color: '#0F172A', fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.3rem' }}>Demandez votre devis gratuit</h2>
                    <p style={{ color: '#64748B', fontSize: '0.875rem', marginBottom: '2rem' }}>Réponse garantie sous 24h — Diagnostic offert</p>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="rn-form-row">
                        <div>
                          <label style={{ display: 'block', color: '#475569', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Nom & Prénom *</label>
                          <input name="nom" required value={form.nom} onChange={handleChange} placeholder="Jean Dupont" style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box', outline: 'none', background: '#F8FAFC' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', color: '#475569', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Téléphone *</label>
                          <input name="telephone" required value={form.telephone} onChange={handleChange} placeholder="06 XX XX XX XX" type="tel" style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box', outline: 'none', background: '#F8FAFC' }} />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="rn-form-row">
                        <div>
                          <label style={{ display: 'block', color: '#475569', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Email</label>
                          <input name="email" value={form.email} onChange={handleChange} placeholder="jean@email.com" type="email" style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box', outline: 'none', background: '#F8FAFC' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', color: '#475569', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Ville *</label>
                          <input name="ville" required value={form.ville} onChange={handleChange} placeholder="Limay, Mantes..." style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box', outline: 'none', background: '#F8FAFC' }} />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', color: '#475569', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Service souhaité *</label>
                        <select name="service" required value={form.service} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '8px', fontSize: '0.875rem', background: '#F8FAFC', outline: 'none' }}>
                          <option value="">Choisissez un service...</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', color: '#475569', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Votre message *</label>
                        <textarea name="message" required value={form.message} onChange={handleChange} rows={4} placeholder="Décrivez votre projet ou votre panne (superficie, type de logement, urgence...)" style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box', outline: 'none', background: '#F8FAFC', resize: 'vertical' }} />
                      </div>

                      <button type="submit" style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                        background: 'linear-gradient(135deg, #1E40AF, #06B6D4)', color: '#fff',
                        border: 'none', padding: '1rem', borderRadius: '10px',
                        fontWeight: '700', fontSize: '1rem', cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(6,182,212,0.4)',
                      }}>
                        <Send size={18} /> Envoyer ma demande de devis
                      </button>

                      <p style={{ color: '#94A3B8', fontSize: '0.78rem', textAlign: 'center', marginTop: '-0.25rem' }}>
                        Réponse garantie sous 24h — Diagnostic et devis 100% gratuits
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .rn-contact-grid { grid-template-columns: 1fr !important; } .rn-form-row { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}

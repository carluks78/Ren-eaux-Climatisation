import { useState } from 'react'
import { Phone, MessageCircle, FileText, X, MessageSquare } from 'lucide-react'

export function FloatingCTAs() {
  const [expanded, setExpanded] = useState(false)

  const waMessage = encodeURIComponent("Bonjour REN'EAUX, je souhaite obtenir un devis pour une climatisation ou une pompe à chaleur.")
  const smsBody = encodeURIComponent("Bonjour REN'EAUX, je souhaite obtenir un devis.")

  return (
    <div style={{
      position: 'fixed', bottom: '1.5rem', right: '1.25rem',
      zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.6rem',
    }}>
      {/* Expandable menu */}
      {expanded && (
        <>
          {/* WhatsApp */}
          <a href={`https://wa.me/33767060524?text=${waMessage}`}
            target="_blank" rel="noopener noreferrer"
            title="WhatsApp REN'EAUX"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: '#25D366', color: '#fff', textDecoration: 'none',
              padding: '0.65rem 1.1rem 0.65rem 0.8rem', borderRadius: '50px',
              boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
              fontSize: '0.875rem', fontWeight: '600',
              animation: 'slideInRight 0.2s ease',
            }}>
            <MessageCircle size={18} /> WhatsApp
          </a>

          {/* SMS */}
          <a href={`sms:0767060524?body=${smsBody}`}
            title="SMS REN'EAUX"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: '#06B6D4', color: '#fff', textDecoration: 'none',
              padding: '0.65rem 1.1rem 0.65rem 0.8rem', borderRadius: '50px',
              boxShadow: '0 4px 20px rgba(6,182,212,0.5)',
              fontSize: '0.875rem', fontWeight: '600',
              animation: 'slideInRight 0.25s ease',
            }}>
            <MessageSquare size={18} /> SMS
          </a>

          {/* Devis */}
          <a href="/contact"
            title="Demander un devis"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: '#1E40AF', color: '#fff', textDecoration: 'none',
              padding: '0.65rem 1.1rem 0.65rem 0.8rem', borderRadius: '50px',
              boxShadow: '0 4px 20px rgba(30,64,175,0.5)',
              fontSize: '0.875rem', fontWeight: '600',
              animation: 'slideInRight 0.3s ease',
            }}>
            <FileText size={18} /> Devis gratuit
          </a>
        </>
      )}

      {/* Phone - always visible */}
      <a href="tel:0767060524"
        title="Appeler REN'EAUX"
        style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          background: '#22C55E', color: '#fff', textDecoration: 'none',
          padding: '0.75rem 1.25rem 0.75rem 0.9rem', borderRadius: '50px',
          boxShadow: '0 4px 25px rgba(34,197,94,0.6)',
          fontSize: '0.925rem', fontWeight: '700',
        }}>
        <Phone size={19} />
        <span className="rn-phone-text">07 67 06 05 24</span>
      </a>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        title={expanded ? 'Fermer' : 'Plus de contacts'}
        style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: expanded ? '#475569' : 'linear-gradient(135deg, #1E40AF, #06B6D4)',
          border: 'none', cursor: 'pointer', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.2s',
        }}>
        {expanded ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 480px) {
          .rn-phone-text { display: none; }
        }
      `}</style>
    </div>
  )
}

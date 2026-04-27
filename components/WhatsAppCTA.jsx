import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  return (
    <a
      data-testid="whatsapp-cta"
      href="https://wa.me/919987130371?text=Hi%20Property%20Edge%2C%20I%27d%20like%20a%2072-hour%20free%20funnel%20audit%20for%20my%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Property Edge"
      className="fixed bottom-20 md:bottom-20 right-5 md:right-8 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white shadow-2xl shadow-accent/40 group-hover:scale-110 transition-transform duration-500">
        <MessageCircle size={22} strokeWidth={2.2} />
      </span>
    </a>
  );
}

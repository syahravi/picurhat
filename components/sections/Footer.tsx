import { SITE_CONFIG } from '@/lib/constants';
import { Instagram, Mail, MapPin, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-teal)] text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-white/80">{SITE_CONFIG.tagline}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Instagram size={18} />
                <span>{SITE_CONFIG.instagram}</span>
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={18} />
                <span>{SITE_CONFIG.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#hero" className="block text-white/80 hover:text-white transition-colors">
                Beranda
              </a>
              <a href="#testimonials" className="block text-white/80 hover:text-white transition-colors">
                Testimoni
              </a>
              <a href="#about" className="block text-white/80 hover:text-white transition-colors">
                Tentang Kami
              </a>
              <a href="#pricing" className="block text-white/80 hover:text-white transition-colors">
                Harga
              </a>
              <a href="#booking" className="block text-white/80 hover:text-white transition-colors">
                Booking
              </a>
              <a href="#faq" className="block text-white/80 hover:text-white transition-colors">
                FAQ
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm text-center sm:text-left">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>

          {/* Back to top */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <span className="text-sm">Kembali ke atas</span>
            <div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <ArrowUp size={16} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Community', href: '/community' },
    { name: 'Resources', href: '/resources' },
  ];

  const resources = [
    { name: 'PDF Library', href: '/resources' },
    { name: 'Video Lectures', href: '/courses' },
    { name: 'AI Assistant', action: 'open-ai-chat' },
    { name: 'Certifications', href: '/certifications' },
  ];

  const support = [
    { name: 'FAQs', href: '/faqs' },
    { name: 'Our Team', href: '/team' },
    { name: 'History', href: '/history' },
    { name: 'Support Us', href: '/support' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="ZerøChem Logo" className="h-16 w-16 object-contain" />
              <div>
                <h3 className="font-display text-2xl font-bold">ZerøChem</h3>
                <p className="text-sm text-primary-foreground/70">Organic & Chemical Free</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Growing Food, Growing Futures. India's revolutionary platform for interactive 
              organic farming education.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <motion.a
                href="https://instagram.com/hriday.raheja"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/9669161445"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-[#25D366] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:hriday.rahejacse2024@indoreinstitue.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-leaf transition-all"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  {link.action === 'open-ai-chat' ? (
                    <button
                      onClick={() => window.dispatchEvent(new Event('open-ai-chat'))}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Contact */}
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <span>9669161445</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 ZerøChem. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Made with 🌱 for a greener future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

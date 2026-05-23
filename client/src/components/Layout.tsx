import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Offers', href: '/offers' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-background"
        }`}
      >
        <nav className="container flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Elevate Studio Logo"
                className="w-80 h-80 object-contain group-hover:scale-110 transition-transform"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a className="text-foreground hover:text-primary font-medium transition-colors">
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a>
                <Button className="btn-primary">Get Started</Button>
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-fade-up">
            <div className="container py-4 flex flex-col gap-4">
              {navItems.map(item => (
                <Link key={item.href} href={item.href}>
                  <a
                    className="text-foreground hover:text-primary font-medium transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <a onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-primary w-full">Get Started</Button>
                </a>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-charcoal text-white mt-20">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex-col items-center gap-1 mb-4">
                <img
                  src="/logo.png"
                  alt="Elevate Studio Logo"
                  className="w-30 h-30 object-cover"
                />
                <p className="text-gray-400 text-sm">
                  Transforming businesses into high-performing digital brands.
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-[#1B4332] mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services">
                    <a className="hover:text-primary transition-colors">
                      Website Development
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="hover:text-primary transition-colors">
                      SEO Optimization
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="hover:text-primary transition-colors">
                      Lead Generation
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="hover:text-primary transition-colors">
                      Digital Strategy
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-[#1B4332] mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/our-work">
                    <a className="hover:text-primary transition-colors">
                      Our Work
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="hover:text-primary transition-colors">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials">
                    <a className="hover:text-primary transition-colors">
                      Testimonials
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-primary transition-colors">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-[#1B4332] mb-4">Get In Touch</h3>
              <p className="text-sm text-gray-400 mb-2">
                Remote Digital Agency
              </p>
              <p className="text-sm text-gray-400 mb-4">Based in Pakistan</p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-sm font-medium"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Elevate Studio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

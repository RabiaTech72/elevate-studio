import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ArrowRight, TrendingUp, Globe, Search, Zap, Users, Target } from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom-built websites that convert visitors into customers.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Dominate search rankings and drive organic traffic.',
    },
    {
      icon: Zap,
      title: 'Lead Generation',
      description: 'Build systems that consistently attract qualified leads.',
    },
    {
      icon: Target,
      title: 'Digital Strategy',
      description: 'Strategic roadmaps for sustainable business growth.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Systems',
      description: 'Scalable systems that multiply your business results.',
    },
    {
      icon: Users,
      title: 'Business Consulting',
      description: 'Expert guidance for digital transformation.',
    },
  ];

  const testimonials = [
    {
      quote: 'They understood our vision from day one and brought ideas to life better than we imagined. The process was smooth, collaborative, and the results exceeded our expectations.',
      author: 'James Carter',
      role: 'Founder, Northfield',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    },
    {
      quote: 'Working with Elevate Studio transformed our online presence. Our website traffic increased by 300% in just three months.',
      author: 'Sarah Mitchell',
      role: 'CEO, Digital Ventures',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    {
      quote: 'Professional, responsive, and results-driven. They delivered exactly what we needed and more. Highly recommended!',
      author: 'Michael Chen',
      role: 'Director, Growth Labs',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663676095213/TaiNYQ4uB8JnwHeoNKSYYS/hero-background-RdvFMb7FvLaLPCC7FwLb2b.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />

        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="inline-block text-primary font-semibold text-sm md:text-base mb-4 uppercase tracking-wider">
                Digital Growth Agency
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-display text-charcoal mb-6 leading-tight">
                Elevate Your Business to New Heights
              </h1>
              <p className="text-xl md:text-1xl text-gray-700 mb-8 leading-relaxed">
                Transform your online presence with premium websites, proven SEO strategies, and lead generation systems that drive real business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <a>
                    <Button className="btn-primary text-lg px-8 py-6 group">
                      Start Your Growth
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </a>
                </Link>
                <Link href="/our-work">
                  <a>
                    <Button variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/5">
                      View Our Work
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Graph Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-display text-charcoal mb-6">
                Watch Your Business Grow
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our proven strategies have helped businesses achieve exponential growth. From startups to established companies, we deliver measurable results.
              </p>
              <ul className="space-y-4">
                {[
                  '300% average traffic increase',
                  '50+ successful client transformations',
                  '5x ROI on digital investments',
                  '24/7 dedicated support',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663676095213/TaiNYQ4uB8JnwHeoNKSYYS/growth-graph-visual-DxBAuAE2abmdcoaUUpjm2V.webp"
                alt="Growth visualization"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-display text-charcoal mb-6">
              Everything You Need to Grow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to transform your business and accelerate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="stagger-item card-premium"
                  style={{
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663676095213/TaiNYQ4uB8JnwHeoNKSYYS/service-cards-pattern-o5oMTDbgyZuCUR52UVb9B2.webp)',
                    backgroundSize: 'cover',
                  }}
                >
                  <div className="absolute inset-0 bg-white/70 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-primary text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-display text-charcoal mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 animate-fade-up">
            <Link href="/services">
              <a>
                <Button className="btn-primary text-lg px-8 py-6">
                  Explore All Services
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663676095213/TaiNYQ4uB8JnwHeoNKSYYS/testimonial-accent-gEVh6XhaKQFiXhqVzVmAUP.webp)',
            backgroundSize: 'cover',
          }}
        />

        <div className="container relative z-10">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Client Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-display text-charcoal mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partnerships built on trust. Results that speak for themselves.
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-scale-in">
            <div className="card-premium">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="font-bold text-charcoal">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentTestimonial ? 'bg-primary w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-up">
            <Link href="/testimonials">
              <a>
                <Button variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/5">
                  Read More Testimonials
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 text-center animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-display mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create a digital growth strategy that delivers real results. Schedule your free consultation today.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                Get Your Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

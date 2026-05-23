import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ArrowRight, Globe, Search, Zap, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom-built websites that convert visitors into customers.',
      features: [
        'Responsive design for all devices',
        'Fast loading speeds optimized for performance',
        'SEO-friendly architecture',
        'Easy-to-manage content systems',
        'Integrated analytics and tracking',
      ],
      price: 'Custom Quote',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Dominate search rankings and drive organic traffic.',
      features: [
        'Comprehensive keyword research',
        'On-page and technical SEO',
        'Content strategy and creation',
        'Link building campaigns',
        'Monthly performance reports',
      ],
      price: 'Starting at $999/mo',
    },
    {
      icon: Zap,
      title: 'Lead Generation Systems',
      description: 'Build systems that consistently attract qualified leads.',
      features: [
        'Landing page design and optimization',
        'Lead capture forms and workflows',
        'Email marketing automation',
        'CRM integration',
        'Lead scoring and nurturing',
      ],
      price: 'Custom Quote',
    },
    {
      icon: Target,
      title: 'Digital Growth Strategy',
      description: 'Strategic roadmaps for sustainable business growth.',
      features: [
        'Market and competitor analysis',
        'Growth opportunity identification',
        'Multi-channel strategy development',
        'Implementation roadmap',
        'Quarterly strategy reviews',
      ],
      price: 'Starting at $2,999',
    },
    {
      icon: TrendingUp,
      title: 'Business Transformation',
      description: 'Complete digital transformation for established businesses.',
      features: [
        'Digital audit and assessment',
        'Process optimization',
        'Team training and support',
        'Technology implementation',
        'Change management support',
      ],
      price: 'Custom Quote',
    },
    {
      icon: Users,
      title: 'Business Consulting',
      description: 'Expert guidance for digital transformation.',
      features: [
        'Strategic business planning',
        'Digital roadmap development',
        'Performance optimization',
        'Team coaching and mentoring',
        'Ongoing advisory support',
      ],
      price: 'Custom Quote',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-white">
        <div className="container">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-display text-charcoal mb-6">
              Everything You Need to Grow
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive digital solutions designed to transform your business and accelerate growth. From strategy to execution, we handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="stagger-item card-premium flex flex-col"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary text-white flex items-center justify-center mb-6">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-display text-charcoal mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-6">
                    <p className="text-lg font-bold text-primary mb-4">
                      {service.price}
                    </p>
                    <Link href="/contact">
                      <a>
                        <Button className="btn-primary w-full">
                          Get Started
                          <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-display text-charcoal mb-6">
              Why Choose Elevate Studio?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Proven Track Record',
                description: 'Over 50 successful client transformations with measurable results and long-term partnerships.',
              },
              {
                title: 'Expert Team',
                description: 'Experienced professionals with deep expertise in digital marketing, development, and strategy.',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored strategies and solutions designed specifically for your business goals and challenges.',
              },
              {
                title: '24/7 Support',
                description: 'Dedicated support team available to help you succeed and answer any questions.',
              },
              {
                title: 'Data-Driven Approach',
                description: 'All decisions backed by analytics and data to ensure maximum ROI on your investments.',
              },
              {
                title: 'Transparent Communication',
                description: 'Regular updates, detailed reports, and open communication throughout the entire process.',
              },
            ].map((item, i) => (
              <div key={i} className="stagger-item">
                <h3 className="text-2xl font-bold text-display text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-display mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss which services are right for your business and create a plan for success.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                Schedule a Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

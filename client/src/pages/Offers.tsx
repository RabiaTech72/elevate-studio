import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function Offers() {
  const offers = [
    {
      title: 'Free Website Audit',
      description: 'Get a comprehensive analysis of your current website performance.',
      features: [
        'Complete website analysis',
        'SEO audit report',
        'Performance review',
        'Competitor comparison',
        'Actionable recommendations',
      ],
      price: 'Free',
      cta: 'Claim Offer',
      highlighted: false,
    },
    {
      title: 'SEO Growth Plan',
      description: 'Custom SEO strategy to dominate search rankings.',
      features: [
        'Keyword research & analysis',
        'On-page optimization',
        'Technical SEO audit',
        'Content strategy',
        '90-day action plan',
        'Monthly reporting',
      ],
      price: '$999',
      period: 'one-time',
      cta: 'Get SEO Plan',
      highlighted: true,
    },
    {
      title: 'Landing Page Discount',
      description: 'High-converting landing pages at special pricing.',
      features: [
        'Custom landing page design',
        'Mobile-responsive',
        'Conversion optimization',
        'A/B testing setup',
        'Analytics integration',
        '30-day support',
      ],
      price: '$1,499',
      period: 'per page',
      cta: 'Get Discount',
      highlighted: false,
    },
    {
      title: 'Startup Package',
      description: 'Complete digital foundation for new businesses.',
      features: [
        'Professional website',
        'SEO optimization',
        'Google Business setup',
        'Social media profiles',
        'Email setup',
        '3 months support',
      ],
      price: '$2,999',
      period: 'one-time',
      cta: 'Start Your Business',
      highlighted: true,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-white">
        <div className="container">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Special Offers
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-display text-charcoal mb-6">
              Exclusive Packages & Deals
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Limited-time offers designed to help you get started with digital growth at special pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, i) => (
              <div
                key={i}
                className={`stagger-item rounded-2xl overflow-hidden transition-all duration-300 ${
                  offer.highlighted
                    ? 'md:col-span-1 ring-2 ring-primary shadow-2xl scale-105 md:scale-100'
                    : 'shadow-lg'
                }`}
              >
                <div className={`p-8 md:p-10 ${offer.highlighted ? 'bg-primary text-white' : 'bg-white'}`}>
                  {offer.highlighted && (
                    <div className="flex items-center gap-2 mb-4">
                      <Zap size={20} className="text-yellow-300" />
                      <span className="text-sm font-bold uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className={`text-3xl font-bold text-display mb-3 ${
                    offer.highlighted ? 'text-white' : 'text-charcoal'
                  }`}>
                    {offer.title}
                  </h3>

                  <p className={`text-lg mb-6 leading-relaxed ${
                    offer.highlighted ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {offer.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`text-4xl font-bold ${
                        offer.highlighted ? 'text-white' : 'text-primary'
                      }`}>
                        {offer.price}
                      </span>
                      {offer.period && (
                        <span className={`text-sm ${
                          offer.highlighted ? 'text-white/70' : 'text-gray-600'
                        }`}>
                          {offer.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {offer.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle size={20} className={`flex-shrink-0 mt-0.5 ${
                          offer.highlighted ? 'text-yellow-300' : 'text-primary'
                        }`} />
                        <span className={offer.highlighted ? 'text-white' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <a>
                      <Button className={`w-full text-lg py-6 font-semibold ${
                        offer.highlighted
                          ? 'bg-white text-primary hover:bg-gray-100'
                          : 'btn-primary'
                      }`}>
                        {offer.cta}
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-display text-charcoal mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Can I customize these packages?',
                a: 'Absolutely! These are starting points. We can customize any package to fit your specific needs and budget.',
              },
              {
                q: 'What if I\'m not satisfied with the results?',
                a: 'We stand behind our work. If you\'re not satisfied, we\'ll work with you to make it right or provide a refund.',
              },
              {
                q: 'How long does implementation take?',
                a: 'Timeline varies by package. Free audits take 3-5 days, websites typically 4-6 weeks, and SEO plans are ongoing.',
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes! We offer flexible payment options for larger projects. Contact us to discuss what works best for you.',
              },
              {
                q: 'What happens after the initial project?',
                a: 'We provide ongoing support and can help with maintenance, updates, and optimization to keep your results growing.',
              },
              {
                q: 'Are there any hidden fees?',
                a: 'No hidden fees. Everything is transparent and outlined upfront. You\'ll know exactly what you\'re investing.',
              },
            ].map((item, i) => (
              <div key={i} className="stagger-item bg-white rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {item.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.a}
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
            Don't Miss Out on These Offers
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Limited-time pricing available. Reach out today to claim your offer and start your growth journey.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                Claim Your Offer
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

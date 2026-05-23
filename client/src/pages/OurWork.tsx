import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function OurWork() {
  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'TechRetail Co.',
      category: 'Website Development + SEO',
      challenge: 'Low online visibility and poor conversion rates',
      results: [
        { metric: '350%', description: 'Traffic Increase' },
        { metric: '45%', description: 'Conversion Rate Improvement' },
        { metric: '2.5x', description: 'Revenue Growth' },
      ],
      description: 'We redesigned their entire e-commerce platform with modern UX and implemented comprehensive SEO strategies. Result: 350% increase in organic traffic and 45% improvement in conversion rates within 6 months.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&q=80',
    },
    {
      title: 'Lead Generation System Launch',
      client: 'B2B Services Inc.',
      category: 'Lead Generation + Marketing Automation',
      challenge: 'Inconsistent lead flow and poor lead quality',
      results: [
        { metric: '500+', description: 'Qualified Leads/Month' },
        { metric: '35%', description: 'Conversion Rate' },
        { metric: '8x', description: 'ROI' },
      ],
      description: 'Built a complete lead generation system with landing pages, email automation, and CRM integration. Now generating 500+ qualified leads monthly with 35% conversion rate.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
      title: 'Digital Strategy & Scaling',
      client: 'StartUp Ventures',
      category: 'Digital Strategy + Growth',
      challenge: 'Unclear growth strategy and limited online presence',
      results: [
        { metric: '400%', description: 'User Growth' },
        { metric: '12', description: 'Months to Scale' },
        { metric: '$5M', description: 'Revenue Achieved' },
      ],
      description: 'Developed and implemented a comprehensive digital growth strategy covering all channels. Helped the startup scale from 0 to 5M in revenue within 12 months.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    },
    {
      title: 'SEO Domination Campaign',
      client: 'Local Services Agency',
      category: 'SEO Optimization',
      challenge: 'Competing with established players in search results',
      results: [
        { metric: '1st', description: 'Page Rankings' },
        { metric: '250%', description: 'Organic Traffic' },
        { metric: '60', description: 'Keywords Ranked' },
      ],
      description: 'Executed a targeted SEO campaign that ranked them #1 for 60 high-value keywords. Increased organic traffic by 250% and established them as industry leaders.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    },
    {
      title: 'Brand Redesign & Relaunch',
      client: 'Corporate Services Ltd.',
      category: 'Website Development + Branding',
      challenge: 'Outdated image and poor market positioning',
      results: [
        { metric: '180%', description: 'Lead Increase' },
        { metric: '92%', description: 'Mobile Performance' },
        { metric: '3x', description: 'Engagement' },
      ],
      description: 'Complete brand redesign and website overhaul. New positioning increased leads by 180% and improved mobile performance to 92 score.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    },
    {
      title: 'Marketing Automation Setup',
      client: 'Professional Services Firm',
      category: 'Marketing Automation + Lead Nurturing',
      challenge: 'Manual processes and lost leads',
      results: [
        { metric: '70%', description: 'Time Saved' },
        { metric: '40%', description: 'More Leads Closed' },
        { metric: '5x', description: 'Efficiency Gain' },
      ],
      description: 'Implemented marketing automation workflows that reduced manual work by 70% and increased lead closure rate by 40%.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-white">
        <div className="container">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Case Studies
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-display text-charcoal mb-6">
              Business Transformation Stories
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how we've helped businesses achieve remarkable growth through strategic digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className="stagger-item group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 bg-white">
                  <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">
                    {study.category}
                  </span>

                  <h3 className="text-2xl font-bold text-display text-charcoal mb-2">
                    {study.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    Client: <span className="font-semibold text-charcoal">{study.client}</span>
                  </p>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-border">
                    {study.results.map((result, j) => (
                      <div key={j} className="text-center">
                        <p className="text-2xl font-bold text-primary mb-1">
                          {result.metric}
                        </p>
                        <p className="text-xs text-gray-600">
                          {result.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Read Full Case Study
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-display text-charcoal mb-6">
              Our Impact by the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Successful Projects' },
              { number: '300%', label: 'Average Traffic Growth' },
              { number: '$50M+', label: 'Client Revenue Generated' },
              { number: '95%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="stagger-item text-center">
                <p className="text-5xl md:text-6xl font-bold text-primary mb-3">
                  {stat.number}
                </p>
                <p className="text-xl text-gray-600">
                  {stat.label}
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
            Your Success Story Starts Here
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create your own transformation story. Schedule a free consultation to discuss your goals.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

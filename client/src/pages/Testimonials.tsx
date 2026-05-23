import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ArrowRight, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'They understood our vision from day one and brought ideas to life better than we imagined. The process was smooth, collaborative, and the results exceeded our expectations.',
      author: 'James Carter',
      role: 'Founder, Northfield',
      company: 'Northfield',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      rating: 5,
    },
    {
      quote: 'Working with Elevate Studio transformed our online presence. Our website traffic increased by 300% in just three months. Highly professional and results-driven.',
      author: 'Sarah Mitchell',
      role: 'CEO, Digital Ventures',
      company: 'Digital Ventures',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      rating: 5,
    },
    {
      quote: 'Professional, responsive, and results-driven. They delivered exactly what we needed and more. The team went above and beyond expectations. Highly recommended!',
      author: 'Michael Chen',
      role: 'Director, Growth Labs',
      company: 'Growth Labs',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      rating: 5,
    },
    {
      quote: 'The SEO strategy they implemented has been game-changing for our business. We\'re now ranking #1 for all our target keywords. Exceptional work!',
      author: 'Emily Rodriguez',
      role: 'Marketing Manager, TechCorp',
      company: 'TechCorp',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      rating: 5,
    },
    {
      quote: 'Their lead generation system has transformed how we acquire customers. We\'re now getting 500+ qualified leads per month. Incredible ROI!',
      author: 'David Thompson',
      role: 'Sales Director, B2B Solutions',
      company: 'B2B Solutions',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      rating: 5,
    },
    {
      quote: 'From strategy to execution, they handled everything perfectly. Our business has grown 5x since we started working with them. Best decision we made!',
      author: 'Lisa Anderson',
      role: 'Owner, Anderson Services',
      company: 'Anderson Services',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      rating: 5,
    },
    {
      quote: 'The team is knowledgeable, responsive, and truly cares about our success. They\'ve become an extension of our team. Couldn\'t ask for better partners.',
      author: 'Robert Williams',
      role: 'Founder, Innovation Hub',
      company: 'Innovation Hub',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
      rating: 5,
    },
    {
      quote: 'Outstanding work! They redesigned our website and implemented a new marketing strategy. Our leads have tripled and our brand looks premium.',
      author: 'Jennifer Lee',
      role: 'Business Owner, Lee Consulting',
      company: 'Lee Consulting',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
      rating: 5,
    },
  ];

  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '300%', label: 'Avg. Growth' },
    { number: '95%', label: 'Satisfaction' },
    { number: '$50M+', label: 'Revenue Generated' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-white">
        <div className="container">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-display text-charcoal mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real results from real businesses. See how we've helped entrepreneurs and companies achieve their growth goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-sm bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="stagger-item text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="stagger-item card-premium flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed flex-1 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-charcoal">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials CTA */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-display text-charcoal mb-6">
              Hear Directly from Our Clients
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Watch video testimonials from satisfied clients sharing their success stories and results.
            </p>
            <Button className="btn-primary text-lg px-8 py-6">
              Watch Video Testimonials
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-display mb-6">
            Ready to Become a Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join 50+ businesses that have transformed their growth trajectory with Elevate Studio.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-white">
        <div className="container">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-display text-charcoal mb-6">
              Let's Start Your Growth Journey
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions? Want to discuss your project? We'd love to hear from you. Reach out and let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-display text-charcoal mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Email</h3>
                    <a href="mailto:hello@elevatestudio.com" className="text-primary hover:underline">
                      hello@elevatestudio.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      +92 300 1234567
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Location</h3>
                    <p className="text-gray-600">
                      Remote Digital Agency<br />
                      Based in Pakistan
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-bold text-charcoal mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-in-right">
              <div className="card-premium">
                <h2 className="text-3xl font-bold text-display text-charcoal mb-8">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 1234567"
                      className="w-full"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project and goals..."
                      required
                      className="w-full min-h-32"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-lg py-6 font-semibold"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={20} />
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll get back to you within 24 hours.
                  </p>
                </form>
              </div>
            </div>
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
                q: 'How quickly will you respond to my inquiry?',
                a: 'We aim to respond to all inquiries within 24 hours. For urgent matters, feel free to reach out via WhatsApp.',
              },
              {
                q: 'Do you offer free consultations?',
                a: 'Yes! We offer a free initial consultation to discuss your project, goals, and how we can help.',
              },
              {
                q: 'What is your typical project timeline?',
                a: 'Timeline depends on the project scope. Websites typically take 4-6 weeks, while SEO is an ongoing process.',
              },
              {
                q: 'Can you work with my existing team?',
                a: 'Absolutely! We love collaborating with existing teams and can integrate seamlessly into your workflow.',
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
    </Layout>
  );
}

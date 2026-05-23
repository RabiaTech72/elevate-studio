import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Complete Guide to SEO in 2026',
      excerpt: 'Learn the latest SEO strategies and best practices that will help your website dominate search rankings.',
      author: 'Sarah Johnson',
      date: 'March 15, 2026',
      readTime: '8 min read',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    },
    {
      id: 2,
      title: 'Converting Website Visitors into Customers',
      excerpt: 'Discover proven conversion optimization techniques that turn casual visitors into paying customers.',
      author: 'Michael Chen',
      date: 'March 10, 2026',
      readTime: '6 min read',
      category: 'Conversion',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
    },
    {
      id: 3,
      title: 'Building a Lead Generation Machine',
      excerpt: 'Step-by-step guide to creating a system that consistently generates qualified leads for your business.',
      author: 'James Wilson',
      date: 'March 5, 2026',
      readTime: '10 min read',
      category: 'Lead Generation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    },
    {
      id: 4,
      title: 'Digital Marketing Trends to Watch',
      excerpt: 'Stay ahead of the curve with these emerging digital marketing trends that will shape 2026.',
      author: 'Emma Davis',
      date: 'February 28, 2026',
      readTime: '7 min read',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    },
    {
      id: 5,
      title: 'Website Performance: Speed Matters',
      excerpt: 'Why page speed is critical for SEO and user experience, and how to optimize your website.',
      author: 'David Brown',
      date: 'February 20, 2026',
      readTime: '5 min read',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&q=80',
    },
    {
      id: 6,
      title: 'Mobile-First Design: The New Standard',
      excerpt: 'How to design websites that prioritize mobile users and deliver exceptional experiences.',
      author: 'Lisa Anderson',
      date: 'February 15, 2026',
      readTime: '6 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-white">
        <div className="container">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Blog
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-display text-charcoal mb-6">
              Digital Growth Insights
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert tips, strategies, and insights to help you grow your business online.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding-sm bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 animate-fade-up">
            <div>
              <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-4">
                Featured Article
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-display text-charcoal mb-6">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {blogPosts[0].author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {blogPosts[0].date}
                </div>
                <div>{blogPosts[0].readTime}</div>
              </div>
              <Button className="btn-primary">
                Read Article
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-display text-charcoal mb-12 animate-fade-up">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, i) => (
              <div
                key={post.id}
                className="stagger-item group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-display text-charcoal mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding-sm bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-display text-charcoal mb-8 animate-fade-up">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-4 animate-fade-up">
            {['SEO', 'Conversion', 'Lead Generation', 'Marketing', 'Performance', 'Design'].map((cat) => (
              <button
                key={cat}
                className="px-6 py-3 bg-background hover:bg-primary hover:text-white text-charcoal rounded-full font-semibold transition-all duration-300 border-2 border-transparent hover:border-primary"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-display mb-6">
            Get Digital Growth Tips Weekly
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for exclusive insights, strategies, and tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary hover:bg-gray-100 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

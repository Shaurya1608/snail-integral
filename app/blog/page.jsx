"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const categories = ["All", "Agriculture", "Brand Strategy", "Communication", "Industry Insights", "Rural Marketing"];

const blogPosts = [
  {
    id: 1,
    title: "How Agriculture Brands Can Build Trust with Farming Communities",
    excerpt: "Building brand trust in rural India requires a fundamentally different approach. Discover the communication principles that separate successful agri-brands from those that fail to connect.",
    category: "Agriculture",
    date: "June 18, 2026",
    readTime: "7 min read",
    featured: true,
    image: "/blog/blog-01.png",
    author: "Amit BK Khare",
    authorRole: "Founder & Managing Partner",
  },
  {
    id: 2,
    title: "The Rise of Biological Inputs: Communication Challenges in a Changing Market",
    excerpt: "As biological products gain ground in Indian agriculture, companies face unique challenges in communicating complex science to farming audiences.",
    category: "Agriculture",
    date: "June 10, 2026",
    readTime: "5 min read",
    featured: false,
    image: "/blog/blog-02.png",
    author: "Arti Khare",
    authorRole: "Director & Co-Founder",
  },
  {
    id: 3,
    title: "Why Rural Brands Must Think Differently About Digital Marketing",
    excerpt: "Digital penetration in rural India is accelerating, but the assumptions that guide urban digital campaigns often fail in rural contexts.",
    category: "Rural Marketing",
    date: "May 28, 2026",
    readTime: "6 min read",
    featured: false,
    image: "/blog/blog-03.png",
    author: "Shubham Joshi",
    authorRole: "Lead - Creative & Concept",
  },
  {
    id: 4,
    title: "Brand Strategy for Agri-Input Companies: Lessons from Three Seasons",
    excerpt: "After working with dozens of agri-input brands over three years, we've identified the patterns that separate winning brand strategies from those that plateau.",
    category: "Brand Strategy",
    date: "May 15, 2026",
    readTime: "8 min read",
    featured: false,
    image: "/blog/blog-04.png",
    author: "Amit BK Khare",
    authorRole: "Founder & Managing Partner",
  },
  {
    id: 5,
    title: "The Language of Agriculture: Why Regional Communication Wins",
    excerpt: "India's farming communities are linguistically diverse. We explore why brands that invest in regional language communication consistently outperform those that don't.",
    category: "Communication",
    date: "May 2, 2026",
    readTime: "5 min read",
    featured: false,
    image: "/blog/blog-05.png",
    author: "Arpita Kaur Matharu",
    authorRole: "Lead - Digital Marketing",
  },
  {
    id: 6,
    title: "State of Agriculture Communication in India: 2026 Industry Report",
    excerpt: "Our annual analysis of trends, challenges, and opportunities in agriculture and rural communication across India's key farming states.",
    category: "Industry Insights",
    date: "April 20, 2026",
    readTime: "12 min read",
    featured: false,
    image: "/blog/blog-06.png",
    author: "Arti Khare",
    authorRole: "Director & Co-Founder",
  },
  {
    id: 7,
    title: "Event Marketing in Agribusiness: What Brand R.Comm Summit Taught Us",
    excerpt: "Three editions of India's leading agriculture communication summit have given us a front-row seat to what event marketing can achieve for agri-brands.",
    category: "Brand Strategy",
    date: "April 5, 2026",
    readTime: "6 min read",
    featured: false,
    image: "/blog/blog-07.png",
    author: "Amit BK Khare",
    authorRole: "Founder & Managing Partner",
  },
];

const categoryColors = {
  "Agriculture": "bg-green-50 text-green-700 border-green-200",
  "Brand Strategy": "bg-blue-50 text-blue-700 border-blue-200",
  "Communication": "bg-purple-50 text-purple-700 border-purple-200",
  "Industry Insights": "bg-amber-50 text-amber-700 border-amber-200",
  "Rural Marketing": "bg-orange-50 text-orange-700 border-orange-200",
};

// Placeholder gradient covers keyed by category
const gradientCovers = {
  "Agriculture": "from-[#2d5016] via-[#4a7c24] to-[#8ec44a]",
  "Brand Strategy": "from-[#1a2d5a] via-[#2d4a8a] to-[#4a6fa5]",
  "Communication": "from-[#3d1a5a] via-[#6a2d8a] to-[#9b59b6]",
  "Industry Insights": "from-[#5a3d1a] via-[#8a6a2d] to-[#c8a84b]",
  "Rural Marketing": "from-[#5a2d1a] via-[#8a4a2d] to-[#c8784b]",
};

function PostCard({ post, size = "normal" }) {
  const gradient = gradientCovers[post.category] || gradientCovers["Agriculture"];
  const catColor = categoryColors[post.category] || "bg-gray-100 text-gray-600 border-gray-200";

  if (size === "featured") {
    return (
      <div className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col md:flex-row h-[70vh]">
        {/* Cover */}
        <div className="relative w-full md:w-1/2 h-56 md:h-auto min-h-[280px] flex-shrink-0 overflow-hidden bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-between p-7 md:p-10 flex-1">
          <div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${catColor} mb-4`}>
              {post.category}
            </span>
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#4a7c24] transition-colors duration-300">
              {post.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
          </div>
          <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-800">{post.author}</div>
                <div className="text-[10px] text-gray-400">{post.date} · {post.readTime}</div>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#4a7c24] group-hover:gap-2.5 transition-all duration-300">
              Read more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full">
      {/* Cover */}
      <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gray-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-gray-700 shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-serif text-base font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#4a7c24] transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 flex-1 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-[9px] font-bold`}>
              {post.author.charAt(0)}
            </div>
            <span className="text-[10px] text-gray-400">{post.date} · {post.readTime}</span>
          </div>
          <svg className="w-4 h-4 text-gray-300 group-hover:text-[#4a7c24] group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  const filtered = activeCategory === "All"
    ? rest
    : rest.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="h-screen bg-[#f9fbf7] overflow-hidden relative">
        {/* Coming Soon Overlay */}
        <div className="absolute inset-0 z-40 backdrop-blur-md bg-white/40 flex items-center justify-center pointer-events-auto pt-20">
          <div className="bg-white/90 backdrop-blur-sm p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-white/60 flex flex-col items-center text-center max-w-xl mx-4 transform hover:scale-[1.02] transition-transform duration-500">
            <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#4a7c24]/10 text-[#4a7c24] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4a7c24] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4a7c24]"></span>
              </span>
              Stay Tuned
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">Coming Soon</h2>
            <p className="text-gray-600 text-lg md:text-xl font-light">We are crafting some amazing insights and articles. The blog will be available shortly!</p>
          </div>
        </div>

        <div className="pointer-events-none select-none opacity-50">
      {/* Hero Header */}
      <section className="w-full bg-[#f9fbf7] border-b border-gray-100 pt-36 pb-12 px-6 md:px-10 relative overflow-hidden">
        {/* Decorative Backgrounds */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#4a7c24]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[#4a7c24]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 -right-20 w-72 h-72 bg-[#8ec44a]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-5 mb-10 bg-white p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
            {/* Subtle Grid Boxes Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            
            <div className="relative z-10 inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 text-[#4a7c24] text-xs font-bold uppercase tracking-widest mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4a7c24] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4a7c24]"></span>
              </span>
              Snail Integral Hub
            </div>
            <h1 className="relative z-10 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Blog &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c24] to-[#8ec44a]">Articles</span>
            </h1>
            <p className="relative z-10 mt-2 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Perspectives on agriculture, rural communication, brand strategy, and the business of building brands that matter.
            </p>
            <div className="relative z-10 flex items-center justify-center gap-3 text-sm text-gray-500 font-medium mt-2 mb-2 bg-white/80 backdrop-blur px-5 py-2.5 rounded-full shadow-sm border border-gray-100">
              <svg className="w-4 h-4 text-[#4a7c24]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14"/></svg>
              <span><strong className="text-gray-900">{blogPosts.length}</strong> articles published</span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto p-2 bg-white/60 backdrop-blur-md rounded-[2rem] border border-white shadow-sm">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-[14px] font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#4a7c24] text-white shadow-md transform -translate-y-0.5'
                    : 'bg-white text-gray-600 border border-transparent hover:border-[#4a7c24]/20 hover:text-[#4a7c24] hover:shadow-sm hover:-translate-y-0.5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-12 md:pt-10 md:pb-16">

        {/* Featured Post */}
        {(activeCategory === "All" || activeCategory === featured.category) && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Featured Article</span>
            </div>
            <Link href={`/blog/${featured.id}`}>
              <PostCard post={featured} size="featured" />
            </Link>
          </div>
        )}

        {/* Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Latest Insights &amp; Trends</span>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <p className="text-gray-400 text-sm">No articles in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(post => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <PostCard post={post} />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* CTA Newsletter strip */}
        <div className="mt-24 rounded-[2.5rem] bg-[#4a7c24] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative shadow-2xl shadow-[#4a7c24]/20">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-black/20 to-transparent rounded-full blur-2xl pointer-events-none translate-y-1/3 -translate-x-1/4" />
          
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-white mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Get weekly agriculture insights in your inbox</h3>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">Join 5,000+ professionals who read The Snail Show Newsletter every week for the latest strategies and trends.</p>
          </div>
          
          <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
            <a
              href="https://www.linkedin.com/newsletters/the-snailshow-newsletter-7287459818590683136/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 w-full md:w-auto rounded-full bg-white text-[#4a7c24] font-bold text-base hover:bg-gray-50 hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(255,255,255,0.2)] transition-all duration-500"
            >
              Subscribe to Newsletter
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>

      </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

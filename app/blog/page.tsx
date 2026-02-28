"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

// Blog data with Professional Mental Health & NGO Focus
const blogs = [
  {
    id: 1,
    title: "Understanding Anxiety: More Than Just Feeling Nervous",
    excerpt: "Anxiety can manifest in various ways. Learn how to identify the subtle signs and explore effective coping mechanisms for daily life.",
    category: "Mental Health",
    author: "Dr. Sarah Chen",
    date: "Oct 12, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
    slug: "understanding-anxiety"
  },
  {
    id: 2,
    title: "The Art of Mindful Living in a Digital World",
    excerpt: "In an era of constant notifications, finding silence is a superpower. Discover 5 simple habits to reclaim your mental space.",
    category: "Self Care",
    author: "Marcus Thorne",
    date: "Oct 15, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
    slug: "mindful-living-digital-world"
  },
  {
    id: 3,
    title: "How Our Recent Rural Outreach Impacted 500+ Lives",
    excerpt: "Our team traveled to the remote villages of Rajasthan to provide free counseling and mental health awareness workshops.",
    category: "NGO News",
    author: "Aditi Sharma",
    date: "Oct 18, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
    slug: "rural-outreach-impact"
  },
  {
    id: 4,
    title: "Cognitive Behavioral Therapy: Why It Actually Works",
    excerpt: "Diving deep into the psychology of CBT and how it helps restructure negative thought patterns effectively.",
    category: "Psychology",
    author: "Dr. James Wilson",
    date: "Oct 20, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
    slug: "cbt-why-it-works"
  },
];

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Mental Health", "Self Care", "Psychology", "NGO News"];

  const filteredBlogs = activeCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <section id="blog" className="py-32 bg-[#F8FAFF] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/10 text-blue-600 text-[11px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-100"
            >
              <Sparkles size={14} /> The Insight Blog
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
                Nurturing Minds through <span className="text-blue-600 italic">Knowledge</span>
            </h2>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === cat 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                    : "bg-white text-slate-400 hover:text-blue-600 border border-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
        </div>

        {/* --- BLOG GRID --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          <AnimatePresence mode='popLayout'>
            {filteredBlogs.map((blog) => (
              <motion.article
                key={blog.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col h-full bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-50"
              >
                <Link href={`/blog/${blog.slug}`} className="flex flex-col h-full">
                  
                  {/* Image Container with Hover Effect */}
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] bg-slate-200">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" 
                    />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-blue-900 px-4 py-2 rounded-2xl text-[9px] font-black uppercase tracking-widest shadow-sm">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="pt-8 pb-4 px-2 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em] mb-4">
                      <span className="flex items-center gap-1.5 text-blue-600">
                        <Clock size={12} strokeWidth={2.5} /> {blog.readTime}
                      </span>
                      <span className="opacity-20 text-slate-300">|</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} /> {blog.date}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-[1.3]">
                      {blog.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm line-clamp-2 mb-8 font-medium leading-relaxed">
                      {blog.excerpt}
                    </p>
                    
                    {/* Author & Action Footer */}
                    <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Author</span>
                        <span className="text-xs font-black text-slate-800 tracking-tight">{blog.author}</span>
                      </div>
                      <div className="w-11 h-11 rounded-full bg-slate-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-500">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- VIEW ALL BUTTON (Optional) --- */}
        <div className="mt-20 text-center">
            <button className="inline-flex items-center gap-3 text-slate-900 font-black uppercase text-xs tracking-[0.2em] hover:text-blue-600 transition-colors group">
                Browse All Articles <div className="w-8 h-[2px] bg-blue-600 group-hover:w-12 transition-all"></div>
            </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
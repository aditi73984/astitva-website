"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation'; // Added useRouter
import { motion } from 'framer-motion';
import { Clock, Share2, Bookmark, Calendar, ChevronLeft, Quote } from 'lucide-react';
import Link from 'next/link';

const BlogDetailPage = () => {
  const params = useParams();
  const router = useRouter(); // Initialize router
  const title = params.slug?.toString().replace(/-/g, ' ') || "Prioritizing Mental Well-being";

  return (
    <article className="bg-white min-h-screen pt-28 pb-20 selection:bg-blue-100">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Back Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/blog" className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
            <ChevronLeft size={20} /> Back to Insights
          </Link>
        </motion.div>

        {/* Blog Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 text-slate-500 mb-6 font-bold text-xs uppercase tracking-[0.2em]">
            <span className="bg-[#1747A3] text-white px-3 py-1 rounded-sm">Resource</span>
            <span className="flex items-center gap-1"><Clock size={16} /> 6 Min Read</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 capitalize leading-[1.1] mb-8 tracking-tight">
            {title}
          </h1>

          <p className="text-xl text-slate-600 mb-10 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
            Understanding the delicate balance of mental health in an increasingly digital and fast-paced world.
          </p>

          <div className="flex items-center justify-between py-8 border-y border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#1747A3] text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg shadow-blue-200">
                A
              </div>
              <div>
                <p className="font-black text-slate-900 text-lg leading-none">Astitva Editorial Team</p>
                <p className="text-sm text-slate-500 mt-2 flex items-center gap-1">
                  <Calendar size={14} /> Published on February 24, 2026
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="p-3 border border-slate-200 hover:bg-slate-50 rounded-xl transition-all active:scale-95 shadow-sm">
                <Share2 size={20} className="text-slate-700" />
              </button>
              <button className="p-3 border border-slate-200 hover:bg-slate-50 rounded-xl transition-all active:scale-95 shadow-sm">
                <Bookmark size={20} className="text-slate-700" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none text-slate-700 leading-[1.8] font-serif">
          <p className="mb-8 text-lg md:text-xl antialiased">
            In today’s hyper-connected society, our mental health often takes a backseat to professional deadlines and social obligations. At <strong className="text-blue-600 font-bold">Astitva</strong>, we believe that reclaiming your mental space is not a luxury, but a fundamental necessity for finding your true existence.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 font-sans tracking-tight">
            The Science of Mindful Restoration
          </h2>
          <p className="mb-8">
            Restoration isn't just about sleep; it's about neural recovery. When we consciously engage in mindfulness, we allow our cortisol levels to stabilize. Scientific research indicates that even brief periods of mental stillness can significantly reduce the symptoms of anxiety and decision fatigue.
          </p>
          
          <div className="my-16 relative font-sans">
            <Quote className="absolute -top-8 -left-8 text-blue-100 w-24 h-24 -z-10" />
            <div className="p-10 bg-slate-900 border-r-8 border-blue-500 rounded-l-3xl shadow-2xl">
              <p className="italic font-medium text-2xl text-blue-50 leading-relaxed font-serif">
                "Healing is not a linear journey. It is a series of small, intentional decisions to prioritize your inner peace over external chaos."
              </p>
              <p className="mt-4 text-blue-400 font-bold font-sans uppercase tracking-widest text-sm">— Dr. A. Sharma, Clinical Psychologist</p>
            </div>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-12 mb-4 font-sans">
            Three Pillars of Daily Emotional Resilience
          </h3>
          <ul className="space-y-4 mb-10 list-none pl-0 font-sans">
            {[
              { title: "Digital Decoupling", desc: "Setting strict boundaries with notification-heavy devices to protect your morning focus." },
              { title: "Cognitive Reframing", desc: "Learning to view challenges as data points rather than personal failures." },
              { title: "The 5-Minute Stillness", desc: "A non-negotiable window each day dedicated to silent observation of one's own thoughts." }
            ].map((pillar, i) => (
              <li key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <span className="block text-blue-600 font-black text-lg mb-1">{pillar.title}</span>
                <span className="text-slate-600">{pillar.desc}</span>
              </li>
            ))}
          </ul>

          <p className="mb-8 italic text-slate-500 border-t border-slate-100 pt-8 font-sans text-sm">
            Note: While self-help strategies are valuable, they do not replace professional clinical support. If you are struggling, remember that reaching out is a sign of immense strength.
          </p>

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-[2.5rem] p-10 text-center text-white mt-20 shadow-xl font-sans">
            <h4 className="text-3xl font-black mb-4">Start Your Healing Journey</h4>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Connect with our certified experts at Astitva for a confidential consultation tailored to your needs.
            </p>
            <button 
              onClick={() => router.push('/contact')}
              className="px-12 py-4 bg-white text-blue-600 rounded-xl font-black hover:bg-blue-50 transition-all shadow-lg active:scale-95"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetailPage;
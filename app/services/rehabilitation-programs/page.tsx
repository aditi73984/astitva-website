"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Step 1: Import useRouter
import { 
  Brain, 
  Sparkles, 
  HeartHandshake, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const RehabilitationPrograms = () => {
  const router = useRouter(); // Step 2: Initialize router

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <ShieldCheck size={14} />
            Support & Growth
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase"
          >
            Rehabilitation <span className="text-blue-600">Programs</span>
          </motion.h1>
          
          <p className="mt-6 text-slate-500 font-medium max-w-2xl mx-auto">
            Dedicated training and emotional support initiatives designed to empower special children and their families.
          </p>
        </div>

        {/* --- 2-Column Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* 1. Training at Astitva */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex flex-col"
          >
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
              <Brain size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight">Training at Astitva</h3>
            <p className="text-slate-600 text-[15px] leading-relaxed font-medium mb-auto">
              Astitva provides structured training programs for special children focused on enhancing learning abilities, daily functioning, and overall performance. The training emphasizes cognitive development, improvement of IQ and performance quotient (PQ), and strengthening practical skills through guided activities and individualized support.
            </p>
          </motion.div>

          {/* 2. Program with Special Child */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex flex-col"
          >
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
              <HeartHandshake size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight">Program with Special Child</h3>
            <p className="text-slate-600 text-[15px] leading-relaxed font-medium mb-auto">
              Through visits to specialized centers, the Astitva team interacts closely with children having Cerebral Palsy (CP). We listen to parents' concerns and provide emotional support, guidance, and motivation, fostering a positive mindset and resilience within the caregiving community.
            </p>
          </motion.div>

          {/* CTA Card - Now linked to Contact */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between text-white shadow-xl shadow-blue-100 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-3xl font-black mb-2 tracking-tight">Need personalized support?</h3>
              <p className="text-blue-100 font-medium">Connect with our rehabilitation experts for a detailed consultation.</p>
            </div>
            
            {/* Step 3: Button triggers navigation */}
            <button 
              onClick={() => router.push('/contact')}
              className="relative z-10 px-10 py-4 bg-white text-blue-600 font-black rounded-2xl text-[11px] uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-3"
            >
              Enquire Now <ArrowRight size={16} />
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default RehabilitationPrograms;
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Step 1: Import useRouter
import { 
  Calendar, Smartphone, School, 
  Heart, Stethoscope, ArrowRight, 
  Sparkles, Users
} from 'lucide-react';

const SocietyWork = () => {
  const router = useRouter(); // Step 2: Initialize router

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-24 px-6 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <Sparkles size={14} />
            Societal Impact
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter"
          >
            Work We Have Done in <span className="text-blue-600">SOCIETY</span>
          </motion.h1>
          
          <p className="mt-6 text-slate-500 font-medium max-w-2xl mx-auto">
            Our initiatives are designed to reach every corner of the community, ensuring mental wellness is accessible to all.
          </p>
        </div>

        {/* --- 2-Column Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* 1. Mental Health Day Seminar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex flex-col"
          >
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
              <Calendar size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">Mental Health Day Seminar - 2025</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-auto">
              On the occasion of World Mental Health Day 2025, Astitva organized a comprehensive seminar called <strong>MIND MATTERS: Let's Talk, Let's Heal</strong>, aimed at raising awareness about mental health in the community.
            </p>
          </motion.div>

          {/* 2. Reel Addiction Workshop */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex flex-col"
          >
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
              <Smartphone size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">Reel Addiction Workshop</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-auto">
              Astitva Organized an interactive workshop titled <strong>Reel Addiction Workshop</strong>, focusing on understanding digital addiction and practical strategies for developing healthier screen habits.
            </p>
          </motion.div>

          {/* 3. IDEALS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex flex-col"
          >
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
              <School size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">IDEALS</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-auto">
              <strong>IDEALS</strong> is a preventive mental-health initiative addressing psychological challenges at their root by working directly with schools for early development.
            </p>
          </motion.div>

          {/* 4. Visit to Old Age Home */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex flex-col"
          >
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
              <Heart size={28} />
            </div>
            <div className="text-blue-500 font-bold text-[10px] uppercase tracking-widest mb-2">15 August 2024</div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">Visit to Old Age Home</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-auto">
              The Astitva team visited an <strong>Old age home in Naini</strong>, focusing on interacting with senior citizens and reinforcing our commitment to emotional well-being across all ages.
            </p>
          </motion.div>

          {/* 5. MHR Initiative */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex flex-col"
          >
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
              <Stethoscope size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">MHR (Mental Health Representative)</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-auto">
              Under the <strong>MHR</strong> initiative, we collaborated with medical professionals to create awareness about psychological support and timely mental health intervention.
            </p>
          </motion.div>

          {/* Call to Action Card - FIXED BUTTON */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-blue-600 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white shadow-xl shadow-blue-200"
          >
            <Users size={48} className="mb-6 opacity-30" />
            <h3 className="text-2xl font-black mb-4 tracking-tight">Be Part of the Change</h3>
            <p className="text-blue-100 text-sm font-medium mb-8">
              Let's work together to create a more mindful and supportive society.
            </p>
            {/* Step 3: Added onClick to navigate */}
            <button 
              onClick={() => router.push('/contact')}
              className="px-10 py-4 bg-white text-blue-600 font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-2"
            >
              Contact Us <ArrowRight size={16} />
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SocietyWork;
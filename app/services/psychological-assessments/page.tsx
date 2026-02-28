"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, Brain, LineChart, FileText, 
  Search, Target, GraduationCap, Puzzle, 
  ArrowRight, ShieldCheck, Microscope
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const AssessmentPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFEFE] text-slate-900 pt-20">
      
      {/* Hero Section - Pure White & Minimal */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <Microscope size={16} />
            <span>Scientific Diagnostics</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Psychological Tests & <span className="text-blue-600">Assessments</span>
          </motion.h1>
          
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            Scientifically designed assessments to understand personality, intelligence, behavior patterns, and mental health needs.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Assessment Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Projective Tests",
              icon: <Search className="text-purple-600" />,
              desc: "Personality assessments where individuals respond to ambiguous images. Helps reveal inner emotions, attitudes, and underlying conflicts.",
              color: "hover:bg-purple-50/50"
            },
            {
              title: "IQ / EQ / PQ Tests",
              icon: <Brain className="text-blue-600" />,
              desc: "Tests for Intelligence, Emotional, and Performance Quotients to evaluate intellectual ability and social potential.",
              color: "hover:bg-blue-50/50"
            },
            {
              title: "Aptitude Tests",
              icon: <Target className="text-emerald-600" />,
              desc: "Determine skills, strengths, and natural aptitude for success in specific academic or professional areas.",
              color: "hover:bg-emerald-50/50"
            },
            {
              title: "Special Children Assessment",
              icon: <Puzzle className="text-orange-600" />,
              desc: "Diagnostic tests for developmental challenges like Autism Spectrum Disorder, ADHD, and Learning Disabilities.",
              color: "hover:bg-orange-50/50"
            },
            {
              title: "Behavioral Analysis",
              icon: <LineChart className="text-indigo-600" />,
              desc: "Evaluating antecedents and consequences to identify specific behaviors that clients wish to modify or improve.",
              color: "hover:bg-indigo-50/50"
            },
            {
              title: "Diagnostic Reports",
              icon: <FileText className="text-cyan-600" />,
              desc: "Deep insight into psychological concerns using assessment data to assist in accurate diagnosis and therapy planning.",
              color: "hover:bg-cyan-50/50"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              {...fadeInUp}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col h-full transition-all duration-300 ${item.color}`}
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-800 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed flex-grow font-medium">
                {item.desc}
              </p>
              <a href="/contact" className="mt-10 flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors group">
                Request Test <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Detailed Assessment Reporting Section */}
        <section className="relative bg-slate-50 rounded-[4rem] overflow-hidden p-12 md:p-24 border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ClipboardCheck className="text-blue-600" size={24} />
                <h2 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Standardized Process</h2>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Comprehensive <br/>Diagnostic Reports</h2>
              <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed">
                Our reports don't just provide numbers; they provide a roadmap. We combine life history, behavioral observations, and test results to create a 360-degree view of your mental health.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Detailed Clinical Observation",
                  "Standardized Scoring & Data Analysis",
                  "Personalized Action Plans",
                  "Strict Ethical Data Privacy"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-700 font-bold">
                    <ShieldCheck className="text-blue-500" size={20} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
            
              {/* Floating Statistic */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-50 max-w-[340px]">
                <p className="text-4xl font-black text-blue-600 mb-2">100%</p>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Confidential & HIPAA Compliant</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-black text-slate-800 mb-6">Unsure which test is right for you?</h3>
          <p className="text-slate-500 mb-10 font-medium">Book a preliminary consultation where our experts will guide you to the most effective assessment for your needs.</p>
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-slate-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-xl shadow-slate-200"
          >
            Consult Our Experts
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default AssessmentPage;
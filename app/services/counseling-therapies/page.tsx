"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, Users, User, Baby, 
  HandHelping, BrainCircuit, Activity, 
  ArrowRight, ShieldCheck, Sparkles, HeartHandshake
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};


const CounselingServices = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-20">
      
      {/* Header Section */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <HeartPulse size={16} />
            <span>Professional Care</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Counseling & <span className="text-blue-600">Therapies</span>
          </motion.h1>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
            Compassionate, evidence-based psychological support for individuals, couples, families, and children.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Types of Counseling Grid */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Types of Counseling</h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Psychological Disorders",
                icon: <BrainCircuit className="text-purple-600" />,
                desc: "Support for depression, phobia, addiction, OCD, suicidal tendencies, and emotional problems.",
                color: "border-purple-100 bg-purple-50/30"
              },
              {
                title: "Pre-Wedding Counseling",
                icon: <HeartHandshake className="text-pink-600" />,
                desc: "Helping couples recognize marital issues, resolve conflicts, and improve communication before marriage.",
                color: "border-pink-100 bg-pink-50/30"
              },
              {
                title: "Marriage Counseling",
                icon: <Users className="text-blue-600" />,
                desc: "Resolving relationship conflicts, improving communication, and reconciling marital bonds effectively.",
                color: "border-blue-100 bg-blue-50/30"
              },
              {
                title: "Family Counseling",
                icon: <User className="text-emerald-600" />,
                desc: "Healthier relationships during divorce, loss, addiction, or illness affecting family members.",
                color: "border-emerald-100 bg-emerald-50/30"
              },
              {
                title: "Child Counseling",
                icon: <Baby className="text-orange-600" />,
                desc: "Helping children cope with emotions while guiding parents to foster expression and independence.",
                color: "border-orange-100 bg-orange-50/30"
              },
              {
                title: "Personal Counseling",
                icon: <Sparkles className="text-indigo-600" />,
                desc: "Handling relationships, career stress, family issues, and identity challenges effectively.",
                color: "border-indigo-100 bg-indigo-50/30"
              },
              {
                title: "Disabled Rehabilitation",
                icon: <HandHelping className="text-cyan-600" />,
                desc: "Supportive space for individuals with disabilities to adapt to lifestyle changes with resilience.",
                color: "border-cyan-100 bg-cyan-50/30"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-[2rem] border shadow-sm flex flex-col h-full ${item.color}`}
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
                <a href="/contact" className="mt-8 flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors group">
                  Book Session <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Psychological Therapies Section */}
        <section className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Science Based Approach</h2>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Psychological Therapies</h2>
              <p className="text-slate-400 mb-12 leading-relaxed">
                We utilize evidence-based therapeutic interventions to ensure measurable improvement and long-term mental well-being for our clients.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                    <Activity className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                    <p className="text-slate-400 text-sm leading-relaxed text-justify">
                      A structured, evidence-based therapy aimed at reducing symptoms of depression and anxiety disorders by changing negative thought patterns and behaviors.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                    <ShieldCheck className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Behavioral Modification</h4>
                    <p className="text-slate-400 text-sm leading-relaxed text-justify">
                      A therapeutic approach designed to modify unwanted or harmful behaviors and replace them with healthier, positive behavioral patterns.
                    </p>
                  </div>
                </div>
              </div>

              <motion.a 
                href="/contact"
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-flex bg-white text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all shadow-xl"
              >
                Inquire About Therapy
              </motion.a>
            </div>
            
            {/* FIXED: Updated with Dr. Malveeka's Image */}
            <div className="hidden lg:block relative min-h-full">
              <img 
                src="/images/malveeka_p.jpeg" 
                alt="Dr. Malveeka Rao" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
              {/* Optional overlay for professional feel */}
              <div className="absolute bottom-10 left-10 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest bg-blue-600 inline-block px-3 py-1 rounded-full mb-2">Lead Expert</p>
                <h3 className="text-2xl font-black">Dr. Malveeka Ahuja</h3>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Trust Footer */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">Confidentiality Assured</p>
          <h3 className="text-2xl font-black text-slate-800 mb-8">All sessions are conducted with 100% privacy and ethical care.</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            <span className="font-bold">EVIDENCE-BASED</span>
            <span className="font-bold">LICENSED THERAPISTS</span>
            <span className="font-bold">CLIENT-CENTERED</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CounselingServices;
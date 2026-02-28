"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, BookOpen, FileText, 
  Calendar, ShieldCheck, 
  ArrowRight, Info, ClipboardCheck, ShieldAlert,
  Briefcase, GraduationCap, Microscope
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const AstitvaInternship = () => {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans pt-16 md:pt-20">
      
      {/* Hero Section */}
      <header className="relative py-20 md:py-24 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Clinical Psychology <span className="text-blue-500 text-glow">Internship</span>
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Hands-on practical clinical experience with actual clients under licensed supervision. 
            Bridging the gap between theory and professional practice.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* About the Course & Programs Card */}
        <motion.section 
          {...fadeInUp}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 -mt-16 relative z-20 border border-white mb-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-slate-900">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  About the Course
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
                  <p>
                    This course provides certified internship in <strong>Clinical Psychology</strong> for the students pursuing or holding a Degree in Psychology (Graduation, Post-Graduation or Diploma).
                  </p>
                  <p>
                    Internships are supervised on site by <strong>licensed health professionals</strong> and include a weekly meeting with the supervising instructor.
                  </p>
                  <p>
                    The general goal is for Clinical Mental Health Counseling students to master skills by effectively working with actual clients in individual and group counseling sessions.
                  </p>
                </div>
              </div>

              {/* NEW SECTION: Internship and Work Experience at Astitva */}
              <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2">
                  <Briefcase size={20} className="text-blue-600" /> Programs Offered
                </h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Designed to provide practical learning under the guidance of experienced professionals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {["Summer Internship", "Winter Internship", "Work Experience"].map((item, idx) => (
                    <div key={idx} className="bg-white px-3 py-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-tighter">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 italic">
                  "Focuses on bridging theoretical knowledge with real-world application, helping participants build confidence, ethical understanding, and professional competence."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Required Documentation */}
              <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2 uppercase tracking-wider text-blue-400">
                  <FileText size={20} /> Required Documentation
                </h3>
                <ul className="grid gap-4">
                  {[
                    "Updated CV / Resume", "Aadhar Card & College ID", 
                    "HOD Recommendation Letter", "Current Transcript", "Passport Size Photo"
                  ].map((doc, i) => (
                    <li key={i} className="flex items-center gap-3 font-semibold text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10 shadow-sm">
                      <CheckCircle className="text-blue-500 shrink-0" size={18} /> {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exposure Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                  <Microscope className="mx-auto mb-2 text-blue-600" size={24} />
                  <p className="text-[10px] font-bold uppercase text-blue-700">Administer Tests</p>
                </div>
                <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-center">
                  <GraduationCap className="mx-auto mb-2 text-green-600" size={24} />
                  <p className="text-[10px] font-bold uppercase text-green-700">Case Study Work</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Course Objectives */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Course Objectives</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Supervised Experience", desc: "Hands-on experience under licensed mental health professionals." },
              { title: "Session Observations", desc: "Observe assessment and counseling sessions for practical understanding." },
              { title: "Case Study Analysis", desc: "Analyze case histories and provide diagnostic reports." },
              { title: "Report Writing", desc: "Develop skills in intake and assessment report writing." },
              { title: "Psychological Assessments", desc: "Administering, scoring, and interpreting standardized tests." },
              { title: "Research & Ethics", desc: "Participate in research discussions and adhere to ethical guidelines." }
            ].map((obj, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, backgroundColor: "#eff6ff" }}
                className="p-8 bg-white rounded-3xl border border-slate-100 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{obj.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Evaluation Section */}
        <motion.section {...fadeInUp} className="mb-24 bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center flex items-center justify-center gap-3">
              <ClipboardCheck className="text-blue-500" /> Student Evaluation Criteria
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { label: "Performance", detail: "Quality of work during clinical practice & ethics." },
                { label: "Participation", detail: "Active involvement in case reviews and research." },
                { label: "Report Writing", detail: "Accuracy and thoroughness in treatment plans." },
                { label: "Professional Behaviour", detail: "Punctuality, reliability, and confidentiality." }
              ].map((ev, i) => (
                <div key={i} className="border-l-2 border-blue-500/30 pl-6 py-2">
                  <h4 className="text-blue-400 font-bold mb-1 uppercase tracking-widest text-xs">{ev.label}</h4>
                  <p className="text-slate-300 text-sm">{ev.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Options */}
        <section className="mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Entry Level</span>
              <h3 className="text-2xl font-black mt-2 mb-4">Basic Internship</h3>
              <div className="text-4xl font-black mb-2 text-slate-900">₹5,500</div>
              <div className="flex items-center gap-2 text-slate-400 mb-8 font-bold"><Calendar size={18}/> 1 Month</div>
              <p className="text-slate-500 text-sm mb-10 flex-grow">Ideal for beginners seeking a strong theoretical foundation in psychology.</p>
              <a href="/contact" className="w-full py-4 rounded-2xl bg-slate-100 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all text-center">Select Program</a>
            </motion.div>

            {/* Lite */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-600 p-10 rounded-[2.5rem] shadow-2xl shadow-blue-200 text-white relative overflow-hidden flex flex-col">
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase">Most Popular</div>
              <span className="text-blue-100 font-bold text-xs uppercase tracking-widest">Intermediate</span>
              <h3 className="text-2xl font-black mt-2 mb-4">Lite Internship</h3>
              <div className="text-4xl font-black mb-2">₹6,500</div>
              <div className="flex items-center gap-2 text-blue-100 mb-8 font-bold"><Calendar size={18}/> 45 Days</div>
              <p className="text-blue-50 text-sm mb-10 opacity-80 flex-grow">Balanced combination of theory and introductory practical exposure.</p>
              <a href="/contact" className="w-full py-4 rounded-2xl bg-white text-blue-600 font-black hover:shadow-lg transition-all text-center text-glow">Enroll Now</a>
            </motion.div>

            {/* Pro */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col">
              <span className="text-green-600 font-bold text-xs uppercase tracking-widest">Advanced</span>
              <h3 className="text-2xl font-black mt-2 mb-4">Pro Internship</h3>
              <div className="text-4xl font-black mb-2 text-slate-900">₹7,999</div>
              <div className="flex items-center gap-2 text-slate-400 mb-4 font-bold"><Calendar size={18}/> 3 Months</div>
              <div className="bg-green-50 text-green-700 p-3 rounded-xl text-xs font-bold mb-6">
                ✨ Performance-Based Stipend: ₹1,500 – ₹2,000
              </div>
              <p className="text-slate-500 text-sm mb-10 flex-grow">Advanced, practice-oriented for professional clinical exposure.</p>
              <a href="/contact" className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-green-600 transition-all text-center">Go Professional</a>
            </motion.div>
          </div>
        </section>

        {/* Registration CTA */}
        <motion.section 
          {...fadeInUp}
          className="bg-slate-100 rounded-[3rem] p-12 md:p-20 text-center border border-white shadow-inner"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6 tracking-tight">Ready to start your journey?</h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Join Astitva for a professional clinical experience. Fill out our contact form, 
              and our team will guide you through the registration and documentation process.
            </p>
            
            <div className="flex justify-center">
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-12 py-5 rounded-full font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 group transition-all"
              >
                Apply Now 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <div className="mt-8 flex justify-center items-center gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1"><ShieldCheck size={14}/> Licensed Supervision</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span className="flex items-center gap-1"><Info size={14}/> Practical Training</span>
            </div>
          </div>
        </motion.section>
    

      </main>
    </div>
  );
};

export default AstitvaInternship;
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Heart, ArrowLeft, BookOpen, Sparkles, 
  Stethoscope, ShieldPlus, Activity,
  CheckCircle2, GraduationCap, ClipboardCheck
} from 'lucide-react';

const AbhaYadavProfile = () => {
  const router = useRouter();

  const member = {
    name: "Ms. Abha Yadav",
    role: "Office Co-ordinator",
    roleSecondary: "Psychologist & Test Administrator",
    // FIXED: Image path updated for Next.js public folder
    img: "/images/team6.png", 
    education: [
      "PGDRP – Post Graduate Diploma in Rehabilitation Psychology",
      "M.A. in Psychology – University of Allahabad"
    ],
    bio: "Abha Yadav is a Clinical Psychologist specializing in addiction recovery, rehabilitation, and mental health counselling. Since 2022, she has worked across multiple de-addiction centers in Prayagraj. Currently associated with Astitva and the IDEALS program, she provides psychotherapy, psychological assessments, and structured clinical care with a compassionate approach.",
    
    // Core Clinical Pillars
    clinicalFocus: [
      { icon: <ShieldPlus size={18} />, title: "Addiction Recovery", desc: "Specialized rehabilitation support." },
      { icon: <Stethoscope size={18} />, title: "Clinical Care", desc: "Psychotherapy and client support." },
      { icon: <Activity size={18} />, title: "Assessment", desc: "Senior psychological test administration." }
    ]
  };

  const handleBooking = () => {
    router.push('/contact'); 
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-16 selection:bg-blue-100">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Navigation */}
        <motion.button 
          whileHover={{ x: -5 }}
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-all"
        >
          <ArrowLeft size={18} />
          <span className="text-sm tracking-widest uppercase">Back to Team</span>
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100"
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* Left: Professional Portrait */}
            <div className="lg:w-1/3 bg-slate-50/50 p-8 md:p-12 border-r border-slate-100 flex flex-col items-center">
               <div className="relative">
                  <div className="w-56 h-72 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x500?text=Abha+Yadav";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-xl">
                    <ClipboardCheck size={24} />
                  </div>
               </div>

               <div className="mt-12 w-full space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 flex items-center justify-center gap-2">
                      <Sparkles size={10} /> Certified Specialist
                    </p>
                    <p className="text-xs font-bold text-slate-700">{member.role}</p>
                  </div>
               </div>
            </div>

            {/* Right: Clinical Details */}
            <div className="lg:w-2/3 p-8 md:p-12 lg:p-16">
              <header className="mb-10">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-2">
                  {member.name}
                </h1>
                <p className="text-xl text-blue-600 font-bold uppercase tracking-widest">
                  {member.roleSecondary}
                </p>
              </header>

              <div className="space-y-12">
                {/* About Section */}
                <section>
                  <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">
                    <BookOpen size={16} /> Clinical Background
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </section>

                {/* Focus Area Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {member.clinicalFocus.map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200 transition-colors"
                        >
                            <div className="text-blue-600 mb-3">{item.icon}</div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest mb-1">{item.title}</h4>
                            <p className="text-[11px] font-medium text-slate-500 leading-snug">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Educational Qualifications */}
                <section>
                    <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">
                        <GraduationCap size={18} /> Education
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                        {member.education.map((edu, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-transparent hover:bg-blue-50/50 transition-colors">
                                <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                                <p className="text-sm font-bold text-slate-700">{edu}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                {/* <div className="pt-6">
                  <motion.button 
                    onClick={handleBooking}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-blue-600 shadow-xl"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Consult with Ms. Abha <Heart size={16} className="group-hover:fill-white transition-all duration-300" />
                    </span>
                  </motion.button>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-4 tracking-widest">
                    Available for Clinical Assessment & Psychotherapy
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AbhaYadavProfile;
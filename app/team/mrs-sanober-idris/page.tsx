"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Award, BookOpen, MessageCircle, Heart, ArrowLeft, 
  GraduationCap, Briefcase, Verified, Star, Calendar, 
  ShieldCheck, CheckCircle2, Globe, Sparkles, School, UserCheck
} from 'lucide-react';

const SanoberIdrisProfile = () => {
  const router = useRouter();

  const member = {
    name: "Mrs. Sanober Idris",
    role: "Administrator & Clinical Psychologist",
    roleSecondary: "Senior Test Administrator",
    experience: "Extensive International & Clinical Experience",
    // FIXED PATH: Pointer to your public/images/team2.png
    img: "/images/team2.png", 
    license: "PGDRP Certified Professional",
    affiliation: "Astitva Sansthan / Former Principal (Baha Int. School)",
    
    bio: "Mrs. Sanober Idris is a dedicated psychologist and educator with extensive experience in psychological counseling, assessment, and child and adolescent development. Having served as Principal at Baha International School, Saudi Arabia, she brings a unique blend of international leadership and clinical expertise. Her commitment to holistic well-being is reflected in her work across mental health awareness, educational counseling, and motivational speaking.",
    
    specialization: [
      "Clinical Psychological Counseling",
      "Psychological & Diagnostic Assessment",
      "Child & Adolescent Development",
      "Educational Counseling",
      "Academic Leadership & Staff Development",
      "Motivational Speaking"
    ],
    
    education: [
      "PGDRP – Post Graduate Diploma in Rehabilitation Psychology",
      "M.A. in Psychology – University of Allahabad"
    ],
    
    highlights: [
      { icon: <School size={18} />, title: "Leadership", desc: "Former Principal at Baha International School, Saudi Arabia." },
      { icon: <UserCheck size={18} />, title: "Clinical", desc: "Expert in Senior Psychological Test Administration." },
      { icon: <Globe size={18} />, title: "Empowerment", desc: "International experience in student engagement & empowerment." }
    ]
  };

  const handleBooking = () => {
    router.push('/contact'); 
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-16 selection:bg-blue-100 selection:text-blue-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Back Button */}
        <motion.button 
          whileHover={{ x: -5 }}
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-all group"
        >
          <ArrowLeft size={18} />
          <span className="text-sm tracking-widest uppercase">Back to Experts</span>
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100"
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* Sidebar: Portrait & Badges */}
            <div className="lg:w-1/3 bg-slate-50/50 p-8 md:p-12 border-r border-slate-100 flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative cursor-zoom-in"
                >
                   <div className="w-56 h-72 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                     <img 
                       src={member.img} 
                       alt={member.name}
                       className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                       onError={(e) => {
                         (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x500?text=Sanober+Idris";
                       }}
                     />
                   </div>
                   <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                     className="absolute -bottom-4 -right-4 bg-blue-900 text-white p-3 rounded-full shadow-xl"
                   >
                     <Verified size={24} />
                   </motion.div>
                </motion.div>

                <div className="mt-12 w-full space-y-4">
                   <motion.div whileHover={{ y: -2 }} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                     <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 flex items-center gap-2">
                       <Sparkles size={10} /> Professional Certification
                     </p>
                     <p className="text-xs font-bold text-slate-700">{member.license}</p>
                   </motion.div>
                   <motion.div whileHover={{ y: -2 }} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                     <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1 flex items-center gap-2">
                       <Briefcase size={10} /> Office Role
                     </p>
                     <p className="text-xs font-bold text-slate-700">Administrator</p>
                   </motion.div>
                   
                   <div className="flex items-center justify-between px-2 pt-4 border-t border-slate-100 mt-6">
                     <div className="flex items-center gap-2 text-slate-400">
                       <Globe size={14} />
                       <span className="text-[10px] font-bold uppercase tracking-tighter">English, Hindi</span>
                     </div>
                     <div className="flex items-center gap-2 text-slate-400">
                       <Star size={14} className="text-yellow-500 fill-yellow-500" />
                       <span className="text-[10px] font-bold uppercase tracking-tighter">Senior Faculty</span>
                     </div>
                   </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:w-2/3 p-8 md:p-12 lg:p-16">
              <header className="mb-10">
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-2"
                >
                  {member.name}
                </motion.h1>
                <div className="flex flex-col md:flex-row md:items-center gap-x-4 gap-y-1">
                  <p className="text-lg text-blue-600 font-bold uppercase tracking-widest">
                    {member.role}
                  </p>
                  <span className="text-slate-300 hidden md:block">|</span>
                  <p className="text-lg text-slate-400 font-bold uppercase tracking-widest">
                    {member.roleSecondary}
                  </p>
                </div>
              </header>

              <div className="space-y-12">
                {/* Bio */}
                <section>
                  <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">
                    <BookOpen size={16} /> Professional Background
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </section>

                {/* International Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {member.highlights.map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-5 bg-slate-900 text-white rounded-2xl flex flex-col gap-3 shadow-lg"
                        >
                            <div className="p-2 bg-blue-600 w-fit rounded-lg">{item.icon}</div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-400">{item.title}</h4>
                                <p className="text-xs font-medium leading-snug opacity-80 mt-1">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Specialization Tags */}
                {/* <section>
                  <h3 className="text-xs font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">Clinical & Academic Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.specialization.map((spec, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ scale: 1.05, backgroundColor: '#EFF6FF', color: '#1D4ED8' }}
                        className="px-4 py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg border border-slate-200 cursor-default transition-colors"
                      >
                        {spec}
                      </motion.span>
                    ))}
                  </div>
                </section> */}

                {/* Education */}
                <section>
                    <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">
                        <GraduationCap size={18} /> Educational Qualifications
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {member.education.map((edu, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-blue-100 transition-colors"
                            >
                                <CheckCircle2 className="text-blue-600" size={20} />
                                <p className="text-sm font-bold text-slate-700">{edu}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Button */}
                {/* <div className="pt-6">
                  <motion.button 
                    onClick={handleBooking}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full md:w-auto px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] overflow-hidden shadow-2xl transition-all"
                  >
                    <motion.div 
                      initial={{ left: '-100%' }}
                      whileHover={{ left: '100%' }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Consult with Mrs. Sanober <Heart size={16} className="group-hover:fill-white transition-all duration-300" />
                    </span>
                  </motion.button>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-4 tracking-widest text-center md:text-left italic">
                    Expert in Psychological Assessment & International Educational Leadership
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

export default SanoberIdrisProfile;
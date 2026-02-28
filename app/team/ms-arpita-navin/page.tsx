"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Heart, ArrowLeft, Briefcase, Globe, Sparkles, 
  TrendingUp, CircleDollarSign, Settings,
  CheckCircle2, GraduationCap, Users
} from 'lucide-react';

const ArpitaNavinProfile = () => {
  const router = useRouter();

  const member = {
    name: "Ms. Arpita Navin",
    role: "Executive Member and Marketing",
    // FIXED: Updated image path for public/images/team3.png
    img: "/images/team3.png", 
    education: [
      "M.Com – University of Allahabad",
      "B.Com – University of Allahabad"
    ],
    bio: "Ms. Arpita Navin plays an important role in the overall management and operations of Astitva. She oversees digital marketing initiatives, handles client coordination and communication, and manages financial processes to ensure smooth functioning of the organisation. In addition, she supports planning, administration, and workflow management, helping align services, outreach, and internal operations with Astitva’s vision of accessible and ethical mental health care.",
    
    pillars: [
      { icon: <TrendingUp size={18} />, title: "Marketing", desc: "Digital marketing initiatives." },
      { icon: <CircleDollarSign size={18} />, title: "Finance", desc: "Financial process management." },
      { icon: <Settings size={18} />, title: "Operations", desc: "Administration and workflow." }
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
          <span className="text-sm tracking-widest uppercase">Back to Team</span>
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100"
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Column: Photo */}
            <div className="lg:w-1/3 bg-slate-50/50 p-8 md:p-12 border-r border-slate-100 flex flex-col items-center">
               <div className="relative">
                  <div className="w-56 h-72 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale-[5%] hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x500?text=Arpita+Navin";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white p-3 rounded-full shadow-xl">
                    <Users size={24} />
                  </div>
               </div>

               <div className="mt-12 w-full space-y-4">
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center"
                  >
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 flex items-center justify-center gap-2">
                      <Sparkles size={10} /> Professional Lead
                    </p>
                    <p className="text-xs font-bold text-slate-700">{member.role}</p>
                  </motion.div>
               </div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:w-2/3 p-8 md:p-12 lg:p-16">
              <header className="mb-10">
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-2"
                >
                  {member.name}
                </motion.h1>
                <div className="flex items-center gap-3">
                   <p className="text-lg text-blue-600 font-bold uppercase tracking-widest">
                     Executive Member
                   </p>
                   <span className="w-8 h-[2px] bg-slate-200"></span>
                   <p className="text-lg text-slate-400 font-bold uppercase tracking-widest">
                     Marketing
                   </p>
                </div>
              </header>

              <div className="space-y-12">
                {/* About Section */}
                <section>
                  <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">
                    <Briefcase size={16} /> Management & Operations
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </section>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {member.pillars.map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -5, backgroundColor: '#fff', borderColor: '#e2e8f0' }}
                            className="p-5 bg-slate-50 rounded-2xl border border-transparent transition-all shadow-sm group"
                        >
                            <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest mb-1 text-slate-900">{item.title}</h4>
                            <p className="text-[11px] font-medium text-slate-500 leading-snug">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Education */}
                <section>
                    <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">
                        <GraduationCap size={18} /> Academic Qualifications
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                        {member.education.map((edu, i) => (
                            <motion.div 
                                key={i} 
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:border-blue-100 transition-colors"
                            >
                                <CheckCircle2 className="text-blue-600" size={18} />
                                <p className="text-sm font-bold text-slate-700">{edu}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Contact CTA */}
                {/* <div className="pt-6">
                  <motion.button 
                    onClick={handleBooking}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full md:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-blue-600 shadow-xl"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Get in Touch <Heart size={16} className="group-hover:fill-white transition-all duration-300" />
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-blue-600"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ type: "tween" }}
                    />
                  </motion.button>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-4 tracking-widest text-center md:text-left">
                    Overseeing Strategic Growth & Financial Integrity
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

export default ArpitaNavinProfile;
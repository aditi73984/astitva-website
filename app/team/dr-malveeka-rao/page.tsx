"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Award, BookOpen, Heart, ArrowLeft, 
  GraduationCap, Briefcase, Star, Calendar, 
  ShieldCheck, CheckCircle2, Globe, Sparkles
} from 'lucide-react';

const MalveekaRaoProfile = () => {
  const router = useRouter();

  const member = {
    name: "Dr. Malveeka Rao",
    role: "Founding Director",
    roleSecondary: "Senior Consultant Clinical Psychotherapist & Psychologist",
    experience: "25+ Years of Clinical Expertise",
    // FIXED PATH: Pointer to your public/images/ folder
    img: "/images/malveeka_p.jpeg", 
    license: "RCI Licensed (CRR. No – A97924)",
    affiliation: "Astitva Sansthan (NGO)",
    bio: "Dr. Malveeka Rao is a Senior Consultant Clinical Psychotherapist and Psychologist with over 25 years of extensive professional experience in clinical psychology, counseling, and rehabilitation. As the Founder and Director of Astitva Sansthan (NGO) and Astitva Psychological Counselling Centre, she has been a pioneer in mental health awareness since 2003.",
    specialization: [
      "Clinical Psychotherapy (CBT & Behavioral Interventions)",
      "Child Psychology & Developmental Support",
      "Rehabilitation for Mental Retardation",
      "Psychological & Diagnostic Assessments",
      "Personality Development & Wellness"
    ],
    education: [
      "M.A. in Psychology (Clinical & Developmental) – University of Allahabad",
      "B.Ed in Special Education (Mental Retardation) – RCI Licensed",
      "Diploma in Guidance Psychology – Bureau of Psychology, U.P."
    ],
    timeline: [
      {
        year: "2003 – Present",
        role: "Psychologist & Counselor",
        place: "Practicing as a clinical psychologist and counselor, providing counseling, psychological assessment, and rehabilitation services."
      },
      {
        year: "2019 – 2022",
        role: "Guest Lecturer – Psychology",
        place: "Sam Higginbottom University of Agriculture, Technology & Sciences (SHUATS), Naini, Prayagraj."
      },
      {
        year: "2017 – 2018",
        role: "Guest Lecturer – MSW (Psychology)",
        place: "Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Allahabad Centre (Wardha)."
      },
      {
        year: "2017 – 2018",
        role: "Consultant & Guest Faculty – D.Ed Special Education",
        place: "JIMARS (Viklang Kendra), Allahabad."
      },
      {
        year: "2007 – 2010",
        role: "Project Psychologist – Family Counselling",
        place: "Central Social Welfare Board project conducted by Poonam Sewa Sansthan (NGO), Naini, Allahabad."
      },
      {
        year: "2005 – 2007",
        role: "Guest Lecturer – Special Education (H.I.)",
        place: "Rajiv Gandhi PG College & Jamunipur Kotwa Degree College, Allahabad."
      },
      {
        year: "2005 – 2006",
        role: "Project Psychologist – Career Counselling",
        place: "Sarvangin Mahila Evam Yuva Bal Vikas Samiti (NGO), Bhadohi."
      },
      {
        year: "2003 – 2011",
        role: "Psychologist & Counselor",
        place: "Disabled Appliances Rehabilitation & Training Society, Allahabad."
      }
    ],
    awards: [
      {
        title: "Founder: Astitva Sansthan"
      },
      {
        year: "2014",
        title: "IPERA – Rashtrapati Awardee Mr. P. C. Dubey Memorial Award",
        desc: "Awarded by Indian Psychometric and Educational Research Association (IPERA), Patna, for remarkable professional achievements."
      },
      {
        year: "2022",
        title: "Guest of Honour – Kala Shreshth Award",
        desc: "Honoured at Kala Shreshth Award 2022 – Two Men Show, organized by Khanam Art Gallery."
      },
      {
        year: "2023",
        title: "Kala Shreshth Guest of Honour Award",
        desc: "Received from Khanam Art Gallery for contribution to fine arts and psychology."
      },
      {
        year: "2023",
        title: "National Women’s Achievement Award",
        desc: "Awarded by Poonam Sant Mahila Evam Vikas Samiti for outstanding contribution to social work."
      },
      {
        year: "2024",
        title: "Creative Women’s Award",
        desc: "Conferred by Khanam Art Gallery."
      },
      {
        year: "2025",
        title: "Empowering Women’s Award",
        desc: "Awarded by Nehru Gram Bharati (Deemed to be University), Prayagraj."
      },
      {
        year: "2025",
        title: "Living Legend – C.M.P. Degree College",
        desc: "Recognized during Diamond Jubilee Year Celebration, Prayagraj."
      },
      {
        year: "2025",
        title: "International Women’s Day Honour",
        desc: "Awarded for professional excellence and social impact."
      }
    ],
    workshops: [
      {
        title: "Training Workshop on The Art of Enneagram",
        desc: "Allahabad University Psychology Alumni Association, December 2024"
      },
      {
        title: "World Suicide Prevention Day",
        desc: "10th September 2019, Allahabad University Psychology Alumni Association"
      },
      {
        title: "National Conference on Human Rights and Intervention Strategies",
        desc: "Organized by IPERA at Harprasad Institute of Behavioural Studies, Agra (2014)"
      },
      {
        title: "Drug Abuse Awareness & Mental Health Seminars",
        desc: "Conducted with professional bodies and women’s organizations including All India Women’s Conference, Allahabad"
      }
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
                  className="relative"
                >
                   <div className="w-56 h-72 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                     <img 
                       src={member.img} 
                       alt={member.name}
                       className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                       // Error handling if image is missing
                       onError={(e) => {
                         (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x500?text=Profile+Photo";
                       }}
                     />
                   </div>
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-xl"
                   >
                     <ShieldCheck size={24} />
                   </motion.div>
                </motion.div>

                <div className="mt-12 w-full space-y-4">
                   <motion.div whileHover={{ y: -2 }} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                     <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 flex items-center gap-2">
                       <Sparkles size={10} /> Official License
                     </p>
                     <p className="text-xs font-bold text-slate-700">{member.license}</p>
                   </motion.div>
                   <motion.div whileHover={{ y: -2 }} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                     <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">Affiliation</p>
                     <p className="text-xs font-bold text-slate-700">{member.affiliation}</p>
                   </motion.div>
                   <div className="flex items-center justify-between px-2 pt-4">
                     <div className="flex items-center gap-2 text-slate-400">
                       <Globe size={14} />
                       <span className="text-[10px] font-bold uppercase tracking-tighter">Hindi, English</span>
                     </div>
                     <div className="flex items-center gap-2 text-slate-400">
                       <Briefcase size={14} />
                       <span className="text-[10px] font-bold uppercase tracking-tighter">Private Practice</span>
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
                <p className="text-xl text-blue-600 font-bold uppercase tracking-widest">
                  {member.role}
                </p>

                <p className="text-sm text-slate-500 font-semibold tracking-wide mt-1">
                  {member.roleSecondary}
                </p>
              </header>

              <div className="space-y-12">
                <section>
                  <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">
                    <BookOpen size={16} /> Professional Profile
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </section>

                {/* <section>
                  <h3 className="text-xs font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">Clinical Specialization</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.specialization.map((spec, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ scale: 1.05, backgroundColor: '#E0EBFF' }}
                        className="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100 cursor-default"
                      >
                        {spec}
                      </motion.span>
                    ))}
                  </div>
                </section> */}

                <div className="space-y-12">

                {/* EDUCATION */}
                <div>
                  <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                    <GraduationCap size={16} /> Education
                  </h3>
                  <ul className="space-y-3">
                    {member.education.map((edu, i) => (
                      <li key={i} className="text-sm font-semibold text-slate-600 leading-relaxed flex gap-2">
                        <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-1" /> 
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

                {/* <div className="pt-6">
                  <motion.button 
                    onClick={handleBooking}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full md:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] overflow-hidden shadow-2xl transition-all"
                  >
                    <motion.div 
                      initial={{ left: '-100%' }}
                      whileHover={{ left: '100%' }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-blue-200 transition-colors">
                      Book Appointment <Heart size={16} className="group-hover:fill-red-500 group-hover:text-red-500 transition-all duration-300" />
                    </span>
                  </motion.button>
                </div> */}
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            
            <section className="pt-12 mt-12 border-t border-slate-100">
              <div className="max-w-5xl mx-auto px-4 md:px-0">

                <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
                  <Calendar size={16} /> Experience Timeline
                </h3>

                <div className="space-y-6">
                  {member.timeline.map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5 }}
                      className="border-l-2 border-slate-100 pl-5 relative"
                    >
                      <div className="absolute w-2 h-2 bg-blue-600 rounded-full -left-[5px] top-2" />
                      
                      <p className="text-xs font-black text-blue-600 uppercase mb-1">
                        {item.year}
                      </p>

                      <p className="text-sm md:text-base font-bold text-slate-800">
                        {item.role}
                      </p>

                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.place}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </div>
            </section>
            <section className="pt-12 mt-12 border-t border-slate-100">
              <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">
                <Star size={16} className="text-yellow-500" /> Honors & Awards
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {member.awards.map((award, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.01, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-md transition-all"
                  >
                    <Award className="text-blue-600 shrink-0" size={20} />
                    <div>
                      {award.year && (
                        <p className="text-[10px] font-black text-blue-600 uppercase mb-1">
                          {award.year}
                        </p>
                      )}
                      <p className="text-sm font-bold text-slate-800">{award.title}</p>
                      {award.desc && (
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">
                          {award.desc}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ================= WORKSHOPS & CONFERENCES ================= */}
            <section className="pt-12 mt-12 border-t border-slate-100">
              <div className="max-w-5xl mx-auto px-4 md:px-0">

                <h3 className="flex items-center gap-2 text-xs font-black text-slate-400 mb-8 uppercase tracking-[0.2em]">
                  <BookOpen size={16} /> Workshops & Conferences
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {member.workshops.map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.02 }}
                      className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
                    >
                      <p className="text-sm font-bold text-slate-800">
                        {item.title}
                      </p>

                      <p className="text-xs text-slate-500 leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </div>
            </section>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default MalveekaRaoProfile;
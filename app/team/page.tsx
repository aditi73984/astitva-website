"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const TeamSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const createSlug = (name: string) => 
    name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

  // FIXED: Using relative paths (Next.js public folder mapping)
  const initialMembers = [
    { 
      name: "Dr. Malveeka Rao", 
      role: "Founder and Director", 
      img: "/images/malveeka_p.jpeg", 
      tagline: "Visionary Leader" 
    },
    { 
      name: "Mrs. Sanober Idris", 
      role: "Administrator", 
      img: "/images/team2.png", 
      tagline: "Operations Expert" 
    },
    { 
      name: "Ms. Arpita Navin", 
      role: "Executive Member", 
      img: "/images/team3.png", 
      tagline: "Strategic Growth" 
     }, 
     { 
      name: "Mr. Rajeev Jaiswal", 
      role: "Student Mentor", // Fixed missing role
      img: "/images/team5.jpeg", 
      tagline: "Mentorship" 
    },
    { 
      name: "Ms. Abha Yadav", 
      role: "Office Co-ordinator", 
      img: "/images/team6.png", 
      tagline: "Clinical Support" 
    },
  ];

  const hiddenMembers = [
    
    // { 
    //   name: "Mr. Rajeev Jaiswal", 
    //   role: "Student Mentor", // Fixed missing role
    //   img: "/images/team5.jpeg", 
    //   tagline: "Mentorship" 
    // },
    // { 
    //   name: "Ms. Abha Yadav", 
    //   role: "Office Co-ordinator", 
    //   img: "/images/team6.png", 
    //   tagline: "Clinical Support" 
    // },
    { 
      name: "Ms. Archita Navin", 
      role: "SEO Expert", 
      img: "/images/team7.png", 
      tagline: "Digital Presence" 
    },
    { 
      name: "Ms. Arshita Navin", 
      role: "Tech Expert", 
      img: "/images/team8.png", 
      tagline: "System Architect" 
    },
  ];

  const allMembers = showAll ? [...initialMembers, ...hiddenMembers] : initialMembers;

  return (
    <section id="team" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 w-fit mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Our Experts</span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold text-slate-800 tracking-tight"
            >
              Meet our <span className="text-blue-600 font-medium">Counselors</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-sm text-slate-500 font-normal leading-relaxed text-base"
            >
              Professional minds working together to provide accessible and ethical mental health care.
            </motion.p>
          </div>
        </div>

        {/* --- TEAM GRID --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {allMembers.map((member, index) => {
              const slug = createSlug(member.name);
              return (
                <motion.div
                  key={member.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group relative 
    ${member.name === "Dr. Malveeka Rao" 
      ? "lg:col-span-2 lg:row-span-2" 
      : ""
    }`}
                >
                  {/* Image Card */}
                  {/* <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 mb-6 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-100/50"> */}
                  <div className={`relative overflow-hidden rounded-3xl bg-slate-100 mb-6
  ${member.name === "Dr. Malveeka Rao"
    ? "aspect-[4/6]"
    : "aspect-[4/5]"
  }`}
>
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-blue-600/10 backdrop-blur-[2px]">
                        <div className="bg-white text-blue-600 px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
                             View Profile <ArrowUpRight size={14} />
                        </div>
                    </div>

                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                        <p className="text-[9px] font-bold uppercase tracking-tighter text-blue-600 flex items-center gap-1">
                          <Sparkles size={10} /> {member.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Info Area */}
                  <div className="relative px-1">
                    <h4 className="text-xl font-semibold text-slate-800 mb-1.5 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">
                      {member.role}
                    </p>
                    <div className="mt-4 h-[1.5px] w-8 bg-blue-100 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
                  </div>

                  {/* Full Card Link */}
                  <Link href={`/team/${slug}`} className="absolute inset-0 z-30" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* --- TOGGLE BUTTON --- */}
        <div className="mt-24 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-sm transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200"
          >
            {showAll ? (
              <> <Minus size={18} /> Show Less Professionals </>
            ) : (
              <> <Plus size={18} /> Discover More Experts </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
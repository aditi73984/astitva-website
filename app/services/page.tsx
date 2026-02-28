"use client";
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link'; 
import { 
  Brain, 
  BarChart3, 
  Handshake, 
  Globe, 
  GraduationCap, 
  ArrowRight,
  CalendarCheck,
  Sparkles,
  LucideIcon
} from 'lucide-react';

// 1. Interface banayein taaki 'any' ka error na aaye
interface Service {
  title: string;
  desc: string;
  icon: LucideIcon; // Type-safe icon
  gradient: string;
  slug: string;
}

// --- PREMIUM NEON TILT CARD ---
const ServiceCard = ({ service, index }: { service: Service, index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const innerTranslateZ = useTransform(mouseXSpring, [-0.5, 0.5], ["20px", "-20px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // Icon component ko variable mein store karein
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group h-full"
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-2 opacity-0 group-hover:opacity-40 blur-[40px] transition-all duration-700 bg-gradient-to-br ${service.gradient} rounded-[2.5rem]`} />

      <Link 
        href={`/services/${service.slug}`}
        className="relative block h-full bg-white/90 backdrop-blur-md border border-slate-100 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:border-white transition-all duration-500 overflow-hidden no-underline"
      >
        <motion.div 
          style={{ x: innerTranslateZ, transformStyle: "preserve-3d" }}
          className={`absolute -right-4 -top-4 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-[0.08] group-hover:opacity-[0.2] transition-all duration-700 blur-3xl`} 
        />

        {/* Icon Container */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className={`mb-8 w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center shadow-2xl group-hover:rotate-[10deg] group-hover:scale-110 transition-all duration-500`}
        >
          <Icon size={30} strokeWidth={2} />
        </div>

        <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
          <h3 className={`text-xl font-extrabold text-slate-900 mb-4 tracking-tight group-hover:bg-gradient-to-r ${service.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
            {service.title}
          </h3>
          
          <p className="text-slate-500 text-[15px] leading-relaxed mb-10 font-medium">
            {service.desc}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                <ArrowRight size={18} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 group-hover:text-slate-900 transition-colors">
                Explore Detail
              </span>
            </div>
            <Sparkles size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-indigo-400" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    { 
      title: "Counseling & Therapies", 
      desc: "Compassionate sessions focused on emotional resilience and lasting mental wellness.", 
      icon: Brain, 
      gradient: "from-blue-600 via-indigo-500 to-indigo-700",
      slug: "counseling-therapies" 
    },
    { 
      title: "Psychological Assessments", 
      desc: "Scientific diagnostic testing for IQ, personality, and neuro-developmental profiles.", 
      icon: BarChart3, 
      gradient: "from-purple-600 via-fuchsia-500 to-pink-600",
      slug: "psychological-assessments" 
    },
    { 
      title: "Rehabilitation Programs", 
      desc: "Holistic recovery frameworks for developmental disorders and life-skill development.", 
      icon: Handshake, 
      gradient: "from-emerald-500 via-teal-400 to-cyan-600",
      slug: "rehabilitation-programs" 
    },
    { 
      title: "Community Outreach", 
      desc: "Impactful mental health awareness programs and corporate workshops globally.", 
      icon: Globe, 
      gradient: "from-orange-500 via-amber-400 to-red-500",
      slug: "community-outreach" 
    },
    { 
      title: "Internship Programs", 
      desc: "Premier clinical exposure and professional mentorship for aspiring psychologists.", 
      icon: GraduationCap, 
      gradient: "from-sky-500 via-blue-400 to-indigo-600",
      slug: "internship-programs" 
    }
  ];

  return (
    <section id="services" className="relative py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter"
          >
            Scientific Care for a <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 bg-clip-text text-transparent italic">
              Healthier Mind.
            </span>
          </motion.h2>
          <p className="text-slate-500 text-xl font-light leading-relaxed">
            World-class psychological services tailored to your unique journey of healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        <div className="pt-20 border-t border-slate-100 flex flex-col items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-lg hover:bg-indigo-600 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              <CalendarCheck size={24} />
              Book a Session
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-50/40 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />
    </section>
  );
};

export default ServicesSection;
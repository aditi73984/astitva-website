"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link'; 
import { useRouter } from 'next/navigation'; 
import { 
  ArrowRight, ClipboardList, GraduationCap, HeartPulse, 
  Sparkles, CheckCircle2, Users, Award, Brain,
  CalendarCheck, UserRound, MessageSquare, LineChart, ChevronRight, Target, Eye
} from 'lucide-react';

import { MediaCard, MediaCardItem } from '@/components/ui/media-card';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleBooking = () => {
    window.open('contact', '_blank'); 
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };
  const floatingImage: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const workSteps = [
    { no: "01", title: "Make Appointment", desc: "Book your slot through call or WhatsApp easily.", icon: <CalendarCheck size={32} />, color: "bg-blue-600" },
    { no: "02", title: "Get Session", desc: "Meet with certified psychologists for a clinical assessment.", icon: <UserRound size={32} />, color: "bg-indigo-600" },
    { no: "03", title: "Counseling", desc: "Receive personalized therapy and scientific intervention plans.", icon: <MessageSquare size={32} />, color: "bg-cyan-600" },
    { no: "04", title: "Follow Up", desc: "Engage in periodic follow-ups to ensure your mental growth.", icon: <LineChart size={32} />, color: "bg-slate-800" }
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden font-sans pt-20 md:pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center bg-[#1747A3] text-white overflow-hidden rounded-b-[4rem]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] -mr-40 -mt-40" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Sparkles size={14} /> Professional Mental Health Support
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tighter">
              Astitva: Finding Your <br />
              <span className="text-cyan-300">True Existence.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-blue-50/90 max-w-2xl mb-12 border-l-4 border-cyan-400 pl-6 leading-relaxed">
              We provide professional, confidential, and compassionate support to help you navigate life's challenges and build lasting emotional resilience.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
              <button 
                onClick={scrollToServices}
                className="px-10 py-4 bg-white text-[#1747A3] rounded-xl font-bold hover:bg-cyan-50 transition-all flex items-center gap-2 shadow-xl active:scale-95"
              >
                Explore Services <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => router.push('/contact')}
                className="px-10 py-4 border-2 border-white/40 hover:bg-white/10 rounded-xl font-bold transition-all active:scale-95"
              >
                Book Appointment
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="about-image-box lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-600/5 rounded-full blur-[80px] -z-10" />
              
                <div className="relative z-10 p-4">
                  
                  
                  <motion.div
  variants={floatingImage}
  animate="animate"
  className="profile-img-container overflow-hidden rounded-[3rem] bg-slate-100 aspect-[4/5] relative group"
>
  {/* Glow Border */}
  <div className="absolute inset-0 rounded-[3rem] p-[4px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-spin-slow">
    <div className="w-full h-full bg-slate-100 rounded-[2.8rem]" />
  </div>

  {/* Image */}
  <img 
    src="/images/malveeka_p.jpeg"
    alt="Malveeka Rao"
    className="absolute inset-0 w-full h-full object-cover rounded-[2.8rem]"
  />

  {/* Sparkle overlay */}
  <div className="absolute inset-0 rounded-[3rem] pointer-events-none">
    <div className="absolute top-4 left-6 w-2 h-2 bg-white rounded-full animate-ping opacity-70"></div>
    <div className="absolute bottom-10 right-8 w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
    <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
  </div>

  {/* Soft light glow */}
  <div className="absolute -inset-4 bg-cyan-400/20 blur-2xl rounded-[4rem] -z-10"></div>
</motion.div>




                {/* NAME CARD */}
                <div className="absolute -bottom-20 right-30 -translate-y-1/2 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-blue-50 hidden md:block">
                  <h5 className="text-lg font-black text-slate-900 mb-1">Malveeka Rao</h5>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-tight">
                    Senior Consultant <br /> Clinical Psychotherapist
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* --- QUICK STATS --- */}
      <section className="relative z-20 -mt-12 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Users size={24} />, label: "Clients Supported", val: "5000+" },
            { icon: <Award size={24} />, label: "Years Experience", val: "25+ Years" },
            // { icon: <Brain size={24} />, label: "Expert Psychologists", val: "12+ Staff" }
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-xl flex items-center gap-6 border border-slate-100">
              <div className="p-4 bg-[#1747A3]/10 text-[#1747A3] rounded-xl">{stat.icon}</div>
              <div>
                <div className="text-3xl font-black text-slate-800">{stat.val}</div>
                <div className="text-slate-500 font-medium text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

            {/* --- WHAT'S NEW SECTION --- */}
      <section className="py-20 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest text-slate-900">What's New at Astitva</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <HeartPulse className="text-rose-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pre-Wedding Grooming</h3>
              <p className="text-slate-500 mb-6 text-sm">Empowering couples to start their journey with mental clarity and emotional strength.</p>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeKzg5H86krccR4hYhrYuaruUatUr8z5Lcs73NVFHtJNeELAw/viewform" className="text-blue-600 font-bold flex items-center gap-2">Read More <ArrowRight size={16}/></Link>
            </div>
            <div className="bg-[#1747A3] text-white p-8 rounded-3xl shadow-lg">
              <GraduationCap className="text-cyan-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Clinical Internship</h3>
              <p className="text-blue-100 mb-6 text-sm">Professional training programs for aspiring psychologists and clinical interns.</p>
              <Link href="/services/internship-programs" className="text-cyan-300 font-bold flex items-center gap-2">Apply Now <ArrowRight size={16}/></Link>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <ClipboardList className="text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Survey</h3>
              <p className="text-slate-500 mb-6 text-sm">Help us build better support systems by participating in our mental health survey.</p>
              <Link href="/services/community-outreach" className="text-blue-600 font-bold flex items-center gap-2">Take Survey <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION SECTION --- */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
              <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target size={120} />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md">
                    <Target size={28} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">Our Mission</h2>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Our mission is to make mental health services accessible and affordable for everyone. We strive to create a society where discussing mental health is free from stigma, ensuring every individual receives professional guidance for their emotional well-being while upholding the highest standards of privacy and trust.
                </p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Eye size={120} />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-md">
                    <Eye size={28} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">Our Vision</h2>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  At Astitva, we envision a future where every person can discover their true existence and lead a fulfilling life without fear. Through clinical expertise and psychological empowerment, we aim to build a world where individuals are resilient enough to face life's challenges with strength and positivity.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative">
              <div className="relative z-10 bg-white p-2 rounded-[3rem] shadow-2xl overflow-hidden">
                <div className="bg-[#1747A3] p-12 rounded-[2.8rem] text-white">
                  <h3 className="text-4xl font-black mb-6">Why We Do <br /><span className="text-cyan-300">What We Do?</span></h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <CheckCircle2 className="text-cyan-400 shrink-0" />
                      <p className="font-medium">Empowering lives through evidence-based therapy.</p>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 className="text-cyan-400 shrink-0" />
                      <p className="font-medium">Breaking the silence and stigma around mental illness.</p>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 className="text-cyan-400 shrink-0" />
                      <p className="font-medium">Fostering a community of resilient and healthy individuals.</p>
                    </div>
                  </div>
                  <div className="mt-10 p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                    <p className="italic text-blue-50">"Astitva is not just a center; it is a beacon of hope for everyone seeking true peace of mind."</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-cyan-400/20 -z-10 rounded-[3rem]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WORKING PROCESS --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16">How We <span className="text-blue-600">Work</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className={`w-20 h-20 ${step.color} text-white rounded-[2rem] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services-section" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-black text-slate-900">Mental Health <span className="text-blue-600">Services</span></h2>
            <Link href="/services" className="text-blue-600 font-bold flex items-center gap-1 hover:underline underline-offset-4">
              View All <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* {["Individual Therapy", "Child Counseling", "Couple Therapy", "Corporate Wellness"].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                   <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service}</h3>
                <p className="text-slate-500 text-sm mb-6">Expert psychiatric support and specialized therapy sessions tailored for your emotional well-being.</p>
                <Link href={`/services`} className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))} */}

            {[
  { title: "Counseling & Therapies", slug: "counseling-therapies" },
  { title: "Psychological Assessments", slug: "psychological-assessments" },
  { title: "Rehabilitation Programs", slug: "rehabilitation-programs" },
  { title: "Community Outreach", slug: "community-outreach" }
].map((service, i) => (
  <div 
    key={i} 
    className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform"
  >
    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
      <Brain size={24} />
    </div>

    <h3 className="text-xl font-bold text-slate-900 mb-4">
      {service.title}
    </h3>

    <p className="text-slate-500 text-sm mb-6">
      Professional psychological services tailored to your mental well-being.
    </p>

    <Link
      href={`/services/${service.slug}`}
      className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center gap-2"
    >
      Learn More <ArrowRight size={14} />
    </Link>
  </div>
))}
          </div>
        </div>
      </section>

      {/* --- WHAT'S NEW SECTION ---
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest text-slate-900">What's New at Astitva</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <HeartPulse className="text-rose-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pre-Wedding Grooming</h3>
              <p className="text-slate-500 mb-6 text-sm">Empowering couples to start their journey with mental clarity and emotional strength.</p>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeKzg5H86krccR4hYhrYuaruUatUr8z5Lcs73NVFHtJNeELAw/viewform" className="text-blue-600 font-bold flex items-center gap-2">Read More <ArrowRight size={16}/></Link>
            </div>
            <div className="bg-[#1747A3] text-white p-8 rounded-3xl shadow-lg">
              <GraduationCap className="text-cyan-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Clinical Internship</h3>
              <p className="text-blue-100 mb-6 text-sm">Professional training programs for aspiring psychologists and clinical interns.</p>
              <Link href="/services/internship-programs" className="text-cyan-300 font-bold flex items-center gap-2">Apply Now <ArrowRight size={16}/></Link>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <ClipboardList className="text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Survey</h3>
              <p className="text-slate-500 mb-6 text-sm">Help us build better support systems by participating in our mental health survey.</p>
              <Link href="/services/community-outreach" className="text-blue-600 font-bold flex items-center gap-2">Take Survey <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- CTA SECTION --- */}
      {/* <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-[#1747A3] rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Ready to reclaim your <br />peace of mind?</h2>
            <button 
              onClick={handleBooking}
              className="px-12 py-5 bg-white text-[#1747A3] rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              Book Your First Session
            </button>
          </div>
        </div>
      </section> */}

      <section className="py-24 px-6 relative overflow-hidden">
  {/* Background Gradient Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800"></div>
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-400/20 blur-[120px] rounded-full"></div>
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-400/20 blur-[120px] rounded-full"></div>

  <div className="relative container mx-auto">
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[3rem] p-16 md:p-24 text-center text-white shadow-2xl">

      <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
        Your Peace Begins <br />
        <span className="text-cyan-300">With One Step.</span>
      </h2>

      <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
        Take the first step towards emotional clarity and inner balance.
        Our experts are here to support you.
      </p>

      <button
        onClick={handleBooking}
        className="px-14 py-6 bg-white text-[#1747A3] rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all active:scale-95 relative overflow-hidden group"
      >
        <span className="relative z-10">Book Your First Session</span>

        {/* Button Shine Effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
      </button>

    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;
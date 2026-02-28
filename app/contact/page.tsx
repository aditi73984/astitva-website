"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, CreditCard, Video, Calendar, 
  MapPin, Mail, Phone, MessageCircle, ArrowUpRight 
} from 'lucide-react';

const ContactSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const infoDetails = [
    { icon: <Clock />, title: "Session Duration", desc: "1 Hour Professional Session", color: "blue" },
    { icon: <CreditCard />, title: "Fees", desc: "₹ 3500/- per session", sub: "Tests vary by type", color: "emerald" },
    { icon: <Video />, title: "Mode", desc: "Online & In-Clinic", color: "purple" },
    { icon: <Calendar />, title: "Timing", desc: "Mon – Sat", sub: "11:00 AM – 06:00 PM", color: "orange" },
  ];

  const contactLinks = [
    { 
      icon: <MapPin size={30} />, 
      title: "Our Location", 
      content: "Flat No-F-1, Harshita Apartment, Nawab Yusuf Road, Civil Lines, Prayagraj", 
      link: "https://maps.google.com" 
    },
    { 
      icon: <Mail size={30} />, 
      title: "Email Us", 
      content: "astitva.psy@gmail.com", 
      link: "mailto:astitva.psy@gmail.com" 
    },
    { 
      icon: <Phone size={30} />, 
      title: "Call / WhatsApp", 
      content: "+91 9369148078", 
      link: "tel:+919369148078" 
    },
  ];

  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        {/* --- TITLE --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6"
          >
            We're Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Listen</span>
          </motion.h2>
          <p className="text-lg text-slate-500">
            Astitva Clinic is committed to providing a safe space for your mental well-being.
          </p>
        </div>

        {/* --- TOP 4 INFO CARDS (MINI) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {infoDetails.map((item, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="bg-white/70 backdrop-blur-md border border-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-2xl mb-4 flex items-center justify-center bg-slate-100 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500`}>
                {item.icon}
              </div>
              <h5 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h5>
              <p className="text-slate-600 font-medium">{item.desc}</p>
              {item.sub && <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-tighter">{item.sub}</p>}
            </motion.div>
          ))}
        </motion.div>

        {/* --- MAIN CONTACT CARDS (3D EFFECT) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((contact, i) => (
            <motion.a
              href={contact.link}
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: i * 0.1 }}
              className="relative group block p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white to-slate-200 shadow-lg"
            >
              <div className="bg-white hover:bg-slate-50 transition-colors h-full w-full rounded-[2.5rem] p-10 flex flex-col items-center text-center">
                <div className="mb-6 p-5 bg-blue-50 text-blue-600 rounded-full group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700 shadow-inner">
                  {contact.icon}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{contact.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed mb-6">
                  {contact.content}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                  Connect Now <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* --- QUICK WHATSAPP BUTTON --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex justify-center"
        >
          <a 
            href="https://wa.me/919369148078" 
            className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold shadow-lg shadow-green-200 hover:scale-105 transition-transform"
          >
            <MessageCircle /> WhatsApp Support Available
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
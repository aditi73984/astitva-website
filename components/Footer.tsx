"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, Instagram, 
  Facebook, Linkedin, ArrowRight, ShieldCheck 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-white text-slate-600 pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* --- BRAND COLUMN (Logo Updated) --- */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              {/* FIXED: Logo Image instead of HeartPulse */}
              <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
                <img 
                  src="/images/logo-small.png" 
                  alt="Astitva Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-900 leading-none uppercase">
                  ASTITVA
                </span>
                <span className="text-[10px] font-bold text-[#1747A3] uppercase tracking-[0.2em]">
Psychological Counselling Centre                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs font-medium text-justify">
              Dedicated to emotional, behavioral, and educational wellness since 2008. Helping you rediscover your true existence through professional care.
            </p>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 w-fit">
              <ShieldCheck className="text-[#1747A3]" size={18} />
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-700">
                Govt. Registered NGO
              </div>
            </div>
          </div>

          {/* --- QUICK LINKS --- */}
          <div>
            <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 text-sm font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#1747A3] transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#1747A3] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- CONTACT INFO --- */}
          <div>
            <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">Get In Touch</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg text-[#1747A3]">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-500 leading-snug">
                  Astitva Sansthan<br />
                  Flat No-F-1, Harshita Apartment,<br /> Nawab Yusuf Road, Civil Lines, Prayagraj
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-blue-50 p-2 rounded-lg text-[#1747A3]">
                  <Phone size={16} />
                </div>
                <a href="tel:+919369148078" className="hover:text-[#1747A3] transition-colors font-bold">+91 93691 48078</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-blue-50 p-2 rounded-lg text-[#1747A3]">
                  <Mail size={16} />
                </div>
                <a href="mailto:astitva.psy@gmail.com" className="hover:text-[#1747A3] transition-colors font-bold">astitva.psy@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* --- SOCIALS --- */}
          <div>
            <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">Follow Us</h4>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed font-medium">
              Join our community for daily mental health insights and center updates.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/astitva_psychological/' },
                { Icon: Facebook, href: 'https://www.facebook.com/share/1LLmnEAxtG/' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/malveeka-rao-b85737155/' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#1747A3] hover:text-white transition-all border border-slate-100 shadow-sm"
                >
                  <item.Icon size={20} />
                </a>
              ))}
            </div>
            <Link 
              href="/contact" 
              className="mt-8 flex items-center justify-between p-4 bg-[#1747A3] text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
            >
              Book Session <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            © {currentYear} Astitva Psychological Counselling Centre.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
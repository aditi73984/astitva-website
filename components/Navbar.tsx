"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      {logoHover && (
  <div className="fixed inset-0 backdrop-blur-md bg-white/20 z-40 transition-all duration-300" />
)}

      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* --- LOGO UPDATED --- */}
        {/* <Link href="/" className="flex items-center gap-3 group"> */}
        <Link 
  href="/" 
  className="flex items-center gap-3 group relative z-50"
  onMouseEnter={() => setLogoHover(true)}
  onMouseLeave={() => setLogoHover(false)}
>
          {/* <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-12 h-12 flex items-center justify-center"
          > */}

          <motion.div
  animate={{ scale: logoHover ? 1.4 : 1 }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}
  className="relative w-12 h-12 flex items-center justify-center"
>
            {/* Logo Image */}
            <img 
              src="/images/logo-small.png" 
              alt="Astitva Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
              ASTITVA
            </span>
            <span className="text-[10px] font-bold text-[#1747A3] uppercase tracking-[0.2em]">
Psychological Counselling Centre            </span>
          </div>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group text-sm font-semibold transition-colors ${
                  isActive ? 'text-[#1747A3]' : 'text-slate-600 hover:text-[#1747A3]'
                }`}
              >
                {link.name}
                {/* Framer Motion Underline Effect */}
                {isActive ? (
                  <motion.div 
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#1747A3]"
                  />
                ) : (
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1747A3] transition-all group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* --- MOBILE TOGGLE --- */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden p-2 text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* --- MOBILE MENU WITH FRAMER MOTION --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-slate-50 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-bold block py-2 ${
                      pathname === link.href ? 'text-[#1747A3]' : 'text-slate-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              {/* Optional: Mobile CTA */}
              <Link 
                href="/contact"
                className="mt-4 bg-[#1747A3] text-white text-center py-4 rounded-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
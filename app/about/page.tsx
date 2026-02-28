"use client";
import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CheckCircle2, Award, Shield, UserCheck, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // --- SLIDER LOGIC ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/assets/images/slide1.jpg", title: "Awareness Programs", desc: "Educating the community about mental health." },
    { src: "/assets/images/slide2.jpg", title: "Counseling Sessions", desc: "Professional support for emotional well-being." },
    { src: "/assets/images/slide3.jpg", title: "NGO Initiatives", desc: "Our journey since 2008 with Astitva Sansthan." },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // GSAP Animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    tl.from(".about-content-box", { x: -50, opacity: 0, duration: 1.2, ease: "power3.out" })
      .from(".about-image-box", { x: 50, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=1")
      .from(".stat-badge", { scale: 0, opacity: 0, stagger: 0.2, duration: 0.5 }, "-=0.5")
      .from(".slider-container", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.2");

    // Profile photo floating effect
    gsap.to(".profile-img-container", {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-24 bg-white overflow-hidden relative">
      
      {/* Subtle Blue Decorative Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          
          {/* --- LEFT CONTENT --- */}
          <div className="about-content-box lg:w-1/2 order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-blue-100">
              <UserCheck size={14} /> About Astitva Sansthan
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15] mb-6">
              Empowering Mental <br />
              <span className="text-blue-600">Well-Being Together</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Astitva Psychological Counseling Centre is a branch of <strong>Astitva Sansthan (NGO)</strong>. 
              Since <strong>2008</strong>, we have been providing a safe space for emotional and behavioral healing 
              with a professional vision of peace and recovery.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Mental Health Awareness & Workshops",
                "Emotional Rehabilitation Services",
                "Compassionate Clinical Counseling"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* BLUE TAGS */}
            {/* <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-100">
              {["#MentalWellness", "#MentalHealth", "#NGOIndia"].map(tag => (
                <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                  {tag}
                </span>
              ))}
            </div> */}
          </div>

          {/* --- RIGHT PHOTO WRAPPER --- */}
          <div className="about-image-box lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-600/5 rounded-full blur-[80px] -z-10" />
              
              <div className="relative z-10 p-4">
                <div className="profile-img-container overflow-hidden rounded-[3rem] border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(37,99,235,0.15)] bg-slate-100 aspect-[4/5] relative">
                  <img 
                    src="/images/malveeka_p.jpeg"  /* Updated Image Path */
                    alt="Malveeka Rao" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                </div>

                {/* EXPERIENCE BADGE */}
                <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-[2.5rem] shadow-2xl shadow-blue-200 flex items-center gap-4 border-8 border-white">
                  <div className="text-4xl font-black">25+</div>
                  <div className="text-[10px] uppercase font-black leading-tight tracking-[0.1em]">
                    Years of <br /> Guidance
                  </div>
                </div>

                {/* NAME CARD */}
                <div className="absolute -bottom-20 -right-12 -translate-y-1/2 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-blue-50 hidden md:block">
                  <h5 className="text-lg font-black text-slate-900 mb-1">Malveeka Rao</h5>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-tight">
                    Senior Consultant <br /> Clinical Psychotherapist
                  </p>
                </div>
              </div>

              {/* STAT BADGES */}
              <div className="flex justify-center gap-4 mt-16">
                <div className="stat-badge flex items-center gap-2 px-5 py-2.5 bg-white rounded-2xl border border-blue-100 text-blue-600 text-[10px] font-black tracking-widest shadow-sm">
                  <Shield size={84} /> REGISTERED NGO
                </div>
                <div className="stat-badge flex items-center gap-2 px-5 py-2.5 bg-white rounded-2xl border border-blue-100 text-blue-600 text-[10px] font-black tracking-widest shadow-sm">
                  <Award size={84} /> RCI LICENSED
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- MISSION BAR --- */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Our Mission</h3>
          <p className="text-2xl md:text-3xl text-slate-700 max-w-4xl mx-auto font-bold italic leading-relaxed">
            "Supporting emotional wellness through <span className="text-blue-600">compassionate guidance</span> and accessible mental care for all."
          </p>
        </div>

        {/* --- MISSION SLIDER --- */}
        <div className="slider-container relative max-w-6xl mx-auto group">
          <div className="relative overflow-hidden rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(37,99,235,0.2)] aspect-[16/9] md:aspect-[21/9] bg-slate-900 border-[8px] border-white">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <img 
                  src={slide.src} 
                  alt={slide.title} 
                  className={`w-full h-full object-cover transition-transform duration-[6000ms] ${index === currentSlide ? "scale-110" : "scale-100"}`} 
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/20 to-transparent flex items-center">
                  <div className="slide-text-content p-8 md:p-20 max-w-2xl">
                    <h4 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter drop-shadow-lg">
                      {slide.title}
                    </h4>
                    <p className="text-blue-50 text-base md:text-lg font-medium leading-relaxed opacity-90">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-blue-600 transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-blue-600 transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? "w-16 bg-blue-600" : "w-4 bg-blue-100"}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
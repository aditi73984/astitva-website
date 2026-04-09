"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, CheckCircle2 } from "lucide-react";

const PreWeddingPage = () => {
  return (
    <div className="bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <HeartHandshake className="mx-auto text-blue-600 mb-4" size={40} />
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Pre-Wedding Grooming
          </h1>
          <p className="text-blue-600 font-semibold mb-2">
            Because a beautiful marriage begins within.
          </p>
        </div>

        {/* SURVEY CTA */}
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 text-center max-w-3xl mx-auto mb-16">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
            Take the Relationship Readiness Survey
        </h3>
        <p className="text-slate-600 text-sm mb-6">
            Understand your compatibility, communication style, and emotional readiness before marriage.
        </p>

        <a
            href="https://forms.gle/j3jvfpi3tqLuwNQx7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
        >
            Take the Survey →
        </a>
        </div>

        {/* WHAT IS SECTION */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            What is Pre-Wedding Grooming?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A modern form of couple therapy designed to prepare partners emotionally, 
            mentally, and relationally before marriage. It helps couples align expectations, 
            improve communication, resolve differences, and build emotional intelligence.
          </p>
          <p className="text-slate-600 leading-relaxed">
            It’s not about “fixing” people — it’s about transforming two individuals into 
            a confident, emotionally intelligent, future-ready couple.
          </p>
        </div>

        {/* WHY IT MATTERS */}
        <div className="bg-blue-600 text-white rounded-3xl p-10 mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Why It Matters
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            {[
              "Communicate effectively and resolve conflicts",
              "Understand each other’s needs and strengths",
              "Align values, goals, and expectations",
              "Prepare for challenges with emotional maturity"
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* KEY AREAS */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-slate-900">
            Key Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-sm">

            <div>
              <h3 className="font-bold text-blue-600 mb-2">Emotional Intelligence</h3>
              <p className="text-slate-600">Understanding and expressing emotions wisely</p>
            </div>

            <div>
              <h3 className="font-bold text-blue-600 mb-2">Compatibility</h3>
              <p className="text-slate-600">Aligning life goals, careers, and family plans</p>
            </div>

            <div>
              <h3 className="font-bold text-blue-600 mb-2">Stress Detox</h3>
              <p className="text-slate-600">Managing wedding chaos and transitions</p>
            </div>

            <div>
              <h3 className="font-bold text-blue-600 mb-2">Digital Boundaries</h3>
              <p className="text-slate-600">Balancing privacy in the social media age</p>
            </div>

          </div>
        </div>

        {/* WHO SHOULD ATTEND */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Who Should Attend?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-center">

            <div>
              <p className="font-bold text-blue-400 mb-2">Strong Couples</p>
              <p className="opacity-80">Build an even stronger foundation</p>
            </div>

            <div>
              <p className="font-bold text-blue-400 mb-2">Doubtful Partners</p>
              <p className="opacity-80">Resolve confusion and concerns</p>
            </div>

            <div>
              <p className="font-bold text-blue-400 mb-2">Clarity Seekers</p>
              <p className="opacity-80">Gain clarity before marriage</p>
            </div>

          </div>
        </div>

        {/* TREND SECTION */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            A Modern Trend with Meaning
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Today’s youth understand that emotional strength matters more than external 
            appearances. That’s why Pre-Wedding Grooming is becoming a classy and meaningful 
            choice among couples in Prayagraj.
          </p>
        </div>

        {/* FINAL QUOTE */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-3xl p-10 text-center max-w-4xl mx-auto shadow-xl">
          <p className="text-lg italic leading-relaxed">
            “When a couple sits in the wedding mandap, they should be not only 
            beautifully dressed on the outside — but emotionally prepared and 
            mentally clear on the inside.”
          </p>
          <p className="mt-4 text-sm opacity-90">
            — Astitva Psychological Counselling Centre, Prayagraj
          </p>
        </div>

      </div>
    </div>
  );
};

export default PreWeddingPage;
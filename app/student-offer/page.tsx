"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";

const StudentOfferPage = () => {
  return (
    <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <GraduationCap className="mx-auto text-blue-600 mb-4" size={40} />
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Special Offer for Students
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Supporting students with accessible and affordable mental health care.
          </p>
        </div>

        {/* CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            What We Offer
          </h2>

          <div className="space-y-4 mb-8">
            {[
              "Discounted counseling sessions for students",
              "Stress, anxiety & academic pressure support",
              "Career guidance & emotional well-being sessions",
              "Confidential and professional therapy"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600" size={18} />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <p className="text-slate-700 text-sm leading-relaxed">
              This initiative is designed to make mental health support more accessible 
              to students facing academic, emotional, and personal challenges.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default StudentOfferPage;
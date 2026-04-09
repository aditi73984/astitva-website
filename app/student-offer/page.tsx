"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";

const StudentOfferPage = () => {
  return (
    <div className="bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <GraduationCap className="mx-auto text-blue-600 mb-4" size={40} />
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Student Special Wellness Program
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            The Student Special Wellness Program is a structured psychological support initiative designed specifically for students. It aims to help them overcome emotional, academic, and interpersonal challenges while enhancing their overall well-being and performance.
            <br />
            Under expert supervision, this program focuses on building emotional strength, clarity in decision-making, and effective coping strategies for modern student life.

          </p>
        </div>

        {/* BENEFITS BOX */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Key Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* 1 */}
            <div>
              <h3 className="font-bold text-blue-600 mb-3">Emotional Wellness</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 size={16}/> Heal loneliness & emotional hurt</li>
                <li className="flex gap-2"><CheckCircle2 size={16}/> Build resilience & stress control</li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h3 className="font-bold text-blue-600 mb-3">Relationship Development</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 size={16}/> Improve friendships & family bonds</li>
                <li className="flex gap-2"><CheckCircle2 size={16}/> Restore trust & understanding</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h3 className="font-bold text-blue-600 mb-3">Decision-Making</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 size={16}/> Career & life clarity</li>
                <li className="flex gap-2"><CheckCircle2 size={16}/> Confident future planning</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h3 className="font-bold text-blue-600 mb-3">Academic Support</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 size={16}/> Better focus & memory</li>
                <li className="flex gap-2"><CheckCircle2 size={16}/> Reduce exam anxiety</li>
              </ul>
            </div>

          </div>
        </div>

        {/* FLOATING PRICE CARD */}
        <div className="relative mb-20">
          <div className="bg-blue-600 text-white rounded-3xl p-10 shadow-2xl text-center max-w-xl mx-auto">
            <p className="uppercase text-xs tracking-widest mb-2">Student Offer</p>
            <h2 className="text-4xl font-black mb-2">₹1000 / session</h2>
            <p className="text-sm opacity-80">
              Standard Fee ₹3500 — <span className="font-semibold">~71% Discount</span>
            </p>
          </div>
        </div>

        {/* CRITERIA (3 DIVS LIKE IMAGE) */}
        <div className="bg-[#0f172a] text-white rounded-3xl p-10 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Eligibility Criteria
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-sm">

            <div>
              <p className="uppercase text-blue-400 font-bold mb-2">EWS Certificate</p>
              <p className="opacity-80">Valid certificate issued by government authority</p>
            </div>

            <div>
              <p className="uppercase text-blue-400 font-bold mb-2">College Enrollment</p>
              <p className="opacity-80">Must be enrolled in a recognized institution</p>
            </div>

            <div>
              <p className="uppercase text-blue-400 font-bold mb-2">ID Verification</p>
              <p className="opacity-80">Valid & updated college ID required</p>
            </div>

          </div>
        </div>

        {/* EXPERT (HIGHLIGHTED DIV) */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-3xl p-8 shadow-xl max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">Expert Supervision</h3>
          <p className="font-semibold text-lg">Dr. Malveeka Rao</p>
          <p className="text-sm opacity-90 mt-2">
            Senior Consultant Clinical Psychotherapist & Psychologist <br />
            Founding Director, Astitva Psychological Counselling Centre <br />
            RCI Licensed Professional
          </p>
        </div>

      </div>
    </div>
  );
};

export default StudentOfferPage;
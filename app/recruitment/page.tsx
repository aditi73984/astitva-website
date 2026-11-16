
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Brain,
  ClipboardList,
  FileText,
  GraduationCap,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
  Users,
  CheckCircle2,
  CalendarDays,
  Award,
  Download,
  Megaphone,
  Laptop,
  Stethoscope,
  ClipboardCheck,
  ExternalLink,
} from "lucide-react";

// Add the online application form URL here when it is ready.
const APPLICATION_FORM_URL = "";

const vacancies = [
  {
    title: "Psychologist",
    department: "Astitva Centre",
    posts: "01 Post",
    qualification: "M.A. / M.Sc. in Psychology",
    icon: Stethoscope,
    gradient: "from-blue-600 to-indigo-600",
    responsibilities: [
      "Case history taking and Mental Status Examination.",
      "Conducting counselling sessions and client follow-ups.",
      "Organising mental health awareness workshops.",
    ],
  },
  {
    title: "Psychometric Test Administrator",
    department: "Astitva Centre",
    posts: "01 Post",
    qualification: "B.A. / M.A. / M.Sc. in Psychology",
    icon: Brain,
    gradient: "from-purple-600 to-pink-600",
    responsibilities: [
      "Administration of psychological and clinical tests.",
      "Accurate scoring and report drafting.",
      "Maintaining assessment records and documentation.",
    ],
  },
  {
    title: "Field Marketing & Business Development Executive",
    department: "Psychub & Astitva",
    posts: "01 Post",
    qualification: "MBA (Marketing) / BBA",
    icon: Megaphone,
    gradient: "from-orange-500 to-rose-500",
    responsibilities: [
      "Visiting schools, colleges, institutes and doctors.",
      "Promoting Psychub diagnostic test kits.",
      "Promoting Astitva counselling programmes and services.",
    ],
    note: "A personal two-wheeler is preferred for local visits.",
  },
  {
    title: "Social Media & Digital Marketing Executive",
    department: "Online Presence",
    posts: "01 Post",
    qualification:
      "Graduate with practical knowledge of digital marketing / graphic design",
    icon: Laptop,
    gradient: "from-cyan-500 to-blue-600",
    responsibilities: [
      "Managing Instagram, Facebook and YouTube.",
      "Creating social media posts and reels using Canva.",
      "Updating the website and supporting online promotions.",
    ],
  },
];

const selectionStages = [
  {
    number: "01",
    title: "Application & Document Screening",
    description:
      "Submitted CVs, academic credentials and mandatory documents will be reviewed. Shortlisted applicants will be informed about the next stage.",
  },
  {
    number: "02",
    title: "Practical / Skill Assessment",
    description:
      "Candidates will undergo a practical evaluation relevant to their applied position, such as case-history taking, psychometric test administration, communication demonstrations or content creation.",
  },
  {
    number: "03",
    title: "Personal Interview",
    description:
      "The final interaction with the Founder & Director will assess professional temperament, ethical commitment and organisational fit.",
  },
];

const documents = [
  "Updated CV / Resume",
  "Two recent passport-size photographs",
  "Aadhaar Card copy",
  "Academic marksheets and degree certificates",
  "Experience / internship certificates, where applicable",
  "Portfolio or sample designs for Digital Marketing applicants",
  "Driving licence / vehicle details for Field Marketing applicants, where applicable",
];

const RecruitmentPage: React.FC = () => {
  return (
    <main className="bg-slate-50 pt-20 md:pt-24 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-[#1747A3] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 -right-20 w-[550px] h-[550px] bg-cyan-300 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:35px_35px]" />
        </div>

        <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <BriefcaseBusiness size={15} />
              Careers at Astitva
            </span>

            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Grow With Us.
              <br />
              <span className="text-cyan-300">
                Make a Difference.
              </span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              Astitva Psychological Counselling Centre and Psychub invite
              applications from eligible, committed and motivated candidates
              for clinical, psychometric, field marketing and digital
              promotion roles in Prayagraj.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#vacancies"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1747A3] rounded-xl font-bold hover:bg-cyan-50 transition-all shadow-lg"
              >
                Explore Opportunities
                <ArrowRight size={18} />
              </a>

              <a
                href="#application"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/40 rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                How to Apply
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* APPLICATION DATES */}
      <section className="relative z-20 -mt-8 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <CalendarDays size={27} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Application Window
              </p>
              <p className="text-lg md:text-xl font-black text-slate-900">
                17 – 30 November 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0">
              <ClipboardCheck size={27} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Screening & Interviews
              </p>
              <p className="text-lg md:text-xl font-black text-slate-900">
                December 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VACANCIES */}
      <section id="vacancies" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.2em]">
              Current Openings
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-5">
              Explore Our{" "}
              <span className="text-blue-600">Opportunities</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We are looking for individuals who are passionate about
              psychological well-being, professional growth and meaningful
              community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vacancies.map((job, index) => {
              const Icon = job.icon;

              return (
                <motion.article
                  key={job.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-[2rem] p-7 md:p-9 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-7">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${job.gradient} text-white flex items-center justify-center shrink-0 shadow-lg`}
                      >
                        <Icon size={27} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                          {job.department}
                        </span>
                        <p className="text-xs text-slate-400 mt-1">
                          {job.posts}
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-5">
                    {job.title}
                  </h3>

                  <div className="bg-slate-50 rounded-xl p-4 mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Eligibility
                    </p>
                    <p className="text-slate-700 font-semibold leading-relaxed">
                      {job.qualification}
                    </p>
                  </div>

                  <h4 className="text-sm font-black text-slate-900 mb-4">
                    Key Responsibilities
                  </h4>

                  <ul className="space-y-3">
                    {job.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed"
                      >
                        <CheckCircle2
                          size={17}
                          className="text-emerald-500 shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {job.note && (
                    <p className="mt-5 text-sm text-blue-700 bg-blue-50 rounded-lg p-3">
                      {job.note}
                    </p>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* REMUNERATION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.2em]">
              Compensation Structure
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-5">
              Salary & <span className="text-blue-600">Stipend</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Remuneration is determined by the candidate&apos;s academic
              status and relevant work experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {[
              {
                title: "Paid Internship",
                amount: "₹5,000",
                suffix: "/ month",
                detail: "For pursuing final-year students",
                extra:
                  "Fixed monthly stipend and an official Experience Certificate upon successful completion.",
                icon: GraduationCap,
              },
              {
                title: "Full-Time – Fresher",
                amount: "₹10,000",
                suffix: "/ month",
                detail: "Fresh graduates / post-graduates",
                extra: "Consolidated monthly salary.",
                icon: Users,
              },
              {
                title: "Full-Time – Experienced",
                amount: "₹15,000",
                suffix: "/ month",
                detail: "Minimum 2 years of relevant experience",
                extra: "Consolidated monthly salary.",
                icon: Award,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-[2rem] p-8 border ${
                    index === 1
                      ? "bg-[#1747A3] text-white border-[#1747A3] shadow-xl"
                      : "bg-slate-50 text-slate-900 border-slate-100"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-7 ${
                      index === 1
                        ? "bg-white/15 text-cyan-300"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-black mb-4">{item.title}</h3>

                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl md:text-4xl font-black">
                      {item.amount}
                    </span>
                    <span
                      className={`text-sm ${
                        index === 1 ? "text-blue-100" : "text-slate-500"
                      }`}
                    >
                      {item.suffix}
                    </span>
                  </div>

                  <p
                    className={`text-sm font-bold mb-5 ${
                      index === 1 ? "text-cyan-200" : "text-blue-700"
                    }`}
                  >
                    {item.detail}
                  </p>

                  <p
                    className={`text-sm leading-relaxed ${
                      index === 1 ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    {item.extra}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="max-w-5xl mx-auto mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
            <IndianRupee
              size={22}
              className="text-blue-700 shrink-0 mt-1"
            />
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Additional benefits:</strong> The Field Marketing &
              Business Development Executive position includes
              performance-based sales incentives and local travel allowance
              (TA), in addition to monthly remuneration.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTION PROCESS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.2em]">
              What Happens Next?
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-5">
              Selection <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Our recruitment process consists of three stages to assess
              qualifications, practical skills and professional suitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {selectionStages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg"
              >
                <span className="text-5xl font-black text-blue-100">
                  {stage.number}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-6 mb-4">
                  {stage.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl border border-slate-100 p-6 md:p-8">
            <h3 className="font-black text-slate-900 text-lg mb-3">
              Original Document Verification
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Candidates called for the interview must bring their original
              academic marksheets, degrees, Aadhaar Card,
              experience/internship certificates and driving licence, where
              applicable, for physical verification. Submission of false or
              incomplete information will lead to disqualification.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATION INSTRUCTIONS */}
      <section id="application" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.2em]">
              Take the First Step
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-5">
              How to <span className="text-blue-600">Apply</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Interested candidates can submit their applications through
              email, WhatsApp or in person at the centre.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="bg-slate-50 rounded-[2rem] p-8 md:p-10 border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-7">
                Application Details
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={21} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Email</p>
                    <a
                      href="mailto:astitva.psy@gmail.com"
                      className="text-blue-700 hover:underline"
                    >
                      astitva.psy@gmail.com
                    </a>
                    <p className="text-xs text-slate-500 mt-2">
                      Subject: Application – [Position] – [Internship /
                      Fresher / Experienced]
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-green-100 text-green-700 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={21} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">
                      WhatsApp / Contact
                    </p>
                    <a
                      href="https://wa.me/919369148078"
                      className="text-blue-700 hover:underline"
                    >
                      +91 93691 48078
                    </a>
                    <p className="text-slate-500 text-sm mt-1">
                      +91 73804 95023
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-orange-100 text-orange-700 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={21} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">
                      Offline Submission
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Flat No. F-1, 1st Floor, Harshita Apartment,
                      <br />
                      10/18, Nawab Yusuf Road, Allahabad.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-7 border-t border-slate-200">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Clearly mention the position applied for and your
                  application category: Paid Internship, Full-time Fresher
                  or Full-time Experienced.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-lg">
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                Documents Required
              </h3>
              <p className="text-sm text-slate-500 mb-7">
                Please keep the following documents ready while applying.
              </p>

              <ul className="space-y-4">
                {documents.map((document) => (
                  <li
                    key={document}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 shrink-0 mt-0.5"
                    />
                    {document}
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-blue-50 rounded-xl p-5">
                <p className="text-sm text-blue-900 leading-relaxed">
                  Applications must be submitted on or before{" "}
                  <strong>30 November 2026</strong>. Screening tests and
                  interviews will be held in December 2026. The schedule and
                  venue details will be shared with shortlisted applicants.
                </p>
              </div>
            </div>
          </div>

          {/* ONLINE APPLICATION FORM PLACEHOLDER */}
          <div className="max-w-4xl mx-auto mt-12 text-center bg-[#1747A3] text-white rounded-[2rem] p-8 md:p-12">
            <ClipboardList size={38} className="mx-auto text-cyan-300 mb-5" />
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Prefer Applying Online?
            </h3>
            <p className="text-blue-100 mb-7 max-w-2xl mx-auto leading-relaxed">
              You will also be able to submit your application through our
              online application form.
            </p>

            {APPLICATION_FORM_URL ? (
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1747A3] rounded-xl font-bold hover:bg-cyan-50 transition-all"
              >
                Fill Online Application
                <ExternalLink size={17} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-white/15 text-white border border-white/30 rounded-xl font-bold">
                Online Application Form – Coming Soon
              </span>
            )}
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.2em]">
              Important Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4">
              Recruitment <span className="text-blue-600">Documents</span>
            </h2>
            <p className="text-slate-500 mt-4">
              Read the official recruitment information and candidate
              guidelines before applying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Recruitment Advertisement",
                description: "Vacancies, eligibility and remuneration details.",
                href: "/documents/Astitva_Recruitment_Advertisement.pdf",
              },
              {
                title: "Candidate Guidelines",
                description: "Selection procedure and terms of engagement.",
                href: "/documents/Astitva_Candidate_Guidelines.pdf",
              },
              {
                title: "Offline Application Form",
                description: "Download and submit the application at the centre.",
                href: "/documents/Astitva_Offline_Application_Form.pdf",
              },
            ].map((file) => (
              <a
                key={file.title}
                href={file.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                    <FileText size={24} />
                  </div>
                  <Download
                    size={19}
                    className="text-slate-400 group-hover:text-blue-600 transition-colors"
                  />
                </div>
                <h3 className="font-black text-slate-900 mb-2">
                  {file.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {file.description}
                </p>
                <span className="inline-flex items-center gap-2 text-blue-700 text-xs font-black uppercase tracking-widest mt-5">
                  View Document <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIDENTIALITY & TERMS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 md:p-9">
            <h3 className="text-lg font-black text-slate-900 mb-3">
              Important Information for Applicants
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Selected candidates are required to maintain strict
              confidentiality regarding client records, case histories,
              psychological test data and institutional materials. A formal
              Non-Disclosure Agreement (NDA) must be executed upon joining.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Full-time appointments are initially subject to a probation
              period of 1 to 3 months. Appointment confirmation is based on
              satisfactory performance, punctuality, adherence to
              institutional protocols and professional conduct. The
              management reserves the right to amend or withdraw vacancies
              and recruitment conditions as per institutional requirements.
              Please refer to the Candidate Guidelines for complete terms.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
   
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-blue-600 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white shadow-xl shadow-blue-200"
                >
                <Users size={48} className="mb-6 opacity-30" />

                <h3 className="text-2xl font-black mb-4 tracking-tight">
                    Be Part of the Change
                </h3>

                <p className="text-blue-100 text-sm font-medium mb-8 max-w-md">
                    Let's work together to create a more mindful and supportive society.
                </p>

                <Link
                    href="/contact"
                    className="px-10 py-4 bg-white text-blue-600 font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-2"
                >
                    Contact Us <ArrowRight size={16} />
                </Link>
                </motion.div>
            </div>
        </section>
        
    </main>
  );
};

export default RecruitmentPage;



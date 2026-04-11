"use client";

import React from "react";
import { useParams } from "next/navigation";

const data: any = {
  "psychological-disorders": {
    title: "Psychological Disorders",
    desc: "Support for depression, anxiety, OCD, addiction and emotional issues.",
  },
  "pre-wedding": {
    title: "Pre-Wedding Counseling",
    desc: "Prepare emotionally and mentally for a strong marriage foundation.",
  },
  "marriage": {
    title: "Marriage Counseling",
    desc: "Resolve conflicts and strengthen relationships.",
  },
  "family": {
    title: "Family Counseling",
    desc: "Improve family bonds during difficult situations.",
  },
  "child": {
    title: "Child Counseling",
    desc: "Helping children manage emotions and development.",
  },
  "personal": {
    title: "Personal Counseling",
    desc: "Guidance for career, stress, and personal growth.",
  },
  "rehabilitation": {
    title: "Disabled Rehabilitation",
    desc: "Support for adapting to life challenges with resilience.",
  },
};

const Page = () => {
  const params = useParams();
  const service = data[params.slug as string];

  if (!service) return <div className="pt-24 text-center">Page not found</div>;

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h1 className="text-4xl font-black mb-6">
          {service.title}
        </h1>

        <p className="text-slate-600 text-lg">
          {service.desc}
        </p>

      </div>
    </div>
  );
};

export default Page;
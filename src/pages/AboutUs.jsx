import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import { schoolInfo, featureCounts } from "../data/siteData.js";

export default function AboutUs() {
  return (
    <div>
      <PageHeader title="About Us" />
      <section className="section-pad">
        <div className="container-app grid md:grid-cols-2 gap-10 items-center mb-16">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=900&auto=format&fit=crop"
            alt="Campus"
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Since {schoolInfo.established}, Educating with Purpose
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              {schoolInfo.schoolName} was founded with a simple belief: talent is everywhere,
              opportunity is not. Starting from a single classroom in {schoolInfo.village}, we
              have grown into a statewide network of exam centers running the Sankalp
              Scholarship Exam, helping thousands of students access quality assessment,
              mentorship and recognition every year.
            </p>
            <p className="text-muted leading-relaxed">
              Today, our coordinators and faculty operate across {featureCounts[2].value}+
              centers, supported by a dedicated administrative team ensuring every student's
              journey — from registration to result — is transparent and smooth.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-cream rounded-2xl p-8">
          {featureCounts.map((c) => (
            <div key={c.label} className="text-center">
              <p className="font-display text-3xl font-bold text-navy">{c.value.toLocaleString()}{c.suffix}</p>
              <p className="text-sm text-muted font-medium mt-1">{c.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

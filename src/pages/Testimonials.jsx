import React from "react";
import { Quote } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { testimonials } from "../data/siteData.js";

export default function Testimonials() {
  return (
    <div>
      <PageHeader title="Student Testimonials" />
      <section className="section-pad">
        <div className="container-app grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="card p-6 relative">
              <Quote className="text-gold mb-3" size={26} />
              <p className="text-ink/80 text-sm leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="text-navy font-bold text-sm">{t.name}</p>
                  <p className="text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

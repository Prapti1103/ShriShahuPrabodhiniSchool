import React from "react";
import { Award } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { awards } from "../data/siteData.js";

export default function Awards() {
  return (
    <div>
      <PageHeader title="Awards & Recognition" />
      <section className="section-pad">
        <div className="container-app max-w-3xl">
          <div className="relative border-l-2 border-gold/40 pl-8 space-y-10">
            {awards.map((a) => (
              <div key={a.title} className="relative">
                <div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy-dark">
                  <Award size={16} />
                </div>
                <span className="text-gold-dark font-bold text-sm">{a.year}</span>
                <h3 className="font-display font-bold text-navy text-lg">{a.title}</h3>
                <p className="text-muted text-sm">Awarded by {a.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

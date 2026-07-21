import React from "react";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "../../components/PageHeader.jsx";
import { syllabusByClass } from "../../data/siteData.js";

export default function Syllabus() {
  return (
    <div>
      <PageHeader title="Syllabus" crumb="Syllabus" />
      <section className="section-pad">
        <div className="container-app grid md:grid-cols-3 gap-6">
          {syllabusByClass.map((s) => (
            <div key={s.class} className="card p-6">
              <h3 className="font-display font-bold text-navy text-lg mb-4">Class {s.class}</h3>
              <ul className="space-y-3">
                {s.subjects.map((sub) => (
                  <li key={sub} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 size={16} className="text-gold-dark mt-0.5 shrink-0" /> {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

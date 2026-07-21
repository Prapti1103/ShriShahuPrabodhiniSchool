import React, { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { toppers } from "../data/siteData.js";

export default function Toppers() {
  const years = ["All", ...new Set(toppers.map((t) => t.year))];
  const [year, setYear] = useState("All");
  const filtered = year === "All" ? toppers : toppers.filter((t) => t.year === year);

  return (
    <div>
      <PageHeader title="Sankalp Exam Toppers" />
      <section className="section-pad">
        <div className="container-app">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition ${
                  year === y ? "bg-navy text-white border-navy" : "border-navy/20 text-navy hover:border-navy"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <div key={t.id} className="card overflow-hidden text-center relative hover:-translate-y-1 transition-transform">
                <div className="absolute top-3 right-3 bg-ribbon text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                  {t.score}
                </div>
                <img src={t.photo} alt={t.name} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-navy">{t.name}</h3>
                  <p className="text-xs text-muted">Class {t.class} · {t.center} · {t.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import { faculties } from "../data/siteData.js";

export default function Faculties() {
  return (
    <div>
      <PageHeader title="Faculties" />
      <section className="section-pad">
        <div className="container-app grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {faculties.map((f) => (
            <div key={f.id} className="card overflow-hidden text-center hover:-translate-y-1 transition-transform">
              <img src={f.photo} alt={f.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-navy">{f.name}</h3>
                <p className="text-xs text-gold-dark font-semibold">{f.subject}</p>
                <p className="text-xs text-muted mt-1">{f.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

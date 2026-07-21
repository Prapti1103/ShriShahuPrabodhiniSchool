import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import { gallery } from "../data/siteData.js";

export default function Gallery() {
  return (
    <div>
      <PageHeader title="Gallery" />
      <section className="section-pad">
        <div className="container-app grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((g) => (
            <div key={g.id} className="relative rounded-xl overflow-hidden group h-52">
              <img src={g.image} alt={g.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/50 transition-colors flex items-end p-3">
                <p className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{g.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

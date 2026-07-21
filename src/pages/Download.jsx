import React from "react";
import { FileDown } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { downloads } from "../data/siteData.js";

export default function Download() {
  return (
    <div>
      <PageHeader title="Downloads" />
      <section className="section-pad">
        <div className="container-app max-w-3xl space-y-4">
          {downloads.map((d) => (
            <div key={d.id} className="card p-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="font-bold text-navy">{d.title}</p>
                <p className="text-xs text-muted">{d.size}</p>
              </div>
              <a href={d.file} className="btn-outline !px-4 !py-2 text-sm"><FileDown size={16} /> Download</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

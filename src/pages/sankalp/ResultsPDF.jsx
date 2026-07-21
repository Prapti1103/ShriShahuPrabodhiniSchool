import React from "react";
import { FileText, Download } from "lucide-react";
import PageHeader from "../../components/PageHeader.jsx";

const pdfs = [
  { id: 1, name: "Sankalp Exam 2026 - Full Merit List (Class 10th)", size: "1.8 MB" },
  { id: 2, name: "Sankalp Exam 2026 - Full Merit List (Class 8th)", size: "1.5 MB" },
  { id: 3, name: "Sankalp Exam 2025 - Archived Result PDF", size: "2.0 MB" },
];

export default function ResultsPDF() {
  return (
    <div>
      <PageHeader title="Results PDF" crumb="Results PDF" />
      <section className="section-pad">
        <div className="container-app max-w-3xl space-y-4">
          {pdfs.map((p) => (
            <div key={p.id} className="card p-5 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center"><FileText size={18} /></div>
                <div>
                  <p className="font-bold text-navy text-sm">{p.name}</p>
                  <p className="text-xs text-muted">{p.size}</p>
                </div>
              </div>
              <button className="btn-outline !px-4 !py-2 text-sm"><Download size={16} /> Download</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

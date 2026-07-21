import React from "react";
import { FileDown } from "lucide-react";
import PageHeader from "../../components/PageHeader.jsx";

const keys = [
  { id: 1, name: "Class 5th & 6th - Answer Key 2026", date: "12 Jan 2027" },
  { id: 2, name: "Class 7th & 8th - Answer Key 2026", date: "12 Jan 2027" },
  { id: 3, name: "Class 9th & 10th - Answer Key 2026", date: "12 Jan 2027" },
];

export default function AnswerKey() {
  return (
    <div>
      <PageHeader title="Answer Key" crumb="Answer Key" />
      <section className="section-pad">
        <div className="container-app max-w-3xl">
          <p className="text-muted mb-8">
            Official answer keys are published within 48 hours of the exam. Objection window
            remains open for 3 days after publication.
          </p>
          <div className="space-y-4">
            {keys.map((k) => (
              <div key={k.id} className="card p-5 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="font-bold text-navy">{k.name}</p>
                  <p className="text-xs text-muted">Published: {k.date}</p>
                </div>
                <button className="btn-outline !px-4 !py-2 text-sm"><FileDown size={16} /> Download</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

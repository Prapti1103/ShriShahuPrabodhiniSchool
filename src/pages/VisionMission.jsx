import React from "react";
import { Eye, Target } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";

export default function VisionMission() {
  return (
    <div>
      <PageHeader title="Vision & Mission" crumb="Director's Message" />
      <section className="section-pad">
        <div className="container-app grid md:grid-cols-[280px_1fr] gap-10 items-start mb-16">
          <div className="mx-auto text-center">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
              alt="Director"
              className="w-56 h-56 rounded-full object-cover ring-8 ring-cream shadow-xl mx-auto"
            />
            <p className="font-display font-bold text-navy mt-4">Dr. Vijay Shinde</p>
            <p className="text-xs text-muted">Director, Shri Shahu Prabodhini</p>
          </div>
          <div>
            <span className="eyebrow">Director's Message</span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              "Education is the one investment that never depreciates."
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              When we started Shri Shahu Prabodhini, our aim was never to simply run coaching
              classes — it was to build a culture of discipline, curiosity and self-belief among
              students who often don't get a fair shot at competitive exams. The Sankalp
              Scholarship Exam grew out of that mission: a rigorous, fair, and accessible
              platform that rewards genuine merit.
            </p>
            <p className="text-muted leading-relaxed">
              I am proud of every coordinator, faculty member and student who has been part of
              this journey, and I invite every parent to trust us with their child's academic
              future. We promise transparency, quality and results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-8">
            <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-4"><Eye size={22} /></div>
            <h3 className="font-display font-bold text-navy text-xl mb-3">Our Vision</h3>
            <p className="text-muted leading-relaxed">
              To be Maharashtra's most trusted platform for student assessment and scholarship,
              recognised for fairness, quality and accessibility across every district.
            </p>
          </div>
          <div className="card p-8">
            <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-4"><Target size={22} /></div>
            <h3 className="font-display font-bold text-navy text-xl mb-3">Our Mission</h3>
            <p className="text-muted leading-relaxed">
              To deliver rigorous, transparent scholarship examinations backed by dedicated
              faculty and coordinators, ensuring every deserving student is discovered and
              rewarded — regardless of geography or background.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

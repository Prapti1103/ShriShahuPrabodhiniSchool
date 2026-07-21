import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader.jsx";
import { examInfo } from "../../data/siteData.js";

export default function ExamInformation() {
  return (
    <div>
      <PageHeader title="Sankalp Exam Information" crumb="Exam Information" />
      <section className="section-pad">
        <div className="container-app grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-navy mb-4">{examInfo.name}</h2>
            <p className="text-muted leading-relaxed mb-6">
              The Sankalp Scholarship Exam is conducted every academic year to identify and
              reward talented students across Maharashtra. The exam evaluates conceptual clarity
              in Mathematics, Science, Language and General Knowledge appropriate to each class
              level, and top scorers are awarded scholarships, certificates and felicitation at
              the annual ceremony.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-black/5 pb-2"><span className="text-muted">Eligible Classes</span><span className="font-bold text-navy">{examInfo.eligibleClasses}</span></li>
              <li className="flex justify-between border-b border-black/5 pb-2"><span className="text-muted">Exam Date</span><span className="font-bold text-navy">{examInfo.examDate}</span></li>
              <li className="flex justify-between border-b border-black/5 pb-2"><span className="text-muted">Registration Deadline</span><span className="font-bold text-navy">{examInfo.registrationDeadline}</span></li>
              <li className="flex justify-between border-b border-black/5 pb-2"><span className="text-muted">Registration Fee</span><span className="font-bold text-navy">₹{examInfo.fee}</span></li>
              <li className="flex justify-between border-b border-black/5 pb-2"><span className="text-muted">Exam Pattern</span><span className="font-bold text-navy text-right max-w-[60%]">{examInfo.pattern}</span></li>
              <li className="flex justify-between"><span className="text-muted">Centers Available</span><span className="font-bold text-navy">{examInfo.centers}</span></li>
            </ul>
          </div>
          <div>
            <div className="card p-6 bg-navy text-white sticky top-24">
              <h3 className="font-display font-bold text-lg mb-2">Ready to Register?</h3>
              <p className="text-white/70 text-sm mb-5">Secure your roll number instantly after payment.</p>
              <Link to="/register" className="btn-primary w-full justify-center">Register Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

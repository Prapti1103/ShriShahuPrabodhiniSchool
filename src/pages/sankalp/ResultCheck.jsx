import React, { useState } from "react";
import { Search } from "lucide-react";
import PageHeader from "../../components/PageHeader.jsx";
import { studentsData } from "../../data/studentsData.js";

export default function ResultCheck() {
  const [rollNo, setRollNo] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    setSearched(true);
    const student = studentsData.find((s) => s.rollNo.toLowerCase() === rollNo.trim().toLowerCase());
    if (student) {
      // Dummy deterministic "result" for demo purposes
      const marks = 70 + (student.rollNo.charCodeAt(student.rollNo.length - 1) % 30);
      setResult({ ...student, marks, status: marks >= 40 ? "Pass" : "Fail" });
    } else {
      setResult(null);
    }
  }

  return (
    <div>
      <PageHeader title="Result Check" crumb="Result Check" />
      <section className="section-pad">
        <div className="container-app max-w-xl">
          <form onSubmit={handleSearch} className="card p-6 mb-8">
            <label className="label-field">Enter Your Roll Number</label>
            <div className="flex gap-3">
              <input
                className="input-field"
                placeholder="e.g. SSP2026-0001"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                required
              />
              <button className="btn-primary shrink-0"><Search size={16} /> Check</button>
            </div>
            <p className="text-xs text-muted mt-2">Try SSP2026-0001 or SSP2026-0002 (demo data)</p>
          </form>

          {searched && result && (
            <div className="card p-6 border-l-4 border-gold">
              <h3 className="font-display font-bold text-navy text-lg mb-3">{result.name}</h3>
              <dl className="text-sm space-y-2">
                <div className="flex justify-between"><dt className="text-muted">Roll No.</dt><dd className="font-mono font-bold">{result.rollNo}</dd></div>
                <div className="flex justify-between"><dt className="text-muted">Class</dt><dd className="font-bold">{result.class}</dd></div>
                <div className="flex justify-between"><dt className="text-muted">Marks Obtained</dt><dd className="font-bold">{result.marks}</dd></div>
                <div className="flex justify-between"><dt className="text-muted">Status</dt><dd className={`font-bold ${result.status === "Pass" ? "text-green-600" : "text-red-600"}`}>{result.status}</dd></div>
              </dl>
            </div>
          )}
          {searched && !result && (
            <div className="card p-6 text-center text-muted">No record found for this roll number.</div>
          )}
        </div>
      </section>
    </div>
  );
}

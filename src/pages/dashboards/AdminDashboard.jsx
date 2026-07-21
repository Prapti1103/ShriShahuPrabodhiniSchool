import React, { useState } from "react";
import { LayoutDashboard, Building2, School, UserCog, Users, PlusCircle } from "lucide-react";
import DashboardShell from "../../components/DashboardShell.jsx";
import { districts, talukasByDistrict, centersData, addCenter } from "../../data/centersData.js";
import { coordinatorsData, addCoordinator } from "../../data/coordinatorsData.js";
import { studentsData } from "../../data/studentsData.js";
import { schoolInfo as initialSchoolInfo } from "../../data/siteData.js";

const tabs = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "center", label: "Center Form", icon: Building2 },
  { key: "school", label: "School Form", icon: School },
  { key: "coordinator", label: "Coordinator Form", icon: UserCog },
  { key: "students", label: "Students", icon: Users },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState("overview");

  return (
    <DashboardShell title="Admin" roleLabel="Admin" tabs={tabs} activeTab={tab} onTabChange={setTab}>
      {tab === "overview" && <Overview />}
      {tab === "center" && <CenterForm />}
      {tab === "school" && <SchoolForm />}
      {tab === "coordinator" && <CoordinatorForm />}
      {tab === "students" && <StudentsTab />}
    </DashboardShell>
  );
}

function Overview() {
  const stats = [
    { label: "Total Centers", value: centersData.length },
    { label: "Total Coordinators", value: coordinatorsData.length },
    { label: "Registered Students", value: studentsData.length },
    { label: "Fees Collected", value: `₹${studentsData.reduce((a, s) => a + (s.amount || 0), 0)}` },
  ];
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
      {stats.map((s) => (
        <div key={s.label} className="card p-6 text-center">
          <p className="font-display text-3xl font-bold text-navy">{s.value}</p>
          <p className="text-xs text-muted font-medium mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function CenterForm() {
  const [centers, setCenters] = useState(centersData);
  const [form, setForm] = useState({ centerName: "", district: "", taluka: "", address: "" });
  const talukas = form.district ? talukasByDistrict[form.district] || [] : [];

  function submit(e) {
    e.preventDefault();
    const created = addCenter(form);
    setCenters((prev) => [...prev, created]);
    setForm({ centerName: "", district: "", taluka: "", address: "" });
  }

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h3 className="font-display font-bold text-navy mb-4">Center Form <span className="text-xs text-muted font-normal">(Form No. 1 — Settings)</span></h3>
        <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
          <div><label className="label-field">Center Name *</label><input required className="input-field" value={form.centerName} onChange={(e) => setForm({ ...form, centerName: e.target.value })} /></div>
          <div><label className="label-field">District *</label>
            <select required className="input-field" value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value, taluka: "" })}>
              <option value="">Select</option>{districts.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div><label className="label-field">Taluka *</label>
            <select required disabled={!form.district} className="input-field" value={form.taluka} onChange={(e) => setForm({ ...form, taluka: e.target.value })}>
              <option value="">Select</option>{talukas.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div><label className="label-field">Address *</label><input required className="input-field" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /></div>
          <div className="sm:col-span-2"><button className="btn-primary"><PlusCircle size={16} /> Add Center</button></div>
        </form>
      </div>
      <div className="card p-6 overflow-x-auto">
        <h3 className="font-display font-bold text-navy mb-4">All Centers</h3>
        <Table
          head={["ID", "Center Name", "District", "Taluka", "Address"]}
          rows={centers.map((c) => [c.id, c.centerName, c.district, c.taluka, c.address])}
        />
      </div>
    </div>
  );
}

function SchoolForm() {
  const [info, setInfo] = useState(initialSchoolInfo);
  const [saved, setSaved] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="card p-6">
      <h3 className="font-display font-bold text-navy mb-4">School Form <span className="text-xs text-muted font-normal">(Form No. 2 — Settings)</span></h3>
      {saved && <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-md p-3 mb-4">School details updated successfully.</div>}
      <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
        <div><label className="label-field">School Name *</label><input required className="input-field" value={info.schoolName} onChange={(e) => setInfo({ ...info, schoolName: e.target.value })} /></div>
        <div><label className="label-field">Village *</label><input required className="input-field" value={info.village} onChange={(e) => setInfo({ ...info, village: e.target.value })} /></div>
        <div className="sm:col-span-2"><label className="label-field">Address *</label><input required className="input-field" value={info.address} onChange={(e) => setInfo({ ...info, address: e.target.value })} /></div>
        <div><label className="label-field">Phone</label><input className="input-field" value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} /></div>
        <div><label className="label-field">Email</label><input className="input-field" value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} /></div>
        <div className="sm:col-span-2"><button className="btn-primary">Save School Details</button></div>
      </form>
    </div>
  );
}

function CoordinatorForm() {
  const [coordinators, setCoordinators] = useState(coordinatorsData);
  const [form, setForm] = useState({ name: "", mobile: "", email: "", address: "", centerId: "" });

  function submit(e) {
    e.preventDefault();
    const created = addCoordinator(form);
    setCoordinators((prev) => [...prev, created]);
    setForm({ name: "", mobile: "", email: "", address: "", centerId: "" });
  }

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h3 className="font-display font-bold text-navy mb-4">Coordinator Form <span className="text-xs text-muted font-normal">(Form No. 3 — Settings)</span></h3>
        <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
          <div><label className="label-field">Name *</label><input required className="input-field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
          <div><label className="label-field">Mobile No. *</label><input required pattern="[0-9]{10}" className="input-field" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} /></div>
          <div><label className="label-field">Email *</label><input required type="email" className="input-field" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
          <div><label className="label-field">Address *</label><input required className="input-field" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /></div>
          <div>
            <label className="label-field">Allocate to Center *</label>
            <select required className="input-field" value={form.centerId} onChange={(e) => setForm({ ...form, centerId: e.target.value })}>
              <option value="">Select Center</option>
              {centersData.map((c) => <option key={c.id} value={c.id}>{c.centerName}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2"><button className="btn-primary"><PlusCircle size={16} /> Add Coordinator</button></div>
        </form>
      </div>
      <div className="card p-6 overflow-x-auto">
        <h3 className="font-display font-bold text-navy mb-4">All Coordinators</h3>
        <Table
          head={["ID", "Name", "Mobile", "Allocated Center", "Username"]}
          rows={coordinators.map((c) => [
            c.id, c.name, c.mobile,
            centersData.find((ct) => ct.id === c.centerId)?.centerName || "-",
            c.username,
          ])}
        />
      </div>
    </div>
  );
}

function StudentsTab() {
  return (
    <div className="card p-6 overflow-x-auto">
      <h3 className="font-display font-bold text-navy mb-4">All Registered Students</h3>
      <Table
        head={["Roll No.", "Name", "Class", "District", "Exam Center", "Coordinator", "Payment"]}
        rows={studentsData.map((s) => [
          s.rollNo, s.name, s.class, s.district,
          centersData.find((c) => c.id === s.examCenterId)?.centerName || "-",
          coordinatorsData.find((c) => c.id === s.coordinatorId)?.name || "-",
          s.paymentStatus,
        ])}
      />
    </div>
  );
}

function Table({ head, rows }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b-2 border-navy/10 text-left">
          {head.map((h) => <th key={h} className="py-2.5 pr-4 font-bold text-navy whitespace-nowrap">{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-black/5">
            {r.map((cell, j) => <td key={j} className="py-2.5 pr-4 text-muted whitespace-nowrap">{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

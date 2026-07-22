import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, UserCog, GraduationCap } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const roles = [
  { key: "student", label: "Student", icon: GraduationCap, idLabel: "Roll Number", idPlaceholder: "e.g. SSP2026-0001" },
  { key: "coordinator", label: "Co-ordinator", icon: UserCog, idLabel: "Username", idPlaceholder: "e.g. coordinator1" },
  { key: "admin", label: "Admin", icon: ShieldCheck, idLabel: "Username", idPlaceholder: "admin" },
];

export default function Login() {
  const [role, setRole] = useState("student");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginAdmin, loginCoordinator, loginStudent } = useAuth();
  const navigate = useNavigate();

  const current = roles.find((r) => r.key === role);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    let res;
    if (role === "admin") res = loginAdmin(id, password);
    else if (role === "coordinator") res = loginCoordinator(id, password);
    else res = loginStudent(id, password);

    if (res.success) {
      navigate(`/${role}/dashboard`);
    } else {
      setError(res.message);
    }
  }

  return (
    <div>
      <PageHeader title="Login" />
      <section className="section-pad">
        <div className="container-app max-w-md">
          <div className="flex rounded-lg overflow-hidden border border-black/10 mb-8">
            {roles.map((r) => (
              <button
                key={r.key}
                onClick={() => { setRole(r.key); setError(""); }}
                className={`flex-1 py-3 text-sm font-bold flex flex-col items-center gap-1 transition ${
                  role === r.key ? "bg-navy text-white" : "bg-white text-muted hover:bg-cream"
                }`}
              >
                <r.icon size={16} />
                {r.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
            <h2 className="font-display font-bold text-navy text-xl">{current.label} Login</h2>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-md p-3">{error}</div>}
            <div>
              <label className="label-field">{current.idLabel}</label>
              <input required className="input-field" placeholder={current.idPlaceholder} value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
              <label className="label-field">Password</label>
              <input required type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn-primary w-full justify-center">Login</button>

            {role === "student" && (
              <p className="text-xs text-center text-muted">
                New student? <Link to="/register" className="text-gold-dark font-semibold">Register here</Link>
              </p>
            )}
            <div className="text-[11px] text-muted bg-cream rounded-md p-3">
              <strong>Demo credentials:</strong><br />
              Admin — admin / admin@123<br />
              Coordinator — coordinator1 / coord@123<br />
              Student — SSP2026-0001 / ssp0001
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}  
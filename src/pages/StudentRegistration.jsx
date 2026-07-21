import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Copy, IndianRupee } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { districts, talukasByDistrict, centersData } from "../data/centersData.js";
import { coordinatorsData } from "../data/coordinatorsData.js";
import { registerStudent } from "../data/studentsData.js";
import { payWithRazorpay } from "../utils/razorpay.js";

const initialForm = {
  name: "", mobile: "", gender: "", class: "", medium: "",
  schoolName: "", schoolAddress: "", village: "",
  district: "", taluka: "", examCenterId: "", coordinatorId: "",
};

export default function StudentRegistration() {
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState("form"); // form | paying | success
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(null);

  const talukas = form.district ? talukasByDistrict[form.district] || [] : [];

  // Centers filtered to the chosen district/taluka
  const eligibleCenters = useMemo(
    () =>
      centersData.filter(
        (c) => (!form.district || c.district === form.district) && (!form.taluka || c.taluka === form.taluka)
      ),
    [form.district, form.taluka]
  );

  // Coordinators are only those allocated to the chosen exam center
  const eligibleCoordinators = useMemo(
    () => coordinatorsData.filter((c) => c.centerId === form.examCenterId),
    [form.examCenterId]
  );

  function update(field, value) {
    setForm((f) => {
      const next = { ...f, [field]: value };
      if (field === "district") { next.taluka = ""; next.examCenterId = ""; next.coordinatorId = ""; }
      if (field === "taluka") { next.examCenterId = ""; next.coordinatorId = ""; }
      if (field === "examCenterId") { next.coordinatorId = ""; }
      return next;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.examCenterId) return setError("Please select an Exam Center.");
    if (!form.coordinatorId) return setError("Please select a Co-ordinator allocated to your center.");

    setStep("paying");
    payWithRazorpay({
      amount: 250,
      name: form.name,
      contact: form.mobile,
      onSuccess: (paymentId) => {
        const record = registerStudent(form, paymentId);
        setRegistered(record);
        setStep("success");
      },
      onFailure: (msg) => {
        setError(msg || "Payment was not completed. Please try again.");
        setStep("form");
      },
    });
  }

  if (step === "success" && registered) {
    return (
      <div>
        <PageHeader title="Registration Successful" crumb="Student Registration" />
        <section className="section-pad">
          <div className="container-app max-w-xl">
            <div className="card p-8 text-center border-t-4 border-gold">
              <CheckCircle2 className="text-green-600 mx-auto mb-4" size={48} />
              <h2 className="font-display font-bold text-navy text-2xl mb-2">You're Registered!</h2>
              <p className="text-muted mb-6">Save these credentials — you'll need them to log in and check your result.</p>
              <div className="bg-cream rounded-xl p-6 text-left space-y-3">
                <CredRow label="Student Name" value={registered.name} />
                <CredRow label="Roll Number" value={registered.rollNo} mono />
                <CredRow label="Login Password" value={registered.password} mono />
                <CredRow label="Payment ID" value={registered.paymentId} mono small />
                <CredRow label="Amount Paid" value={`₹${registered.amount}`} />
              </div>
              <Link to="/login" className="btn-primary w-full justify-center mt-8">Proceed to Student Login</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Student Registration" crumb="Registration" />
      <section className="section-pad">
        <div className="container-app max-w-3xl">
          <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-md p-3">{error}</div>
            )}

            <div>
              <h3 className="font-display font-bold text-navy mb-4">Student Details</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Student Name">
                  <input required className="input-field" value={form.name} onChange={(e) => update("name", e.target.value)} />
                </Field>
                <Field label="Mobile No.">
                  <input required pattern="[0-9]{10}" title="10 digit mobile number" className="input-field" value={form.mobile} onChange={(e) => update("mobile", e.target.value)} />
                </Field>
                <Field label="Gender">
                  <select required className="input-field" value={form.gender} onChange={(e) => update("gender", e.target.value)}>
                    <option value="">Select</option>
                    <option>Male</option><option>Female</option><option>Other</option>
                  </select>
                </Field>
                <Field label="Class">
                  <select required className="input-field" value={form.class} onChange={(e) => update("class", e.target.value)}>
                    <option value="">Select</option>
                    {["5th","6th","7th","8th","9th","10th"].map((c) => <option key={c}>{c}</option>)}
                  </select>
                </Field>
                <Field label="Medium">
                  <select required className="input-field" value={form.medium} onChange={(e) => update("medium", e.target.value)}>
                    <option value="">Select</option>
                    <option>Marathi</option><option>Semi-English</option><option>English</option>
                  </select>
                </Field>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy mb-4">School Details</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="School Name">
                  <input required className="input-field" value={form.schoolName} onChange={(e) => update("schoolName", e.target.value)} />
                </Field>
                <Field label="School Address">
                  <input required className="input-field" value={form.schoolAddress} onChange={(e) => update("schoolAddress", e.target.value)} />
                </Field>
                <Field label="Village">
                  <input required className="input-field" value={form.village} onChange={(e) => update("village", e.target.value)} />
                </Field>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy mb-4">Exam Center Allocation</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="District">
                  <select required className="input-field" value={form.district} onChange={(e) => update("district", e.target.value)}>
                    <option value="">Select District</option>
                    {districts.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </Field>
                <Field label="Taluka">
                  <select required disabled={!form.district} className="input-field" value={form.taluka} onChange={(e) => update("taluka", e.target.value)}>
                    <option value="">{form.district ? "Select Taluka" : "Select District First"}</option>
                    {talukas.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Exam Center">
                  <select required disabled={!form.taluka} className="input-field" value={form.examCenterId} onChange={(e) => update("examCenterId", e.target.value)}>
                    <option value="">{form.taluka ? "Select Center" : "Select Taluka First"}</option>
                    {eligibleCenters.map((c) => <option key={c.id} value={c.id}>{c.centerName}</option>)}
                  </select>
                  {form.taluka && eligibleCenters.length === 0 && (
                    <p className="text-xs text-red-500 mt-1">No exam center available in this taluka yet. Try a nearby taluka.</p>
                  )}
                </Field>
                <Field label="Co-ordinator">
                  <select required disabled={!form.examCenterId} className="input-field" value={form.coordinatorId} onChange={(e) => update("coordinatorId", e.target.value)}>
                    <option value="">{form.examCenterId ? "Select Co-ordinator" : "Select Center First"}</option>
                    {eligibleCoordinators.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                  {form.examCenterId && eligibleCoordinators.length === 0 && (
                    <p className="text-xs text-red-500 mt-1">No coordinator allocated to this center yet.</p>
                  )}
                </Field>
              </div>
            </div>

            <div className="bg-cream rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted">Registration Fee</p>
                <p className="font-display font-bold text-navy text-xl flex items-center"><IndianRupee size={18} /> 250</p>
              </div>
              <p className="text-xs text-muted max-w-[50%] text-right">Secure payment powered by Razorpay. Your roll number is generated instantly after payment.</p>
            </div>

            <button type="submit" disabled={step === "paying"} className="btn-primary w-full justify-center disabled:opacity-60">
              {step === "paying" ? "Processing Payment..." : "Pay ₹250 & Register"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="label-field">{label}</label>
      {children}
    </div>
  );
}

function CredRow({ label, value, mono, small }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard?.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-muted">{label}</span>
      <span className="flex items-center gap-2">
        <span className={`font-bold text-navy ${mono ? "font-mono" : ""} ${small ? "text-xs" : "text-sm"}`}>{value}</span>
        <button type="button" onClick={copy} className="text-muted hover:text-navy" aria-label={`Copy ${label}`}>
          <Copy size={13} />
        </button>
        {copied && <span className="text-[10px] text-green-600">Copied</span>}
      </span>
    </div>
  );
}

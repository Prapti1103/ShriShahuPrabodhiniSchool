import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap, Target, MapPin, FileCheck2, ArrowRight, CalendarDays,
  Quote, MapPinned,
} from "lucide-react";
import ImageSlider from "../components/ImageSlider.jsx";
import {
  sliderSlides, featureCounts, schoolFeatures, courses, toppers, gallery,
  faculties, testimonials, examInfo, schoolInfo,
} from "../data/siteData.js";

const icons = { GraduationCap, Target, MapPin, FileCheck2 };

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-navy">
      {count.toLocaleString()}
      <span className="text-gold-dark">{suffix}</span>
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
  center,
  titleClassName = "",
  eyebrowClassName = "",
  descClassName = "",
}) {
  return (
    <div className={`mb-10 ${center ? "text-center max-w-2xl mx-auto" : ""}`}>
      <span className={`eyebrow ${eyebrowClassName}`}>
        {eyebrow}
      </span>

      <h2
        className={`text-2xl md:text-4xl font-bold text-navy ${titleClassName}`}
      >
        {title}
      </h2>

      {desc && (
        <p className={`text-muted mt-3 ${descClassName}`}>
          {desc}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* 1. Image Slider */}
      <ImageSlider slides={sliderSlides} />

      {/* 2. Principal / Sanchalk / Director Message */}
      <section className="section-pad bg-cream">
        <div className="container-app grid md:grid-cols-[280px_1fr] gap-10 items-center">
          <div className="relative mx-auto">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-8 ring-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
                alt="Director"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gold text-navy-dark text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
              Director's Message
            </div>
          </div>
          <div>
            <span className="eyebrow">A Word From Our Sanchalak</span>
            <h2 className="text-2xl md:text-4xl font-bold text-navy mb-4">
              "Every child carries a spark — Sankalp helps it become a flame."
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              For nearly four decades, Shri Shahu Prabodhini has stood beside students across
              rural and urban Maharashtra, guiding them not just to clear an exam, but to
              believe in their own potential. The Sankalp Scholarship Exam was built with one
              goal — to give every child, regardless of where they come from, a fair chance to
              shine.
            </p>
            <p className="font-display font-semibold text-navy">— Dr. Vijay Shinde, Director</p>
            <Link to="/vision-mission" className="btn-outline mt-6">
              Read Full Message <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Sankalp Exam Info with Registration button */}
      <section className="section-pad bg-navy relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-72 h-72 bg-gold/10 rounded-full" />
        <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-gold/10 rounded-full" />
        <div className="container-app relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow">Now Open</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{examInfo.name}</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Open to students of classes {examInfo.eligibleClasses}. Compete with the finest
              young minds across {examInfo.centers} and win scholarships, certificates &amp; recognition.
            </p>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              <li className="flex items-center gap-2 text-white/85 text-sm"><CalendarDays size={16} className="text-gold" /> Exam: {examInfo.examDate}</li>
              <li className="flex items-center gap-2 text-white/85 text-sm"><CalendarDays size={16} className="text-gold" /> Last Date: {examInfo.registrationDeadline}</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="btn-primary">Registration <ArrowRight size={16} /></Link>
              <Link to="/sankalp/exam-information" className="border-2 border-white/30 text-white font-bold px-6 py-3 rounded-md hover:bg-white/10 transition">
                Exam Details
              </Link>
            </div>
          </div>
          <div className="card p-6 md:p-8 bg-white/95">
            <h3 className="font-display font-bold text-navy text-lg mb-4">Exam Snapshot</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-black/5 pb-2"><dt className="text-muted">Registration Fee</dt><dd className="font-bold text-navy">₹{examInfo.fee}</dd></div>
              <div className="flex justify-between border-b border-black/5 pb-2"><dt className="text-muted">Eligible Classes</dt><dd className="font-bold text-navy">{examInfo.eligibleClasses}</dd></div>
              <div className="flex justify-between border-b border-black/5 pb-2"><dt className="text-muted">Exam Pattern</dt><dd className="font-bold text-navy text-right max-w-[60%]">{examInfo.pattern}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Centers</dt><dd className="font-bold text-navy">{examInfo.centers}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* 4. School Features & Counts */}
      <section className="section-pad">
        <div className="container-app">
          <SectionHeading
  eyebrow="Voices"
  title="What Our Students Say"
  center
  titleClassName="!text-white"
  eyebrowClassName="text-gold"
/>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {schoolFeatures.map((f) => {
              const Icon = icons[f.icon];
              return (
                <div key={f.title} className="card p-6 text-center hover:-translate-y-1 transition-transform">
                  <div className="w-14 h-14 rounded-xl bg-navy/5 text-navy flex items-center justify-center mx-auto mb-4">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-bold text-navy mb-1.5">{f.title}</h3>
                  <p className="text-sm text-muted">{f.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-cream rounded-2xl p-8">
            {featureCounts.map((c) => (
              <div key={c.label} className="text-center">
                <Counter value={c.value} suffix={c.suffix} />
                <p className="text-sm text-muted font-medium mt-1">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Courses & Enroll button */}
      <section className="section-pad bg-cream">
        <div className="container-app">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <SectionHeading eyebrow="Programs" title="Our Courses" />
            <Link to="/courses" className="btn-outline">View All Courses</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <div key={c.id} className="card overflow-hidden group">
                <div className="h-44 overflow-hidden">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy mb-1.5">{c.name}</h3>
                  <p className="text-sm text-muted mb-3">{c.desc}</p>
                  <div className="flex justify-between items-center text-xs text-muted mb-4">
                    <span>{c.duration}</span>
                    <span className="font-bold text-navy">{c.fee}</span>
                  </div>
                  <Link to="/register" className="btn-primary w-full justify-center">Enroll Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. School Exam Toppers */}
      <section className="section-pad">
        <div className="container-app">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <SectionHeading eyebrow="Hall of Fame" title="Sankalp Exam Toppers" />
            <Link to="/toppers" className="btn-outline">View All Toppers</Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {toppers.slice(0, 4).map((t) => (
              <div key={t.id} className="card overflow-hidden text-center relative">
                <div className="absolute top-3 right-3 bg-ribbon text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                  {t.score}
                </div>
                <img src={t.photo} alt={t.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-navy">{t.name}</h3>
                  <p className="text-xs text-muted">Class {t.class} · {t.center}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery */}
      <section className="section-pad bg-cream">
        <div className="container-app">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <SectionHeading eyebrow="Moments" title="Gallery" />
            <Link to="/gallery" className="btn-outline">View All Gallery</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.slice(0, 4).map((g) => (
              <div key={g.id} className="relative rounded-xl overflow-hidden group h-44">
                <img src={g.image} alt={g.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/40 transition-colors flex items-end p-3">
                  <p className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{g.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Faculties */}
      <section className="section-pad">
        <div className="container-app">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <SectionHeading eyebrow="Our Mentors" title="Faculties" />
            <Link to="/faculties" className="btn-outline">View All Faculties</Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {faculties.map((f) => (
              <div key={f.id} className="card overflow-hidden text-center">
                <img src={f.photo} alt={f.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-navy">{f.name}</h3>
                  <p className="text-xs text-gold-dark font-semibold">{f.subject}</p>
                  <p className="text-xs text-muted mt-1">{f.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Student Testimonials */}
      <section className="section-pad bg-navy">
        <div className="container-app ">
        <SectionHeading
  eyebrow="Voices"
  title="What Our Students Say"
  center
  titleClassName="text-white"
/>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white/5 border border-white/10 rounded-xl p-6 relative">
                <Quote className="text-gold mb-3" size={26} />
                <p className="text-white/85 text-sm leading-relaxed mb-5">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials" className="border-2 border-white/30 text-white font-bold px-6 py-3 rounded-md hover:bg-white/10 transition inline-flex">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Contact Us Form & Map */}
      <section className="section-pad">
        <div className="container-app grid md:grid-cols-2 gap-10">
          <div>
            <SectionHeading eyebrow="Get In Touch" title="Contact Us" desc="Have a question about admissions, centers or results? Send us a message." />
            <ContactMiniForm />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-black/5 min-h-[360px]">
            <iframe
              title="School location map"
              src={schoolInfo.mapEmbed}
              className="w-full h-full min-h-[360px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactMiniForm() {
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    setSent(true);
  }
  if (sent) {
    return (
      <div className="card p-6 bg-cream text-navy font-semibold">
        Thank you! Your message has been received. Our team will contact you shortly.
      </div>
    );
  }
  return (
    <form onSubmit={submit} className="card p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="label-field">Full Name</label>
          <input required className="input-field" placeholder="Your name" />
        </div>
        <div>
          <label className="label-field">Mobile No.</label>
          <input required className="input-field" placeholder="10-digit mobile" />
        </div>
      </div>
      <div>
        <label className="label-field">Email</label>
        <input type="email" className="input-field" placeholder="you@example.com" />
      </div>
      <div>
        <label className="label-field">Message</label>
        <textarea required rows={4} className="input-field" placeholder="How can we help?" />
      </div>
      <button className="btn-primary w-full justify-center">Send Message</button>
    </form>
  );
}

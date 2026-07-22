import React from "react";
import {
  Award,
  Trophy,
  Medal,
  Star,
  BadgeCheck,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { awards } from "../data/siteData";

const icons = [Trophy, Medal, Star, BadgeCheck];

export default function Awards() {
  return (
    <>
      <PageHeader
        title="Awards & Recognition"
        subtitle="Celebrating excellence, achievements and our commitment towards quality education."
      />

      <section className="section-pad bg-gradient-to-b from-white to-slate-50">
        <div className="container-app">

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

            <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 text-center">
              <Award className="mx-auto text-gold mb-3" size={36} />
              <h2 className="text-3xl font-bold text-navy">
                {awards.length}+
              </h2>
              <p className="text-muted mt-1">Recognitions</p>
            </div>

            <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 text-center">
              <Trophy className="mx-auto text-gold mb-3" size={36} />
              <h2 className="text-3xl font-bold text-navy">
                25+
              </h2>
              <p className="text-muted mt-1">
                Years of Excellence
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 text-center">
              <Star className="mx-auto text-gold mb-3" size={36} />
              <h2 className="text-3xl font-bold text-navy">
                10K+
              </h2>
              <p className="text-muted mt-1">
                Students Benefited
              </p>
            </div>

          </div>

          {/* Heading */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold-dark font-semibold text-sm tracking-wide">
              OUR ACHIEVEMENTS
            </span>

            <h2 className="mt-4 text-4xl font-display font-bold text-navy">
              Milestones That Inspire
            </h2>

            <p className="max-w-2xl mx-auto mt-3 text-muted">
              Every recognition reflects our dedication towards academic
              excellence and holistic student development.
            </p>
          </div>

          {/* Award Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {awards.map((award, index) => {

              const Icon = icons[index % icons.length];

              return (
                <div
                  key={award.title}
                  className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden"
                >

                  <div className="h-2 bg-gradient-to-r from-gold via-yellow-400 to-gold" />

                  <div className="p-8">

                    <div className="flex justify-between items-start mb-6">

                      <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold transition">

                        <Icon
                          size={30}
                          className="text-gold-dark group-hover:text-navy"
                        />

                      </div>

                      <span className="px-4 py-2 rounded-full bg-navy text-white text-sm font-semibold">
                        {award.year}
                      </span>

                    </div>

                    <h3 className="text-2xl font-display font-bold text-navy mb-3">
                      {award.title}
                    </h3>

                    <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 text-sm text-slate-700">

                      <Award size={15} />

                      Awarded by <strong>{award.by}</strong>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>
    </>
  );
}
import {
  Bell,
  CalendarDays,
  Award,
  FileText,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Sankalp Scholarship Registration Open",
    desc: "Online registrations have started for the 2026 examination.",
    time: "5 min ago",
    icon: Bell,
    unread: true,
  },
  {
    id: 2,
    title: "Exam Schedule Published",
    desc: "Check the latest examination dates and reporting time.",
    time: "Today",
    icon: CalendarDays,
    unread: true,
  },
  {
    id: 3,
    title: "New Study Material Added",
    desc: "Practice papers and notes are now available for download.",
    time: "Yesterday",
    icon: BookOpen,
    unread: false,
  },
  {
    id: 4,
    title: "Scholarship Results Released",
    desc: "View your Sankalp Scholarship examination result online.",
    time: "2 Days Ago",
    icon: Award,
    unread: false,
  },
  {
    id: 5,
    title: "Answer Key Updated",
    desc: "Final answer key has been uploaded for all students.",
    time: "Last Week",
    icon: FileText,
    unread: false,
  },
];

export default function Notification() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="container-app max-w-3xl">

        {/* Header */}
        <div className="bg-gradient-to-r from-navy to-blue-900 rounded-2xl p-6 shadow-lg text-white mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center">
                <Bell size={28} />
              </div>

              <div>
                <h1 className="text-2xl font-bold font-display">
                  Notifications
                </h1>
                <p className="text-sm text-white/80 mt-1">
                  Stay updated with the latest announcements.
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-gold text-navy-dark px-4 py-2 rounded-full font-semibold text-sm">
              {notifications.filter((n) => n.unread).length} New
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-4">
          {notifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-xl shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                  item.unread
                    ? "border-gold/50"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-start gap-4 p-5">

                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.unread
                        ? "bg-gold/20 text-gold-dark"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="font-semibold text-navy text-base">
                        {item.title}
                      </h3>

                      {item.unread && (
                        <span className="text-xs bg-gold text-navy-dark font-semibold px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-slate-600 mt-1 leading-6">
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">
                      <CheckCircle2 size={14} />
                      {item.time}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-sm text-slate-500">
          You're all caught up 🎉
        </div>
      </div>
    </section>
  );
}
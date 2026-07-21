import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ title, crumb }) {
  return (
    <div className="bg-navy relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold/10 rounded-full" />
      <div className="container-app py-12 md:py-16 relative">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{title}</h1>
        <div className="flex items-center gap-1.5 text-white/60 text-sm">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gold">{crumb || title}</span>
        </div>
      </div>
    </div>
  );
}

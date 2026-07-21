import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { schoolInfo } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="container-app py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center font-display font-bold text-navy-dark">
              SP
            </div>
            <p className="font-display font-bold text-white text-lg">Shri Shahu Prabodhini</p>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Empowering students since {schoolInfo.established} through the Sankalp Scholarship
            Exam and dedicated academic mentorship.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition"><FaFacebookF size={15} /></a>
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition"><FaInstagram size={15} /></a>
            <a href="#" aria-label="Youtube" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition"><FaYoutube size={15} /></a>
          </div>
        </div>

        <div>
          <p className="font-display font-bold text-white mb-4">Quick Links</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/courses" className="hover:text-gold">Courses</Link></li>
            <li><Link to="/toppers" className="hover:text-gold">Toppers</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/faculties" className="hover:text-gold">Faculties</Link></li>
            <li><Link to="/download" className="hover:text-gold">Downloads</Link></li>
            <li><Link to="/register" className="hover:text-gold">Student Registration</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-white mb-4">Sankalp Exam</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/sankalp/exam-information" className="hover:text-gold">Exam Information</Link></li>
            <li><Link to="/sankalp/syllabus" className="hover:text-gold">Syllabus</Link></li>
            <li><Link to="/sankalp/answer-key" className="hover:text-gold">Answer Key</Link></li>
            <li><Link to="/sankalp/result-check" className="hover:text-gold">Result Check</Link></li>
            <li><Link to="/sankalp/results-pdf" className="hover:text-gold">Results PDF</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-white mb-4">Contact &amp; Policies</p>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> {schoolInfo.address}</li>
            <li className="flex items-center gap-2"><Phone size={15} /> {schoolInfo.phone}</li>
            <li className="flex items-center gap-2"><Mail size={15} /> {schoolInfo.email}</li>
          </ul>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-gold underline underline-offset-2">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-gold underline underline-offset-2">Refund Policy</Link></li>
            <li><Link to="/contact-us" className="hover:text-gold underline underline-offset-2">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Shri Shahu Prabodhini. All rights reserved. | Designed for Sankalp  Exam
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { schoolInfo } from "../data/siteData";
import pjLogo from "../asset/image.png";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Top Footer */}
      <div className="container-app py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center font-bold text-navy-dark text-lg">
              SP
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-white leading-tight">
                Shri Shahu
              </h3>
              <p className="text-sm text-gold">
                Prabodhini
              </p>
            </div>
          </div>

          <p className="text-sm leading-7 text-white/70">
            Empowering students since{" "}
            <span className="text-gold font-semibold">
              {schoolInfo.established}
            </span>{" "}
            through the Sankalp Scholarship Examination and quality academic
            guidance.
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-gold hover:text-navy-dark transition-all duration-300 flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-gold hover:text-navy-dark transition-all duration-300 flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-gold hover:text-navy-dark transition-all duration-300 flex items-center justify-center"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display text-white font-bold text-lg mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/courses" className="hover:text-gold transition">Courses</Link></li>
            <li><Link to="/toppers" className="hover:text-gold transition">Toppers</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition">Gallery</Link></li>
            <li><Link to="/faculties" className="hover:text-gold transition">Faculties</Link></li>
            <li><Link to="/download" className="hover:text-gold transition">Downloads</Link></li>
            <li><Link to="/register" className="hover:text-gold transition">Student Registration</Link></li>
          </ul>
        </div>

        {/* Sankalp */}
        <div>
          <h3 className="font-display text-white font-bold text-lg mb-5">
            Sankalp Exam
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/sankalp/exam-information" className="hover:text-gold transition">Exam Information</Link></li>
            <li><Link to="/sankalp/syllabus" className="hover:text-gold transition">Syllabus</Link></li>
            <li><Link to="/sankalp/answer-key" className="hover:text-gold transition">Answer Key</Link></li>
            <li><Link to="/sankalp/result-check" className="hover:text-gold transition">Result Check</Link></li>
            <li><Link to="/sankalp/results-pdf" className="hover:text-gold transition">Results PDF</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-white font-bold text-lg mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-sm text-white/75">

            <div className="flex gap-3">
              <MapPin
                size={18}
                className="text-gold mt-1 shrink-0"
              />
              <span>{schoolInfo.address}</span>
            </div>

            <div className="flex gap-3 items-center">
              <Phone size={16} className="text-gold" />
              <span>{schoolInfo.phone}</span>
            </div>

            <div className="flex gap-3 items-center">
              <Mail size={16} className="text-gold" />
              <span>{schoolInfo.email}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            <Link
              to="/privacy-policy"
              className="hover:text-gold transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/refund-policy"
              className="hover:text-gold transition"
            >
              Refund Policy
            </Link>

            <Link
              to="/contact-us"
              className="hover:text-gold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-5">
        <div className="container-app flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-white/60">

          <span>
            © {new Date().getFullYear()} Shri Shahu Prabodhini. All Rights Reserved.
          </span>

          <span className="hidden md:block text-white/30">|</span>

          <div className="flex items-center gap-2">
            <span>Designed By</span>

            <img
              src={pjLogo}
              alt="PJSoftTech"
              className="h-6 w-auto object-contain"
            />

            <span className="font-semibold text-white">
              PJSOFTTECH Pvt. Ltd.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
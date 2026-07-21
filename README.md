# Shri Shahu Prabodhini — Sankalp Online Exam Website

A React (Vite) website for Shri Shahu Prabodhini school, built around the **Sankalp Online
Scholarship Exam** with 3 role-based logins (Admin / Coordinator / Student), a student
registration flow with **Razorpay** payment integration, and all the pages/menus requested.

## 1. Run it locally

```bash
npm install
npm run dev
```
Then open the printed local URL (usually http://localhost:5173).

To build for hosting:
```bash
npm run build       # outputs to /dist — upload this folder to any static host
```

## 2. Connect your real Razorpay account

Open `src/utils/razorpay.js`:
1. Sign up / log in at https://dashboard.razorpay.com/
2. Copy your **Key ID** (test: `rzp_test_...`, live: `rzp_live_...`)
3. Replace the placeholder:
   ```js
   export const RAZORPAY_KEY_ID = "rzp_test_XXXXXXXXXXXX"; // <- put your real key here
   ```
Until you do this, the registration form runs in **Demo Mode** — clicking "Pay & Register"
shows a simulated payment confirmation so you can test the full flow (roll number, login,
etc.) without a live key.

**Important (do before going live):** Razorpay orders should be created on a backend server
using your **Key Secret** (never put the Key Secret in frontend code). This project currently
simulates that order step on the client for demo purposes only — see the comments in
`src/utils/razorpay.js` for exactly where to plug in a real `/api/create-order` call.

## 3. Where things live

| What | File |
|---|---|
| All text/content (slider, courses, toppers, gallery, faculty, testimonials, exam info, syllabus) | `src/data/siteData.js` |
| Centers (Form 1) + Districts/Talukas | `src/data/centersData.js` |
| Coordinators (Form 3), linked to a Center | `src/data/coordinatorsData.js` |
| Students (Form 4 registrations) | `src/data/studentsData.js` |
| Dummy login logic (3 roles) | `src/context/AuthContext.jsx` |
| Razorpay helper | `src/utils/razorpay.js` |
| Navbar menu structure | `src/components/Navbar.jsx` |
| All routes | `src/App.jsx` |

Everything is **dummy data in plain JS files** — swap these for real API calls later without
touching the UI components.

## 4. Demo login credentials

| Role | ID | Password |
|---|---|---|
| Admin | `admin` | `admin@123` |
| Coordinator | `coordinator1` | `coord@123` |
| Student | `SSP2026-0001` | `ssp0001` |

New students get a fresh Roll No. + password automatically at the end of registration.

## 5. How Center ↔ Coordinator ↔ Student are linked

- Each **Center** (Form 1) belongs to a District + Taluka.
- Each **Coordinator** (Form 3) is allocated to exactly one Center.
- On the **Student Registration Form**, the student picks District → Taluka → Exam Center,
  and the Co-ordinator dropdown automatically filters to only the coordinators allocated to
  that center. Admin can add more Centers/Coordinators from the Admin Dashboard → Settings.

## 6. Pages included

Home (10-module layout), Sankalp Online Exam (Exam Information, Syllabus, Answer Key, Result
Check, Results PDF), Courses, Awards, Toppers, Gallery, Faculties, Testimonials, About Us,
Vision & Mission (Director's Message), Contact Us, Download, Privacy Policy, Refund Policy,
Login (3 roles), Student Registration, and Admin/Coordinator/Student dashboards.

## 7. Notes for the developer taking this further

- Icons: `lucide-react`. Routing: `react-router-dom`. Styling: Tailwind CSS.
- Replace Unsplash placeholder images in `src/data/siteData.js` with real school photos.
- Replace the Google Maps embed URL in `siteData.js` (`mapEmbed`) with your actual school's
  embed link from Google Maps → Share → Embed a map.
- For production, move all "dummy data" writes (Admin adding a Center/Coordinator, Student
  registering) to real backend API calls + a database.

import React, { useState, useEffect, useMemo } from 'react';
import { INITIAL_JOBS, INITIAL_COMPANIES, KERALA_DISTRICTS } from './utils/mockData';

// Modular components import placeholders
// (In production, these would be separate files. We bundle them cleanly in our structure)

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [companies, setCompanies] = useState(INITIAL_COMPANIES);

  const [user, setUser] = useState({
    isLoggedIn: true,
    name: "Amal Suresh",
    email: "amal.suresh@kerala.in",
    role: "candidate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    bio: "Pre-final year engineering student seeking react positions in Kochi Infopark.",
    skills: ["React.js", "JavaScript", "Tailwind CSS"],
    appliedJobs: ["job1"],
    savedJobs: ["job2"],
    resumeFile: "Amal_Suresh_CV.pdf",
    resumeScore: 78
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200">
      <div className="kasavu-border"></div>
      
      {/* Header / Navbar */}
      <header className="glass-nav sticky top-0 z-50 transition-all duration-300 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-kerala-green to-emerald-400 flex items-center justify-center text-white text-xl font-bold shadow-premium mr-3 font-outfit">
              KH
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-outfit">
                Kerala<span className="text-kerala-gold">Hire</span>
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-2 font-medium">
            {['home', 'jobs', 'companies', 'about', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 capitalize ${
                  activePage === page 
                    ? "bg-kerala-green/10 text-kerala-green dark:bg-emerald-500/10 dark:text-emerald-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            <button onClick={toggleTheme} className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button 
              onClick={() => setActivePage('dashboard')}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-kerala-green to-emerald-600 rounded-xl shadow-premium font-outfit"
            >
              Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Body Routing Router */}
      <main className="flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full">
        {activePage === 'home' && (
          <div className="space-y-12 py-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-outfit">
              Find Your Dream Job in <span className="text-kerala-green dark:text-emerald-400">Kerala</span>
            </h1>
            <p className="text-slate-500 max-w-lg mx-auto text-sm md:text-base">
              Discover openings in Kochi Infopark, Technopark Trivandrum, and active local startups.
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setActivePage('jobs')} className="px-6 py-3 bg-kerala-green text-white font-bold text-sm rounded-xl shadow shadow-premium font-outfit">
                Explore Vacancies
              </button>
              <button onClick={() => setActivePage('companies')} className="px-6 py-3 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold text-sm rounded-xl">
                Browse Companies
              </button>
            </div>
          </div>
        )}

        {activePage === 'jobs' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold font-outfit border-b pb-2">Active Vacancies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {jobs.map(job => (
                <div key={job.id} className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-premium transition-all">
                  <h3 className="font-bold text-base font-outfit">{job.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold">{job.companyName}</p>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">{job.desc}</p>
                  <div className="border-t border-slate-100 dark:border-slate-900 pt-3 mt-4 flex items-center justify-between text-xs font-semibold">
                    <span>💰 {job.salary.split(' - ')[0]}</span>
                    <span>📍 {job.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === 'companies' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold font-outfit border-b pb-2">Company Directory</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companies.map(comp => (
                <div key={comp.id} className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-3xl">{comp.logo}</span>
                    <h3 className="font-extrabold text-base mt-2 font-outfit">{comp.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{comp.industry}</p>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">{comp.about}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-4 border-t pt-2">📍 {comp.location.split(' / ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === 'about' && (
          <div className="max-w-2xl mx-auto space-y-4 py-8 text-center">
            <h2 className="text-3xl font-extrabold font-outfit">Kerala's Unified Hiring Portal</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We leverage clean web components and high-fidelity layouts to connect Kerala Startup Mission incubated startups and premier software organizations with local engineering graduates.
            </p>
          </div>
        )}

        {activePage === 'contact' && (
          <div className="max-w-md mx-auto space-y-4 py-8 glass-card p-6 border rounded-2xl">
            <h2 className="text-2xl font-extrabold font-outfit text-center">Reach Our Team</h2>
            <input type="text" placeholder="Your Name" className="w-full bg-slate-50 dark:bg-slate-900 border px-3 py-2 rounded-lg text-xs" />
            <input type="email" placeholder="Your Email" className="w-full bg-slate-50 dark:bg-slate-900 border px-3 py-2 rounded-lg text-xs" />
            <textarea placeholder="Message" rows="3" className="w-full bg-slate-50 dark:bg-slate-900 border px-3 py-2 rounded-lg text-xs"></textarea>
            <button className="w-full py-2 bg-kerala-green text-white text-xs font-bold rounded-lg font-outfit shadow">
              Submit Inquiry
            </button>
          </div>
        )}

        {activePage === 'dashboard' && (
          <div className="space-y-6">
            <div className="glass-card p-6 border rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-extrabold font-outfit">Seeker Profile Area</h2>
                <p className="text-xs text-slate-500 mt-0.5">Welcome back, {user.name} ({user.email})</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-kerala-green/10 text-kerala-green border border-kerala-green/20 rounded-lg text-xs font-bold font-outfit">AI CV Score: {user.resumeScore}%</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 glass-card p-5 border rounded-2xl space-y-4">
                <h3 className="font-extrabold text-base font-outfit">Applied Positions Pipeline</h3>
                <div className="p-3 bg-slate-100/50 dark:bg-slate-900/40 border rounded-xl flex justify-between items-center text-xs">
                  <div>
                    <p className="font-bold">Senior Full Stack Engineer</p>
                    <span className="text-[10px] text-slate-400">UST Global</span>
                  </div>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-bold text-[9px]">Under Review</span>
                </div>
              </div>
              
              <div className="glass-card p-5 border rounded-2xl space-y-3">
                <h3 className="font-extrabold text-base font-outfit">Candidate Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {user.skills.map(s => <span key={s} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-900 border rounded text-xs font-bold">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-8 text-center text-xs border-t border-slate-800 mt-12">
        <p>&copy; 2026 KeralaHire Platform. Incubated at Kerala Startup Mission. All rights reserved.</p>
      </footer>
    </div>
  );
}

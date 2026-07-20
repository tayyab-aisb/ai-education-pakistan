import { GraduationCap, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-900/60 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-900/30 rounded-full filter blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-emerald-900/60 pb-12">
          
          {/* Column 1: Logo & Vision */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-emerald-900 rounded-lg border border-emerald-800">
                <GraduationCap className="h-6 w-6 text-emerald-300" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Ilm<span className="text-emerald-400">AI</span>
              </span>
            </div>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              IlmAI is on a mission to democratize state-of-the-art Artificial Intelligence education across Pakistan, preparing students from high schools to remote regions for global remote job opportunities.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Explore Paths
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/80 font-medium">
              <li><a href="#syllabus" className="hover:text-white transition-colors">Curriculum Roadmap</a></li>
              <li><a href="#path-finder" className="hover:text-white transition-colors">Interactive Career Quiz</a></li>
              <li><a href="#scholarship" className="hover:text-white transition-colors">Scholarship Calculator</a></li>
              <li><a href="#stories" className="hover:text-white transition-colors">Student Success Stories</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate Partnerships */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Community Partners
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/80 font-medium">
              <li><span className="text-emerald-300">Pakistan IT Board (PITB)</span> references</li>
              <li><span className="text-emerald-300">HEC Curriculum</span> alignment standards</li>
              <li>National Grassroots AI Research</li>
              <li>Corporate CSR Zakat Fund Network</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Reach Out
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-emerald-200/80">
              <Mail className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span>admissions@ilmai.edu.pk</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-emerald-200/80">
              <Phone className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span>+92 (300) 012-3456 (WhatsApp only)</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-emerald-200/80">
              <MapPin className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span>Arfa Software Technology Park, Ferozepur Road, Lahore, Pakistan</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-emerald-300/70 font-medium font-mono">
          <p>© {new Date().getFullYear()} IlmAI Pakistan Academy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <Globe className="h-3.5 w-3.5" />
            Empowering the youth of Pakistan from Karachi to Gilgit-Baltistan.
          </p>
        </div>

      </div>
    </footer>
  );
}

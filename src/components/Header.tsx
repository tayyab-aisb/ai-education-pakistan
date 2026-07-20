import { motion } from "motion/react";
import { GraduationCap, Landmark, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Syllabus Path", target: "syllabus" },
    { name: "Path Assessment", target: "path-finder" },
    { name: "Scholarships", target: "scholarship" },
    { name: "Success Stories", target: "stories" },
  ];

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onScrollTo("hero")}>
            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
              <GraduationCap className="h-6 w-6 text-emerald-700" />
            </div>
            <div>
              <span className="font-display font-bold text-xl text-emerald-950 tracking-tight">
                Ilm<span className="text-emerald-600">AI</span>
              </span>
              <span className="ml-1 text-[10px] font-mono font-medium px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full uppercase tracking-wider">
                PK
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => onScrollTo(item.target)}
                className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onScrollTo("scholarship")}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
            >
              <Landmark className="h-3.5 w-3.5" />
              Check Eligibility
            </button>
            <button
              onClick={() => onScrollTo("register")}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-all shadow-sm shadow-emerald-700/20 hover:shadow-emerald-700/30 cursor-pointer"
            >
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3"
        >
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => {
                onScrollTo(item.target);
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3 px-3">
            <button
              onClick={() => {
                onScrollTo("scholarship");
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-lg transition-colors"
            >
              <Landmark className="h-4 w-4" />
              Check Scholarship Eligibility
            </button>
            <button
              onClick={() => {
                onScrollTo("register");
                setIsOpen(false);
              }}
              className="flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-sm"
            >
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

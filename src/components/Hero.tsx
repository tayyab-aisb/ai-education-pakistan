import { motion } from "motion/react";
import { Sparkles, ArrowRight, Play, Cpu, ShieldAlert, Laptop, Users, Award, TrendingUp } from "lucide-react";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const stats = [
    { label: "Students Trained", value: "15,000+", icon: Users, desc: "Across Lahore, Karachi, Islamabad & remote areas" },
    { label: "Student Earnings", value: "PKR 18M+", icon: TrendingUp, desc: "Earned in global remote AI work & freelancing" },
    { label: "Scholarships", value: "Up to 100%", icon: Award, desc: "Zakat-eligible fully-funded seats for deserving youth" },
    { label: "Industry Mentors", value: "45+", icon: Cpu, desc: "Working in Silicon Valley, London, & local tech hubs" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-emerald-50/45 to-white pt-10 pb-20 overflow-hidden" id="hero">
      {/* Background glowing decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100/50 rounded-full filter blur-3xl opacity-60" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-200/30 rounded-full filter blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100/80 border border-emerald-200 rounded-full text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-700 animate-pulse" />
            Pakistan's First Fully Localized AI Education Initiative
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-emerald-950 tracking-tight leading-none"
          >
            Elevate Pakistan's Future through <span className="text-emerald-700 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">Artificial Intelligence</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Bridge the gap between local curricula (Matric, FSc, O/A Levels) and global Silicon Valley expectations. Learn Generative AI, Machine Learning, and prompt engineering tailored to Pakistani academic structures, and launch your career on Fiverr, Upwork, or remote software companies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4"
          >
            <button
              onClick={() => onScrollTo("path-finder")}
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all shadow-md shadow-emerald-700/20 hover:shadow-emerald-700/30 cursor-pointer"
            >
              Find Your AI Career Path
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => onScrollTo("scholarship")}
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors cursor-pointer"
            >
              <Laptop className="mr-2 h-5 w-5 text-emerald-700" />
              Check Fee Scholarships
            </button>
          </motion.div>

          {/* Localized Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500 font-medium"
          >
            <ShieldAlert className="h-3.5 w-3.5 text-amber-600" />
            No prior coding background required • Bilingual (Urdu/English) support enabled
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-700 rounded-l-2xl transition-all duration-300 group-hover:h-1/2" />
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                </div>
                <div className="text-3xl font-display font-bold text-gray-900 group-hover:text-emerald-950 transition-colors">
                  {stat.value}
                </div>
                <p className="mt-1.5 text-xs text-gray-500 leading-normal">{stat.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

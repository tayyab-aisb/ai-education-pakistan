import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, ArrowRight, RefreshCw, CheckCircle2, DollarSign, Laptop, Sparkles } from "lucide-react";
import { QuizQuestion, CareerPathRecommendation } from "../types";

const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is your current academic/professional background in Pakistan?",
    options: [
      { text: "School/College (Matric, FSc, ICS, O/A Levels)", score: "school" },
      { text: "University Student (Computer Science / SE / IT)", score: "cs" },
      { text: "University Student / Graduate (Non-CS: Pre-Med, Business, Arts)", score: "non-cs" },
      { text: "Working Professional / Freelancer looking to pivot", score: "pro" }
    ]
  },
  {
    id: 2,
    question: "What is your primary goal from this AI education program?",
    options: [
      { text: "Start earning online (Fiverr, Upwork) as soon as possible", score: "freelancer" },
      { text: "Build advanced core AI models (Deep Learning, NLP, CV)", score: "engineer" },
      { text: "Boost productivity in my current studies/career using AI tools", score: "productivity" },
      { text: "Prepare for local/global university research and jobs", score: "career" }
    ]
  },
  {
    id: 3,
    question: "How many hours per week can you dedicate to learning?",
    options: [
      { text: "3 to 6 hours (Part-time or weekend learning)", score: "light" },
      { text: "7 to 15 hours (Regular, steady progress)", score: "medium" },
      { text: "More than 15 hours (Immersive, fast-paced learning)", score: "heavy" }
    ]
  },
  {
    id: 4,
    question: "What kind of hardware do you have regular access to?",
    options: [
      { text: "Only a smartphone with active 4G mobile data", score: "mobile" },
      { text: "A basic laptop/desktop (no dedicated GPU) with stable internet", score: "basic-pc" },
      { text: "A high-end machine with a dedicated graphics card (NVIDIA)", score: "gpu-pc" }
    ]
  }
];

const RECOMMENDATIONS: Record<string, CareerPathRecommendation> = {
  freelancer_fsc: {
    title: "AI Freelance & Prompt Specialist",
    badge: "Optimized for School/College Students",
    description: "Designed to help students build skills quickly and start freelancing. You'll master Large Language Models, prompt crafting, AI video/image generation, and data annotation. We focus heavily on remote portals (Fiverr/Upwork) and local client outreach.",
    estimatedTime: "3 Months (8 hours/week)",
    monthlyEarningUSD: "$400 - $1,200",
    monthlyEarningPKR: "PKR 110,000 - 330,000",
    keySkills: ["Prompt Engineering", "Midjourney & Stable Diffusion", "Urdu-English Translation/Editing", "AI Content Writing", "Fiverr SEO"],
    syllabus: [
      "Introduction to LLMs (ChatGPT, Claude, Gemini)",
      "Prompt design and workflow automation",
      "Image/Design AI for Pakistani graphic designers",
      "AI Copywriting & translation workflows",
      "Upwork & Fiverr profile launch & proposal writing"
    ]
  },
  core_engineer: {
    title: "Advanced AI & Machine Learning Engineer",
    badge: "For CS Students & Tech Professionals",
    description: "An intensive pathway covering mathematics, statistics, Python, and Deep Learning frameworks. You'll build commercial-grade models, optimize training loops, and deploy server-side apps. Perfect for securing high-paying local tech roles or direct remote contracts.",
    estimatedTime: "6 Months (15 hours/week)",
    monthlyEarningUSD: "$1,500 - $4,500",
    monthlyEarningPKR: "PKR 420,000 - 1,250,000",
    keySkills: ["Python & PyTorch", "Scikit-Learn", "LLM Fine-tuning", "SQL & Vector Databases", "API Deployment (FastAPI)"],
    syllabus: [
      "Mathematics of ML (Linear Algebra, Calculus, Probability)",
      "Classical Machine Learning algorithms from scratch",
      "Neural Networks and Deep Learning with PyTorch",
      "Natural Language Processing (NLP) & Urdu speech models",
      "RAG pipelines & LLM API integration with cloud deployments"
    ]
  },
  nocode_analyst: {
    title: "Generative AI Business & Data Analyst",
    badge: "Ideal for Non-CS Students & Managers",
    description: "A pathway that doesn't require complex coding. Learn how to leverage visual AI analytics, code interpreters, automated agents, and spreadsheets to analyze datasets, prepare corporate reports, and streamline business processes.",
    estimatedTime: "4 Months (6-10 hours/week)",
    monthlyEarningUSD: "$600 - $1,800",
    monthlyEarningPKR: "PKR 165,000 - 500,000",
    keySkills: ["Gemini Advanced & Advanced Data Analysis", "Excel/Sheets AI integrations", "Make.com Automation", "No-code dashboards", "AI-assisted research"],
    syllabus: [
      "AI-driven business research & report drafting",
      "Data analysis using ChatGPT Advanced Data Analysis",
      "No-code automation workflows (Zapier/Make)",
      "Urdu business communication localized automation",
      "AI-driven presentation & financial modeling basics"
    ]
  },
  mobile_foundations: {
    title: "AI Literacy & Digital Foundations",
    badge: "Optimized for Mobile-only Learners",
    description: "A highly accessible pathway tailored for students without a PC. Learn to use free cloud IDEs (like Google Colab) on mobile, master mobile-first prompt engineering, content moderation, and basic Python via web platforms. Perfect to build confidence until you get a PC.",
    estimatedTime: "2.5 Months (4 hours/week)",
    monthlyEarningUSD: "$200 - $500",
    monthlyEarningPKR: "PKR 55,000 - 140,000",
    keySkills: ["Mobile-first prompting", "Cloud IDEs (Colab)", "Data Annotation/Labelling", "Voiceover AI & CapCut AI", "Digital Freelancing Basics"],
    syllabus: [
      "Accessing high-quality LLMs on standard smartphones",
      "Introduction to Python programming on Google Colab Mobile",
      "Data labeling & preparation for international AI companies",
      "Mobile video editing and localized content generation",
      "Digital safety, internet search, and freelancing essentials"
    ]
  }
};

interface PathFinderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function PathFinder({ onScrollTo }: PathFinderProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [recommendation, setRecommendation] = useState<CareerPathRecommendation | null>(null);

  const handleOptionClick = (score: string) => {
    const updatedAnswers = { ...answers, [QUESTIONS[currentStep].id]: score };
    setAnswers(updatedAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate recommendation on the final step
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, string>) => {
    const background = finalAnswers[1];
    const goal = finalAnswers[2];
    const hardware = finalAnswers[4];

    // Priority checks
    if (hardware === "mobile") {
      // If mobile only, they must take the mobile-optimized path
      setRecommendation(RECOMMENDATIONS.mobile_foundations);
    } else if (background === "cs" || goal === "engineer") {
      // CS backgrounds or engineering goals go to core engineer
      setRecommendation(RECOMMENDATIONS.core_engineer);
    } else if (goal === "freelancer" || background === "school") {
      // Quick earnings or younger students
      setRecommendation(RECOMMENDATIONS.freelancer_fsc);
    } else {
      // Non-CS business / general analysts
      setRecommendation(RECOMMENDATIONS.nocode_analyst);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  const progressPercentage = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100" id="path-finder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-emerald-950 tracking-tight">
            Find Your AI Specialization
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            Not sure where to begin? Answer 4 quick questions about your education, background, and hardware to find the perfect AI roadmap with local relevance.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-10 min-h-[400px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {!recommendation ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full justify-between"
              >
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center text-xs text-gray-500 font-mono mb-2">
                    <span>QUESTION {currentStep + 1} OF {QUESTIONS.length}</span>
                    <span>{Math.round(progressPercentage)}% COMPLETE</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-emerald-700"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="mb-8">
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-gray-900 leading-snug">
                    {QUESTIONS[currentStep].question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3.5 mb-6">
                  {QUESTIONS[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(option.score)}
                      className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-emerald-600 hover:bg-emerald-50/40 text-sm font-medium text-gray-700 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span>{option.text}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-700 transform group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>

                {/* Bottom Back control if needed */}
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-semibold text-gray-400 hover:text-emerald-800 transition-colors cursor-pointer self-start flex items-center gap-1"
                  >
                    ← Previous Question
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Result header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                      <Sparkles className="h-3 w-3" /> {recommendation.badge}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-emerald-950">
                      {recommendation.title}
                    </h3>
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-500 hover:text-emerald-800 bg-gray-50 hover:bg-emerald-50 rounded-lg border border-gray-200/60 cursor-pointer self-start"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Retake Quiz
                  </button>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {recommendation.description}
                </p>

                {/* Stat Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/40">
                  <div>
                    <span className="block text-xs font-medium text-gray-500">Suggested Commitment</span>
                    <span className="text-sm font-semibold text-emerald-950">{recommendation.estimatedTime}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-gray-500">Remote Salary Potential</span>
                    <span className="text-sm font-semibold text-emerald-700 flex items-center gap-0.5">
                      <DollarSign className="h-3.5 w-3.5" />
                      {recommendation.monthlyEarningUSD} <span className="text-[10px] text-gray-500">/mo</span>
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-gray-500">Local Income Equivalent</span>
                    <span className="text-sm font-semibold text-emerald-900">{recommendation.monthlyEarningPKR}</span>
                  </div>
                </div>

                {/* Syllabus and Skills Lists */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 font-mono">
                      Core Technologies to Master
                    </h4>
                    <ul className="space-y-2">
                      {recommendation.keySkills.map((skill, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 font-mono">
                      Course Curriculum Highlights
                    </h4>
                    <ol className="space-y-2">
                      {recommendation.syllabus.map((topic, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-xs font-mono font-bold bg-gray-100 text-gray-600 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Result Actions */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onScrollTo("register")}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all shadow-sm shadow-emerald-700/10"
                  >
                    Secure Your Seat in this Path
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onScrollTo("syllabus")}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    Explore Syllabus Steps
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

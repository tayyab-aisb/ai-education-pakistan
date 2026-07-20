import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Terminal, Database, BrainCircuit, Bot, Calendar, Sparkles, CheckSquare, Layers } from "lucide-react";
import { RoadmapStep } from "../types";

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 1,
    title: "Phase 1: Python & Algorithmic Logic",
    description: "Build a strong coding foundation. Python is the universal language of AI. Learn it step-by-step with zero prerequisite knowledge.",
    duration: "4 Weeks (40 Hours total)",
    difficulty: "Beginner",
    topics: ["Variables, conditional logic, and control loops", "Structured data using Lists, Tuples, and Dictionaries", "Writing clean, reusable custom functions", "File handling and basic data loading with Pandas & NumPy"],
    pkContext: "Can be fully completed on low-end dual-core laptops or using free cloud-based IDEs (like Replit) on standard 4G mobile connections."
  },
  {
    id: 2,
    title: "Phase 2: Data Preparation & Analytics",
    description: "AI is fueled by data. Learn how to scrape, clean, process, and analyze massive datasets to prepare them for AI models.",
    duration: "4 Weeks (40 Hours total)",
    difficulty: "Intermediate",
    topics: ["Exploratory Data Analysis (EDA) using Seaborn & Matplotlib", "Data cleaning, encoding, and handling missing parameters", "Essential databases and SQL querying fundamentals", "Feature engineering to boost model performance"],
    pkContext: "Practice projects include real Pakistani datasets: crop yield optimization charts from Punjab agriculture, and stock analytics from the Pakistan Stock Exchange (PSX)."
  },
  {
    id: 3,
    title: "Phase 3: Classical Machine Learning",
    description: "Dive into statistical learning. Write algorithms that learn from historical patterns to make highly accurate predictions.",
    duration: "6 Weeks (60 Hours total)",
    difficulty: "Intermediate",
    topics: ["Regression and classification models with Scikit-Learn", "Decision Trees, Random Forests, and Ensemble models", "Clustering techniques (K-Means, Hierarchical clustering)", "Model evaluation, hyperparameter tuning, and overfitting prevention"],
    pkContext: "Build real projects like Clifton/Gulberg property price estimators, or energy load forecasting calculators to optimize solar panels."
  },
  {
    id: 4,
    title: "Phase 4: Neural Networks & Deep Learning",
    description: "Replicate the human brain. Master Deep Learning, Computer Vision, and Speech models using the world-class PyTorch framework.",
    duration: "6 Weeks (70 Hours total)",
    difficulty: "Advanced",
    topics: ["Artificial Neural Networks (ANNs) and backpropagation from scratch", "Convolutional Neural Networks (CNNs) for image detection", "Transfer Learning with state-of-the-art pre-trained networks", "Deploying visual AI models into real-world applications"],
    pkContext: "Work on computer vision models for local issues, such as classifying disease spots on Sargodha citrus leaves or building a basic Urdu character recognizer."
  },
  {
    id: 5,
    title: "Phase 5: Large Language Models & Agentic AI",
    description: "The cutting edge of technology. Learn how to engineer complex prompts, fine-tune massive open LLMs, and build intelligent AI agents.",
    duration: "6 Weeks (80 Hours total)",
    difficulty: "Advanced",
    topics: ["Prompt Engineering patterns and Gemini/OpenAI API architectures", "Retrieval-Augmented Generation (RAG) using Pinecone/ChromaDB", "Vector embeddings and semantic indexing", "Building fully automated autonomous AI agents (LangChain / AutoGPT)"],
    pkContext: "Design an Urdu-speaking automated customer service chatbot tailored for local Pakistani e-commerce stores (like Daraz) and mobile banking apps."
  }
];

export default function SyllabusRoadmap() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const icons = [Terminal, Database, Cpu, BrainCircuit, Bot];

  return (
    <section className="py-20 bg-white" id="syllabus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Curriculum Structure
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-emerald-950 tracking-tight mt-3">
            Your 5-Stage Journey to AI Mastery
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            A comprehensive, industry-reviewed syllabus meticulously structured into progressive phases, keeping the local Pakistani tech infrastructure in mind.
          </p>
        </div>

        {/* Roadmap Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Step Timeline Selector (Left or Top on mobile) */}
          <div className="lg:col-span-5 space-y-4">
            {ROADMAP_STEPS.map((step, idx) => {
              const Icon = icons[idx] || Terminal;
              const isActive = activeStep === idx;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer ${
                    isActive
                      ? "bg-emerald-900 border-emerald-900 text-white shadow-lg shadow-emerald-950/10"
                      : "bg-gray-50/50 border-gray-100 text-gray-700 hover:bg-gray-50 hover:border-gray-200"
                  }`}
                >
                  <div className={`p-2 rounded-lg flex-shrink-0 mt-0.5 ${
                    isActive ? "bg-emerald-800 text-emerald-300" : "bg-emerald-50 text-emerald-700"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isActive ? "text-emerald-300" : "text-emerald-700"
                      }`}>
                        Step {step.id}
                      </span>
                      <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${
                        isActive ? "bg-emerald-800 text-emerald-200" : "bg-gray-100 text-gray-600"
                      }`}>
                        {step.difficulty}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-base mt-1.5 leading-snug">
                      {step.title.split(": ")[1]}
                    </h3>
                    <p className={`text-xs mt-1 line-clamp-1 ${isActive ? "text-emerald-100" : "text-gray-500"}`}>
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Detail Box (Right) */}
          <div className="lg:col-span-7 bg-gray-50 rounded-3xl border border-gray-100 p-6 sm:p-10 min-h-[460px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200/50 pb-5">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-emerald-950">
                      {ROADMAP_STEPS[activeStep].title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 font-medium">
                      <Calendar className="h-4 w-4 text-emerald-700" />
                      <span>Estimated: <span className="font-semibold text-gray-800">{ROADMAP_STEPS[activeStep].duration}</span></span>
                      <span>•</span>
                      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {ROADMAP_STEPS[activeStep].difficulty} Level
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {ROADMAP_STEPS[activeStep].description}
                </p>

                {/* Topics Covered */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono mb-3 flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-emerald-700" />
                    Key Learning Milestones
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ROADMAP_STEPS[activeStep].topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckSquare className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Localized Context Box */}
                <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/40 mt-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <Sparkles className="h-20 w-20 text-emerald-900" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono flex items-center gap-1.5 mb-1.5">
                    🇵🇰 Pakistani Market Relevance
                  </h4>
                  <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                    {ROADMAP_STEPS[activeStep].pkContext}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

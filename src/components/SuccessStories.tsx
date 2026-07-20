import { Quote, Sparkles, MapPin, Award, ArrowUpRight } from "lucide-react";
import { SuccessStory } from "../types";

const STORIES: SuccessStory[] = [
  {
    id: 1,
    name: "Ali Raza",
    city: "Lahore",
    background: "FSc Pre-Engineering Student",
    challenge: "Faced 4 hours of daily load shedding and owned a 10-year-old core-i3 desktop with no graphics card.",
    achievement: "Learnt prompt engineering, dataset annotation, and basic Python using Google Colab on his smartphone and laptop.",
    outcome: "Now works remotely as an AI Prompt Reviewer for a US tech platform, earning over $950/month (PKR 260,000+).",
    avatarSeed: "ali"
  },
  {
    id: 2,
    name: "Ayesha Fatima",
    city: "Karachi",
    background: "Mother & CS Graduate (2018)",
    challenge: "Felt career-locked after a 5-year break. Wanted to get into modern Generative AI without leaving her toddlers.",
    achievement: "Mastered LLM fine-tuning, LangChain, and RAG architectures in our flexible hybrid learning path.",
    outcome: "Secured her first high-ticket Upwork contract building custom AI chatbots, making $35/hour from her living room.",
    avatarSeed: "ayesha"
  },
  {
    id: 3,
    name: "Bilal Khan",
    city: "Peshawar",
    background: "Freelance Graphic Designer",
    challenge: "Struggled with decreasing client rates for basic logos as generic design tools became saturated.",
    achievement: "Learnt AI image generation models, image prompt crafting, and workflow integrations with Figma.",
    outcome: "Repositioned himself as an AI Creative Director on Fiverr, helping agencies automate marketing campaigns.",
    avatarSeed: "bilal"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-white" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Real Impact, Real People
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-emerald-950 tracking-tight mt-3">
            Pakistan's AI Success Stories
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            Witness how students, homemakers, and freelancers across Pakistan are overcoming infrastructure bottlenecks to master AI and achieve financial independence.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-gray-50/50 rounded-3xl border border-gray-100 p-8 flex flex-col justify-between relative hover:shadow-lg hover:bg-white hover:border-emerald-100/65 transition-all duration-300 group"
            >
              {/* Quote mark ornament */}
              <div className="absolute top-6 right-8 text-emerald-100 group-hover:text-emerald-200 transition-colors">
                <Quote className="h-10 w-10 transform scale-x-[-1]" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* User Metadata */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-700 text-white font-display font-bold flex items-center justify-center shadow-md shadow-emerald-700/10">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-gray-900 group-hover:text-emerald-950 transition-colors">
                      {story.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                      <MapPin className="h-3 w-3 text-emerald-600" />
                      <span>{story.city}, Pakistan</span>
                    </div>
                  </div>
                </div>

                {/* Tag */}
                <span className="inline-flex text-[10px] font-bold font-mono text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">
                  {story.background}
                </span>

                {/* Challenge & Achievement Text */}
                <div className="space-y-3.5 pt-2">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono mb-1">
                      The Challenge
                    </span>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono mb-1">
                      The Breakthrough
                    </span>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      {story.achievement}
                    </p>
                  </div>
                </div>
              </div>

              {/* Outcome Highlight Box */}
              <div className="mt-8 pt-6 border-t border-gray-200/50 flex items-start gap-2.5">
                <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-700">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-emerald-800 font-mono">
                    Career Outcome
                  </span>
                  <p className="text-xs text-emerald-950 font-semibold leading-snug mt-0.5">
                    {story.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Localized stats summary */}
        <div className="mt-16 bg-emerald-900 text-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* subtle decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-emerald-800 text-emerald-300 px-2.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="h-3 w-3" /> Fiverr & Upwork Certified
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              Ready to write your own success story?
            </h3>
            <p className="text-xs text-emerald-100 max-w-xl">
              Join thousands of other Pakistani youth who are transforming their lives through high-impact AI skills. Your background is your springboard, not your limitation.
            </p>
          </div>

          <a
            href="#register"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-emerald-950 bg-white hover:bg-emerald-50 rounded-xl transition-all shadow-md hover:shadow-lg relative z-10 whitespace-nowrap cursor-pointer"
          >
            Get Free Guidance Chat
            <ArrowUpRight className="ml-1.5 h-4 w-4 text-emerald-700" />
          </a>
        </div>

      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Landmark, Check, AlertCircle, Smartphone, Award, HelpCircle, Laptop } from "lucide-react";

export default function ScholarshipCalculator() {
  const [income, setIncome] = useState<number>(55000); // in PKR
  const [academicScore, setAcademicScore] = useState<number>(78); // percentage
  const [studentCategory, setStudentCategory] = useState<string>("intermediate");

  // Output states
  const [baseFee, setBaseFee] = useState<number>(10000); // standard PKR monthly
  const [scholarshipPercent, setScholarshipPercent] = useState<number>(0);
  const [netFee, setNetFee] = useState<number>(0);
  const [isZakatEligible, setIsZakatEligible] = useState<boolean>(false);
  const [qualifiesForLaptop, setQualifiesForLaptop] = useState<boolean>(false);

  useEffect(() => {
    // 1. Calculate Base Fee according to category
    let fee = 10000;
    if (studentCategory === "school") fee = 6500;
    if (studentCategory === "intermediate") fee = 9000;
    if (studentCategory === "university") fee = 12000;
    if (studentCategory === "professional") fee = 15000;
    setBaseFee(fee);

    // 2. Calculate Scholarship percentage based on Income and Academic Score
    let pct = 0;

    // Merit-based scholarship boost
    if (academicScore >= 90) pct += 40;
    else if (academicScore >= 80) pct += 25;
    else if (academicScore >= 70) pct += 15;
    else if (academicScore >= 60) pct += 5;

    // Financial-need-based scholarship boost
    if (income <= 35000) {
      pct += 60; // extreme need
    } else if (income <= 60000) {
      pct += 45; // high need
    } else if (income <= 100000) {
      pct += 30; // moderate need
    } else if (income <= 150000) {
      pct += 15; // mild need
    }

    // Caps scholarship percentage at 100%
    if (pct > 100) pct = 100;
    // Minimum scholarship is 10% for everyone to encourage AI literacy in Pakistan
    if (pct < 10) pct = 10;

    setScholarshipPercent(pct);

    // 3. Net Fee Calculation
    const calculatedNet = Math.round(fee * (1 - pct / 100));
    setNetFee(calculatedNet);

    // 4. Zakat Eligibility (Standard local threshold - usually household income <= 45,000 PKR)
    setIsZakatEligible(income <= 45000);

    // 5. Community Laptop Support qualification (needs high academic score + low income)
    setQualifiesForLaptop(income <= 50000 && academicScore >= 75);

  }, [income, academicScore, studentCategory]);

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100" id="scholarship">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Financial Accessibility Calculator
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-emerald-950 tracking-tight mt-3">
            Check Your Subsidized Fees & Scholarships
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            We believe that financial barriers shouldn't hold back Pakistan's brightest minds. Adjust the sliders below to calculate your customized fee structure and scholarship grants.
          </p>
        </div>

        {/* Dynamic Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-sm flex flex-col justify-between space-y-8">
            
            {/* Category Select */}
            <div>
              <label className="block text-sm font-semibold text-emerald-950 mb-3">
                1. Select Your Current Category
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "school", name: "Matric / O-Levels" },
                  { id: "intermediate", name: "FSc / ICS / A-Levels" },
                  { id: "university", name: "University Student" },
                  { id: "professional", name: "Freelancer / Job Seeker" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setStudentCategory(cat.id)}
                    className={`p-3.5 rounded-xl border text-xs font-semibold transition-all text-center cursor-pointer ${
                      studentCategory === cat.id
                        ? "bg-emerald-50 border-emerald-600 text-emerald-800 shadow-sm"
                        : "border-gray-100 hover:border-gray-300 text-gray-600 bg-gray-50/50"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Income Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-emerald-950 flex items-center gap-1.5">
                  2. Household Monthly Income
                </label>
                <span className="text-sm font-mono font-bold text-emerald-700">
                  PKR {income.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="250000"
                step="5000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-emerald-700"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-medium mt-1">
                <span>PKR 20,000 (Low Income)</span>
                <span>PKR 120,000</span>
                <span>PKR 250,000+</span>
              </div>
            </div>

            {/* Academic Score Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-emerald-950">
                  3. Academic / Board Score (Percentage)
                </label>
                <span className="text-sm font-mono font-bold text-emerald-700">
                  {academicScore}%
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                step="1"
                value={academicScore}
                onChange={(e) => setAcademicScore(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-emerald-700"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-medium mt-1">
                <span>50% (Passing)</span>
                <span>75% (First Div)</span>
                <span>100% (Position Holder)</span>
              </div>
            </div>

            {/* Easy payment wallet references */}
            <div className="pt-4 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-500">
              <Smartphone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              <span>
                Subsidized course fees are easily payable via <strong className="text-emerald-900">Easypaisa</strong>, <strong className="text-emerald-900">JazzCash</strong>, or local bank transfers in interest-free monthly installments.
              </span>
            </div>

          </div>

          {/* Results Summary Card (Right) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2 border-b border-emerald-800 pb-4">
                <Landmark className="h-5 w-5 text-emerald-300" />
                <h3 className="font-display font-bold text-lg">Your Subsidized Plan</h3>
              </div>

              {/* Fee and Grant display */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm text-emerald-100">
                  <span>Standard Monthly Fee:</span>
                  <span className="line-through font-mono">PKR {baseFee.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-emerald-100 flex items-center gap-1">
                    Scholarship Coverage:
                    <Award className="h-3.5 w-3.5 text-emerald-400" />
                  </span>
                  <span className="text-lg font-bold text-emerald-300">
                    {scholarshipPercent}% GRANT
                  </span>
                </div>

                <div className="pt-4 border-t border-emerald-800/60 flex justify-between items-baseline">
                  <span className="text-sm font-semibold text-emerald-100">Your Subsidized Fee:</span>
                  <div className="text-right">
                    <span className="text-3xl font-display font-black text-white">
                      PKR {netFee.toLocaleString()}
                    </span>
                    <span className="block text-[10px] text-emerald-200 uppercase tracking-wider font-mono">
                      Per Month
                    </span>
                  </div>
                </div>
              </div>

              {/* Flags/Badges list */}
              <div className="space-y-3 pt-4 border-t border-emerald-800/60">
                {isZakatEligible && (
                  <div className="flex items-start gap-2 text-xs text-emerald-100">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Zakat Eligible:</strong> Your household income fits Zakat thresholds. 100% free funding is available via our CSR partners.
                    </span>
                  </div>
                )}

                {qualifiesForLaptop && (
                  <div className="flex items-start gap-2 text-xs text-emerald-100">
                    <Laptop className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Free Laptop Program:</strong> Your academic merit qualifies you to request a sponsor-donated laptop.
                    </span>
                  </div>
                )}

                {!isZakatEligible && !qualifiesForLaptop && (
                  <div className="flex items-start gap-2 text-xs text-emerald-100">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Sponsor Subsidized:</strong> Supported by Pakistani corporate tech funds to reduce standard commercial tuition fees by over {scholarshipPercent}%.
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 relative z-10">
              <a
                href="#register"
                className="w-full inline-flex items-center justify-center px-5 py-3.5 text-sm font-bold text-emerald-950 bg-white hover:bg-emerald-50 rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                Apply for this Scholarship Now
              </a>
              <span className="block text-center text-[10px] text-emerald-300 font-mono mt-2.5">
                *Verified during admission through submission of Sallay details or marksheets.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

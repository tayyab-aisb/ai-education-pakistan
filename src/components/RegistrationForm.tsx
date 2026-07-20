import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, AlertTriangle, Smartphone, BookOpen, ShieldCheck } from "lucide-react";
import { RegistrationInput } from "../types";

const PAKISTANI_CITIES = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar", 
  "Quetta", "Multan", "Faisalabad", "Sialkot", "Gujranwala", 
  "Hyderabad", "Abbottabad", "Bahawalpur", "Sargodha", "Other"
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState<RegistrationInput>({
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "Lahore",
    education: "intermediate",
    hasLaptop: true,
    termsAccepted: false
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationInput, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const tempErrors: Partial<Record<keyof RegistrationInput, string>> = {};

    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      tempErrors.phoneNumber = "Phone number is required";
    } else {
      // Basic Pakistani phone validation: starts with 03 or +923
      const numOnly = formData.phoneNumber.replace(/[\s-]/g, "");
      if (!/^(03|\+923)\d{9}$/.test(numOnly)) {
        tempErrors.phoneNumber = "Please enter a valid Pakistani number (e.g., 03001234567)";
      }
    }

    if (!formData.termsAccepted) {
      tempErrors.termsAccepted = "You must agree to the student code of conduct";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  return (
    <section className="py-20 bg-white" id="register">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Enrollment Application
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-emerald-950 tracking-tight mt-3">
            Apply for the Next AI Batch
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            Fill out your preliminary application below. Admissions are currently open for Batch 4 starting early next month. Seats are limited.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {/* Two Column Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-emerald-950 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Muhammad Bilal"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? "border-red-300 focus:ring-red-100 focus:border-red-500"
                          : "border-gray-200 focus:ring-emerald-100 focus:border-emerald-600"
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-xs font-medium text-red-500 mt-1 flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-emerald-950 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. bilal@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-red-300 focus:ring-red-100 focus:border-red-500"
                          : "border-gray-200 focus:ring-emerald-100 focus:border-emerald-600"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs font-medium text-red-500 mt-1 flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Two Column Phone & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-sm font-semibold text-emerald-950">
                        WhatsApp Contact Number
                      </label>
                      <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                        <Smartphone className="h-2.5 w-2.5" /> For instant class alerts
                      </span>
                    </div>
                    <input
                      type="tel"
                      placeholder="e.g. 03001234567"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                        errors.phoneNumber
                          ? "border-red-300 focus:ring-red-100 focus:border-red-500"
                          : "border-gray-200 focus:ring-emerald-100 focus:border-emerald-600"
                      }`}
                    />
                    {errors.phoneNumber && (
                      <span className="text-xs font-medium text-red-500 mt-1 flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" /> {errors.phoneNumber}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-emerald-950 mb-1.5">
                      Select Your City
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-600 transition-all"
                    >
                      {PAKISTANI_CITIES.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Academic Background & Laptop Access */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-emerald-950 mb-1.5">
                      Current Academic Level
                    </label>
                    <select
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-600 transition-all"
                    >
                      <option value="school">Matric / O-Levels Student</option>
                      <option value="intermediate">FSc / ICS / A-Levels Student</option>
                      <option value="university_cs">University Student (Computer Science/Tech)</option>
                      <option value="university_non_cs">University Student (Non-Technical)</option>
                      <option value="professional">Working Professional / Freelancer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-emerald-950 mb-1.5">
                      Do you have computer/laptop access?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, hasLaptop: true })}
                        className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                          formData.hasLaptop
                            ? "bg-emerald-50 border-emerald-600 text-emerald-800"
                            : "bg-white border-gray-200 text-gray-500"
                        }`}
                      >
                        Yes, I have a computer
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, hasLaptop: false })}
                        className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                          !formData.hasLaptop
                            ? "bg-emerald-50 border-emerald-600 text-emerald-800"
                            : "bg-white border-gray-200 text-gray-500"
                        }`}
                      >
                        No, mobile data only
                      </button>
                    </div>
                  </div>
                </div>

                {/* Checkbox Terms and Conditions */}
                <div className="pt-4 border-t border-gray-200/60 space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-700 focus:ring-emerald-600"
                    />
                    <span className="text-xs text-gray-600 leading-normal font-medium">
                      I agree to dedicate at least 8 hours per week, adhere to the student honor code, and provide authentic marksheet/salary documents if requested for scholarship auditing.
                    </span>
                  </label>
                  {errors.termsAccepted && (
                    <span className="text-xs font-medium text-red-500 block flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3" /> {errors.termsAccepted}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-600/50 rounded-xl transition-all shadow-md shadow-emerald-700/10 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting Preliminary Application...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Admission Request
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="h-10 w-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-emerald-950">
                    Application Received Successfully!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                    Assalam-o-Alaikum, <strong className="text-emerald-950">{formData.fullName}</strong>. We have registered your preliminary application for the AI Education program.
                  </p>
                </div>

                {/* Next Steps List */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 text-left max-w-xl mx-auto space-y-4 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono flex items-center gap-1.5 border-b border-gray-100 pb-2">
                    <BookOpen className="h-4 w-4 text-emerald-700" />
                    Your Next Steps
                  </h4>
                  <ol className="space-y-3 text-xs text-gray-600 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="bg-emerald-50 text-emerald-800 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 font-bold font-mono">1</span>
                      <span>
                        <strong>WhatsApp Interview:</strong> You will receive a secure interview call or automated questionnaire on <strong className="text-emerald-950">{formData.phoneNumber}</strong> within 24 hours.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-emerald-50 text-emerald-800 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 font-bold font-mono">2</span>
                      <span>
                        <strong>Verify Scholarship Category:</strong> Have your Matric/Intermediate marksheet or income proofs ready for standard audits.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-emerald-50 text-emerald-800 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 font-bold font-mono">3</span>
                      <span>
                        <strong>Diagnostic Aptitude Test:</strong> You will complete a simple 20-minute online math & logic diagnostic test via our learning management system.
                      </span>
                    </li>
                  </ol>
                </div>

                {/* Digital trust statement */}
                <div className="flex items-center justify-center gap-1 text-[11px] text-gray-400 font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Data secured under Pakistan IT Board guidelines & GDPR standards</span>
                </div>

                {/* Reset button to demonstrate again */}
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phoneNumber: "",
                      city: "Lahore",
                      education: "intermediate",
                      hasLaptop: true,
                      termsAccepted: false
                    });
                  }}
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-gray-500 hover:text-emerald-800 bg-white hover:bg-emerald-50 border border-gray-200 rounded-lg cursor-pointer transition-colors"
                >
                  Apply For Another Student
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import PathFinder from "./components/PathFinder";
import SyllabusRoadmap from "./components/SyllabusRoadmap";
import ScholarshipCalculator from "./components/ScholarshipCalculator";
import SuccessStories from "./components/SuccessStories";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

export default function App() {
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased scroll-smooth">
      {/* Dynamic Header */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Content Sections */}
      <main>
        {/* Striking Localized Hero Section */}
        <Hero onScrollTo={handleScrollTo} />

        {/* 5-Stage Interactive Syllabus Roadmap */}
        <SyllabusRoadmap />

        {/* Dynamic AI Path Assessment Quiz */}
        <PathFinder onScrollTo={handleScrollTo} />

        {/* Scholarship Subsidized Fee Calculator */}
        <ScholarshipCalculator />

        {/* Interactive Real Pakistani Impact Stories */}
        <SuccessStories />

        {/* Registration & Admission Application Form */}
        <RegistrationForm />
      </main>

      {/* Localized Footer with Links */}
      <Footer />
    </div>
  );
}

export interface QuizOption {
  text: string;
  score: string; // e.g. 'school', 'university', 'professional', 'freelancer'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface CareerPathRecommendation {
  title: string;
  badge: string;
  description: string;
  estimatedTime: string;
  monthlyEarningUSD: string;
  monthlyEarningPKR: string;
  keySkills: string[];
  syllabus: string[];
}

export interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  pkContext: string; // Pakistani context, like "Can be completed on a mobile or low-end laptop"
}

export interface SuccessStory {
  id: number;
  name: string;
  city: string;
  background: string;
  challenge: string; // Local challenges e.g. load shedding, lack of guidance
  achievement: string;
  outcome: string; // e.g. Remote job, Freelance success
  avatarSeed: string;
}

export interface RegistrationInput {
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  education: string;
  hasLaptop: boolean;
  termsAccepted: boolean;
}

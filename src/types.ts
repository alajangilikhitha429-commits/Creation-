export type CategoryId = 
  | 'all'
  | 'website-builders'
  | 'nocode-lowcode'
  | 'ai-builders'
  | 'app-dev'
  | 'coding-platforms';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type PricingType = 'Free' | 'Free Tier' | 'Free with Student Pack' | 'Freemium' | 'Paid';

export interface Platform {
  id: string;
  name: string;
  tagline: string;
  category: CategoryId;
  categoryName: string;
  specializesIn: string;
  canBuild: string[];
  difficulty: DifficultyLevel;
  pricing: PricingType;
  pricingDetails: string;
  officialUrl: string;
  docsUrl?: string;
  studentPerk?: string; // e.g. GitHub Student Developer Pack perk
  bestForProjectStage: '1st/2nd Year Mini Project' | 'Hackathon Prototype' | 'Club / Campus Fest Site' | 'Final Year Capstone' | 'Portfolio & Resume';
  popularForViva: string; // key points to mention in project presentation or report
  prosForStudents: string[];
  sampleProjectIdeas: string[];
}

export interface FilterOptions {
  search: string;
  category: CategoryId;
  difficulty: DifficultyLevel | 'All';
  pricing: PricingType | 'All';
  onlyStudentPack: boolean;
  sortBy: 'recommended' | 'name-asc' | 'difficulty-asc';
}

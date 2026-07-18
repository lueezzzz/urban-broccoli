export type ExperienceLocation = "Remote" | "Hybrid" | "On-site";

export type ExperienceRole = {
  title: string;
  date: string;
  description: readonly string[];
  skills: readonly string[];
};

export type Experience = {
  company: string;
  logo: string;
  type: string;
  location?: ExperienceLocation;
  roles: readonly ExperienceRole[];
};

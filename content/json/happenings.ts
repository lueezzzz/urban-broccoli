import type { Happening } from "@/types/happenings";

export const happenings: readonly Happening[] = [
  {
    title: "GRADUATED!!",
    summary:
      "Just graduated cum laude with a Bachelor of Science in Computer Science degree at the University of the Philippines Visayas.",
    image: "/happenings/graduation.jpg",
    imageAlt: "Graduation Photo",
    emphasis: "cum laude",
  },
  {
    title: "Finalists",
    summary:
      "Selected as one of 8 finalist teams from over 50 applicants to compete in the United Nations Cybercrime Hackathon 2025 at Hanoi, Vietnam.",
    image: "/happenings/hackathon.jpeg",
    imageAlt: "United Nations Cybercrime Hackathon 2025",
    emphasis: "one of 8 finalist teams from over 50 applicants",
  },
] as const;

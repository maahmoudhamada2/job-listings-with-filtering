interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: "Frontend" | "Fullstack" | "Backend";
  level: "Senior" | "Midweight" | "Junior";
  postedAt: string;
  contract: "Part Time" | "Full Time" | "Contract";
  location: string;
  languages: string[];
  tools: string[];
}

interface JobHeaderData {
  logoUrl: string;
  companyName: string;
  jobPosition: string;
  isNew: boolean;
  isFeatured: boolean;
  metas: string[];
}

export { Job, JobHeaderData };

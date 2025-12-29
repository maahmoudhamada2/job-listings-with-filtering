import JobCard from "./components/Job/JobCard";
import { Job } from "./types/job";

const mockData: Job = {
  id: 1,
  company: "Photosnap",
  logo: "/src/assets/images/photosnap.svg",
  new: true,
  featured: true,
  position: "Senior Frontend Developer",
  role: "Frontend",
  level: "Senior",
  postedAt: "1d ago",
  contract: "Full Time",
  location: "USA only",
  languages: ["HTML", "CSS", "JavaScript"],
  tools: [],
};

const App = () => {
  return (
    <div>
      <JobCard job={mockData} />
    </div>
  );
};

export default App;

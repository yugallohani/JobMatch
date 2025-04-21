
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface JobType {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  remote: boolean;
  postedDate: string;
  logo?: string;
  description: string;
  skills: string[];
}

interface JobCardProps {
  job: JobType;
}

const JobCard = ({ job }: JobCardProps) => {
  // Calculate days ago
  const daysAgo = () => {
    const posted = new Date(job.postedDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - posted.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 1 ? "Today" : `${diffDays} days ago`;
  };

  return (
    <div className="job-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
            {job.logo ? (
              <img src={job.logo} alt={job.company} className="h-full w-full object-cover" />
            ) : (
              <div className="text-lg font-bold">{job.company.charAt(0)}</div>
            )}
          </div>
          <div>
            <h3 className="font-medium text-lg">{job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.company}</p>
          </div>
        </div>
        <div className="hidden md:block">
          <Badge variant="outline">{daysAgo()}</Badge>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">
            {job.remote ? "Remote" : job.location}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">{job.type}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">{job.salary}</span>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">{daysAgo()}</span>
        </div>
      </div>

      {job.skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {job.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="secondary" className="badge-primary">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 3 && (
            <Badge variant="secondary" className="badge-secondary">
              +{job.skills.length - 3} more
            </Badge>
          )}
        </div>
      )}
      
      <div className="mt-4 flex justify-end">
        <Link to={`/jobs/${job.id}`}>
          <Button className="btn-primary">View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;

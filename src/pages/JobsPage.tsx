
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import JobSearch from "@/components/jobs/JobSearch";
import JobFilter from "@/components/jobs/JobFilter";
import JobCard, { JobType } from "@/components/jobs/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useLocation } from "react-router-dom";

const JobsPage = () => {
  const location = useLocation();
  const { toast } = useToast();
  
  // Parse URL parameters
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("q") || "";
  const initialLocation = queryParams.get("location") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchLocation, setSearchLocation] = useState(initialLocation);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    jobTypes: [],
    remoteOptions: [],
    salaryRanges: [],
    experienceLevels: [],
  });
  
  // Mock data for filters
  const jobTypes = [
    { id: "full-time", label: "Full-time" },
    { id: "part-time", label: "Part-time" },
    { id: "contract", label: "Contract" },
    { id: "internship", label: "Internship" },
  ];
  
  const remoteOptions = [
    { id: "remote", label: "Remote" },
    { id: "hybrid", label: "Hybrid" },
    { id: "on-site", label: "On-site" },
  ];
  
  const salaryRanges = [
    { id: "0-50k", label: "$0 - $50K" },
    { id: "50k-100k", label: "$50K - $100K" },
    { id: "100k-150k", label: "$100K - $150K" },
    { id: "150k+", label: "$150K+" },
  ];
  
  const experienceLevels = [
    { id: "entry", label: "Entry Level" },
    { id: "mid", label: "Mid Level" },
    { id: "senior", label: "Senior Level" },
    { id: "exec", label: "Executive" },
  ];
  
  // Mock job listings
  const [jobs, setJobs] = useState<JobType[]>([
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$120K - $150K",
      type: "Full-time",
      remote: true,
      postedDate: new Date(2023, 3, 15).toISOString(),
      description: "We are looking for a Senior Frontend Developer to join our team...",
      skills: ["React", "TypeScript", "CSS", "HTML", "JavaScript"],
    },
    {
      id: "2",
      title: "Backend Engineer",
      company: "DataSystems",
      location: "New York, NY",
      salary: "$130K - $160K",
      type: "Full-time",
      remote: false,
      postedDate: new Date(2023, 3, 18).toISOString(),
      description: "Join our backend team to build scalable APIs and services...",
      skills: ["Node.js", "Python", "MongoDB", "AWS", "Docker"],
    },
    {
      id: "3",
      title: "UX/UI Designer",
      company: "CreativeMinds",
      location: "Austin, TX",
      salary: "$90K - $120K",
      type: "Full-time",
      remote: true,
      postedDate: new Date(2023, 3, 20).toISOString(),
      description: "We need a creative designer with a passion for user experience...",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    },
    {
      id: "4",
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Seattle, WA",
      salary: "$140K - $170K",
      type: "Full-time",
      remote: true,
      postedDate: new Date(2023, 3, 22).toISOString(),
      description: "Help us build and maintain our cloud infrastructure...",
      skills: ["Kubernetes", "AWS", "CI/CD", "Docker", "Terraform"],
    },
    {
      id: "5",
      title: "Data Scientist",
      company: "AnalyticsPro",
      location: "Boston, MA",
      salary: "$110K - $140K",
      type: "Full-time",
      remote: false,
      postedDate: new Date(2023, 3, 25).toISOString(),
      description: "Join our data science team to build machine learning models...",
      skills: ["Python", "TensorFlow", "SQL", "Data Visualization", "Statistics"],
    },
  ]);
  
  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
    
    // In a real app, we would fetch jobs based on these params
    toast({
      title: "Searching jobs",
      description: `Query: ${query}, Location: ${location}`,
    });
  };
  
  const handleFilterChange = (
    filterType: "jobTypes" | "remoteOptions" | "salaryRanges" | "experienceLevels",
    filterId: string,
    checked: boolean
  ) => {
    setSelectedFilters((prev) => {
      if (checked) {
        return {
          ...prev,
          [filterType]: [...prev[filterType], filterId],
        };
      } else {
        return {
          ...prev,
          [filterType]: prev[filterType].filter((id) => id !== filterId),
        };
      }
    });
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Layout>
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8">
          <h1>Find Your Perfect Job</h1>
          <p className="mt-2 text-muted-foreground">
            Browse our latest job listings and find the perfect match for your skills and experience.
          </p>
        </div>
        
        <div className="mb-8">
          <JobSearch onSearch={handleSearch} />
        </div>
        
        <div className="grid gap-8 md:grid-cols-12">
          {/* Filters for md and larger screens */}
          <div className="hidden md:block md:col-span-3 lg:col-span-3">
            <JobFilter
              jobTypes={jobTypes}
              remoteOptions={remoteOptions}
              salaryRanges={salaryRanges}
              experienceLevels={experienceLevels}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>
          
          {/* Jobs list */}
          <div className="md:col-span-9 lg:col-span-9">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Job Listings</h2>
                <p className="text-sm text-muted-foreground">
                  Showing {jobs.length} results
                </p>
              </div>
              
              <div className="mt-4 sm:mt-0 flex items-center gap-2">
                {/* Filter button for mobile */}
                <Button
                  variant="outline"
                  className="md:hidden"
                  onClick={toggleFilters}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414v6.586a1 1 0 01-1.414 0l-2-2A1 1 0 0110 18v-4.586l-6.293-6.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Filters
                </Button>
                
                {/* Sort dropdown - just a placeholder for now */}
                <div className="relative">
                  <select
                    className="appearance-none rounded-md border bg-background px-3 py-2 pr-8 text-sm focus:border-jobboard-primary focus:outline-none focus:ring-1 focus:ring-jobboard-primary"
                    defaultValue="relevance"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="date">Date (Newest)</option>
                    <option value="salary-high">Salary (Highest)</option>
                    <option value="salary-low">Salary (Lowest)</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Mobile filters (collapsible) */}
            {showFilters && (
              <div className="mb-6 p-4 border rounded-lg md:hidden">
                <JobFilter
                  jobTypes={jobTypes}
                  remoteOptions={remoteOptions}
                  salaryRanges={salaryRanges}
                  experienceLevels={experienceLevels}
                  selectedFilters={selectedFilters}
                  onFilterChange={handleFilterChange}
                />
              </div>
            )}
            
            {/* Job listings */}
            <div className="space-y-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
              
              {jobs.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No jobs found</h3>
                  <p className="text-muted-foreground mt-2">
                    Try adjusting your search or filters to find more results.
                  </p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {jobs.length > 0 && (
              <div className="flex justify-center mt-10">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-jobboard-primary text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    ...
                  </Button>
                  <Button variant="outline" size="sm">
                    10
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobsPage;

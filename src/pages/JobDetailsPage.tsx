
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { JobType } from "@/components/jobs/JobCard";
import ResumeUploadAnalyzer from "@/components/resume/ResumeUploadAnalyzer";
import { toast } from "sonner";

const JobDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<JobType | null>(null);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock job data based on ID
        const mockJob: JobType = {
          id: id || "1",
          title: "Senior Frontend Developer",
          company: "TechCorp",
          location: "San Francisco, CA",
          salary: "$120K - $150K",
          type: "Full-time",
          remote: true,
          postedDate: new Date(2023, 3, 15).toISOString(),
          description: `
            <p>We are looking for a Senior Frontend Developer to join our team and help us build amazing web applications. The ideal candidate will have strong experience with React, TypeScript, and modern frontend development practices.</p>
            
            <h3>Responsibilities:</h3>
            <ul>
              <li>Develop and maintain high-quality frontend applications</li>
              <li>Collaborate with designers, product managers, and backend engineers</li>
              <li>Write clean, efficient, and maintainable code</li>
              <li>Optimize applications for maximum speed and scalability</li>
              <li>Stay up-to-date with emerging technologies</li>
            </ul>
            
            <h3>Requirements:</h3>
            <ul>
              <li>5+ years of experience in frontend development</li>
              <li>Strong proficiency in React, TypeScript, and modern JavaScript</li>
              <li>Experience with state management (Redux, Context API, etc.)</li>
              <li>Knowledge of modern frontend build tools (Webpack, Vite, etc.)</li>
              <li>Understanding of responsive design and cross-browser compatibility</li>
              <li>Excellent problem-solving and communication skills</li>
            </ul>
            
            <h3>Benefits:</h3>
            <ul>
              <li>Competitive salary and equity</li>
              <li>Health, dental, and vision insurance</li>
              <li>401(k) with company match</li>
              <li>Flexible work hours and remote work options</li>
              <li>Professional development budget</li>
              <li>Generous paid time off</li>
            </ul>
          `,
          skills: ["React", "TypeScript", "JavaScript", "CSS", "HTML", "Redux", "Webpack", "Jest", "GraphQL"],
        };
        
        setJob(mockJob);
      } catch (error) {
        console.error("Error fetching job:", error);
        toast.error("Failed to load job details");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const toggleSaved = () => {
    setSaved(!saved);
    
    if (!saved) {
      toast.success("Job saved to favorites");
    } else {
      toast.success("Job removed from favorites");
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="animate-pulse">
            <div className="h-8 w-3/4 bg-muted rounded mb-4"></div>
            <div className="h-4 w-1/2 bg-muted rounded mb-8"></div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="h-64 bg-muted rounded mb-8"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 w-5/6 bg-muted rounded"></div>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="h-64 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!job) {
    return (
      <Layout>
        <div className="container px-4 py-8 md:px-6 md:py-12 text-center">
          <h1 className="mb-4">Job Not Found</h1>
          <p className="mb-8 text-muted-foreground">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/jobs">
            <Button className="btn-primary">Back to Jobs</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Link to="/jobs" className="text-sm text-jobboard-primary hover:underline">
                  Jobs
                </Link>
                <span className="text-sm text-muted-foreground">/</span>
                <span className="text-sm text-muted-foreground truncate">
                  {job.title}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold">{job.title}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-medium text-lg">{job.company}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">
                  {job.remote ? "Remote" : job.location}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className={saved ? "text-red-500" : ""}
                onClick={toggleSaved}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 mr-2 ${saved ? "fill-current" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {saved ? "Saved" : "Save"}
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-primary">Apply Now</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Apply for {job.title}</DialogTitle>
                    <DialogDescription>
                      Upload your resume to apply for this position at {job.company}.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <ResumeUploadAnalyzer jobId={job.id} jobTitle={job.title} />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="p-6 bg-card border rounded-lg shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Job Type</h3>
                    <p>{job.type}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Salary Range</h3>
                    <p>{job.salary}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Posted</h3>
                    <p>
                      {new Date(job.postedDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                
                <Separator className="mb-6" />
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Job Description</h2>
                  <div 
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  ></div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Skills & Requirements</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="badge-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="btn-primary">Apply for This Job</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Apply for {job.title}</DialogTitle>
                        <DialogDescription>
                          Upload your resume to apply for this position at {job.company}.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <ResumeUploadAnalyzer jobId={job.id} jobTitle={job.title} />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4">
              <div className="p-6 bg-card border rounded-lg shadow-sm mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded bg-gray-100 flex items-center justify-center">
                    <span className="text-2xl font-bold">{job.company.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{job.company}</h3>
                    <Link to={`/company/${job.company}`} className="text-sm text-jobboard-primary hover:underline">
                      View Company Profile
                    </Link>
                  </div>
                </div>
                
                <Separator className="mb-4" />
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{job.remote ? "Remote" : job.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>51-200 employees</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-card border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Similar Jobs</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md hover:bg-muted/50 transition-colors">
                    <h4 className="font-medium truncate">Frontend Developer</h4>
                    <p className="text-sm text-muted-foreground">WebSolutions Inc</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm">$100K - $130K</span>
                      <Link to="/jobs/101" className="text-xs text-jobboard-primary hover:underline">
                        View Job
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 border rounded-md hover:bg-muted/50 transition-colors">
                    <h4 className="font-medium truncate">React Developer</h4>
                    <p className="text-sm text-muted-foreground">AppWorks</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm">$110K - $140K</span>
                      <Link to="/jobs/102" className="text-xs text-jobboard-primary hover:underline">
                        View Job
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 border rounded-md hover:bg-muted/50 transition-colors">
                    <h4 className="font-medium truncate">UI/UX Engineer</h4>
                    <p className="text-sm text-muted-foreground">DesignHub</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm">$90K - $120K</span>
                      <Link to="/jobs/103" className="text-xs text-jobboard-primary hover:underline">
                        View Job
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Link to="/jobs" className="text-sm text-jobboard-primary hover:underline">
                    View all similar jobs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetailsPage;

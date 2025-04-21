import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import JobSearch from "@/components/jobs/JobSearch";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
    window.location.href = `/jobs?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-jobboard-dark py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Find Your Perfect Job Match with AI
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Upload your resume and let our AI analyze how well it matches job requirements.
                  Get personalized feedback to improve your chances of landing your dream job.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/jobs">
                  <Button className="btn-primary">Explore Jobs</Button>
                </Link>
                <Link to="/auth">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-jobboard-dark">
                    Upload Your Resume
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mr-0 lg:ml-auto">
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-jobboard-primary to-jobboard-secondary opacity-60 rounded-lg blur-xl"></div>
                <div className="relative bg-white dark:bg-jobboard-dark p-6 rounded-lg shadow-lg">
                  <div className="space-y-2">
                    <div className="h-2 w-20 rounded-full bg-jobboard-primary"></div>
                    <div className="h-2 w-16 rounded-full bg-jobboard-secondary"></div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-3 w-4/6 rounded bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-jobboard-primary"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-24 rounded bg-gray-200 dark:bg-gray-700"></div>
                      <div className="h-3 w-32 rounded bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="h-3 w-16 rounded bg-gray-200 dark:bg-gray-700"></div>
                      <div className="h-3 w-12 rounded bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    <div className="h-8 w-24 rounded bg-jobboard-primary"></div>
                  </div>
                  <div className="absolute -right-3 -top-3 h-10 w-10 rounded-full bg-jobboard-primary flex items-center justify-center text-white font-bold">
                    <span className="text-xl">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto text-center mb-10">
            <h2 className="mb-4">Search for the Perfect Job</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Browse thousands of job listings and find the perfect match for your skills and experience.
            </p>
          </div>
          <JobSearch onSearch={handleSearch} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto text-center mb-10">
            <h2 className="mb-4">Why Use JobMatch?</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Our platform uses AI technology to help job seekers and employers find the perfect match.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-jobboard-primary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-jobboard-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-medium">AI Resume Analysis</h3>
              <p className="mb-4 text-muted-foreground flex-1">
                Our AI analyzes your resume against job descriptions to provide a match score and personalized feedback.
              </p>
              <Link to="/about" className="text-jobboard-primary hover:underline mt-auto inline-flex items-center">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              </Link>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-jobboard-primary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-jobboard-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-medium">Advanced Job Search</h3>
              <p className="mb-4 text-muted-foreground flex-1">
                Find the perfect job with our advanced search filters, including salary range, location, and job type.
              </p>
              <Link to="/jobs" className="text-jobboard-primary hover:underline mt-auto inline-flex items-center">
                Search jobs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              </Link>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 h-12 w-12 rounded-full bg-jobboard-primary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-jobboard-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-medium">Real-time Updates</h3>
              <p className="mb-4 text-muted-foreground flex-1">
                Receive real-time notifications about application status and new job matches tailored to your profile.
              </p>
              <Link to="/signup" className="text-jobboard-primary hover:underline mt-auto inline-flex items-center">
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-jobboard-dark p-8 md:p-12 shadow-lg">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
                  Ready to Find Your Perfect Job Match?
                </h2>
                <p className="mb-6 text-gray-300">
                  Sign up now to access our full range of features, including AI resume analysis,
                  job matching, and real-time application tracking.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link to="/signup">
                    <Button className="btn-primary">Get Started for Free</Button>
                  </Link>
                  <Link to="/employers">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-jobboard-dark">
                      For Employers
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-full min-h-[200px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-sm mx-auto">
                    <div className="space-y-6">
                      <div className="h-4 w-3/4 rounded bg-white/20 animate-pulse-light"></div>
                      <div className="h-4 w-full rounded bg-white/20 animate-pulse-light"></div>
                      <div className="h-4 w-5/6 rounded bg-white/20 animate-pulse-light"></div>
                      <div className="h-12 w-full rounded bg-jobboard-primary animate-pulse-light"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

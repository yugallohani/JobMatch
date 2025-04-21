
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-jobboard-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4">About JobMatch</h1>
            <p className="text-lg text-gray-300">
              We're on a mission to transform the job search experience by connecting
              job seekers and employers using cutting-edge AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-4">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                JobMatch was founded in 2023 by a team of engineers, HR professionals, and
                data scientists who recognized the inefficiencies in the traditional job 
                application process.
              </p>
              <p className="mb-4 text-muted-foreground">
                We observed that job seekers spent countless hours applying to positions
                they weren't qualified for, while employers waded through hundreds of 
                resumes that didn't meet their requirements.
              </p>
              <p className="text-muted-foreground">
                Our AI-powered platform aims to solve this problem by analyzing resumes
                and job descriptions to provide objective match scores, helping both sides
                find their perfect match more efficiently.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-jobboard-primary/20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-jobboard-primary/20 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Team working together"
                className="relative rounded-lg shadow-xl"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              To create a more efficient and fair job market by leveraging AI to match
              the right people with the right opportunities.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center p-4">
                <div className="mb-4 h-14 w-14 rounded-full bg-jobboard-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-jobboard-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Efficiency</h3>
                <p className="text-center text-muted-foreground">
                  Reduce time spent on mismatched applications and hiring processes.
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="mb-4 h-14 w-14 rounded-full bg-jobboard-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-jobboard-primary"
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
                <h3 className="mb-2 text-xl font-medium">Transparency</h3>
                <p className="text-center text-muted-foreground">
                  Provide clear feedback on match quality and areas for improvement.
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="mb-4 h-14 w-14 rounded-full bg-jobboard-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-jobboard-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Opportunity</h3>
                <p className="text-center text-muted-foreground">
                  Create equal access to opportunities based on skills and qualifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="mb-6 text-center">Our Technology</h2>
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-medium">AI-Powered Resume Analysis</h3>
              <p className="mb-4 text-muted-foreground">
                Our proprietary AI technology analyzes resumes and job descriptions using natural
                language processing to determine the match between a candidate and a position.
              </p>
              <div className="mt-6 rounded-md bg-muted/50 p-4">
                <h4 className="mb-2 font-medium">How it works:</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Upload your resume</li>
                  <li>Our AI extracts key information like skills, experience, and qualifications</li>
                  <li>The system compares your profile against job requirements</li>
                  <li>You receive a match score and personalized feedback</li>
                  <li>Apply with confidence to jobs where you're a strong match</li>
                </ol>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-medium">Smart Job Recommendations</h3>
                <p className="text-muted-foreground">
                  Our platform learns from your profile and preferences to recommend jobs
                  where you're likely to be a strong match, saving you time in your search.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-medium">Skills Gap Analysis</h3>
                <p className="text-muted-foreground">
                  Receive insights about skills you may be missing for your target roles,
                  with suggestions for courses and resources to help you upskill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-jobboard-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Ready to Transform Your Job Search?</h2>
            <p className="mb-6 text-lg text-gray-300">
              Join thousands of job seekers and employers who are already using JobMatch
              to find their perfect match.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="btn-primary">Sign Up for Free</Button>
              </Link>
              <Link to="/jobs">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-jobboard-dark">
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

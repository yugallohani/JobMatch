
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EmployersPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-jobboard-dark py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Find the Right Talent with AI-Powered Matching
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Let our AI analyze applications and match you with candidates who have
                  the right skills and experience for your open positions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/signup">
                  <Button className="btn-primary">Post a Job</Button>
                </Link>
                <Link to="/employers/plans">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-jobboard-dark">
                    View Pricing Plans
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-jobboard-primary/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Employer dashboard"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="mb-2">Why Choose JobMatch for Employers?</h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              Our platform helps you find the perfect candidates faster and more efficiently.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm">
              <div className="mb-4 h-16 w-16 rounded-full bg-jobboard-primary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-jobboard-primary"
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
              <h3 className="mb-2 text-xl font-medium">AI-Powered Candidate Matching</h3>
              <p className="text-muted-foreground">
                Our AI analyzes resumes and ranks candidates based on how well they match your job requirements,
                saving you hours of manual screening.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm">
              <div className="mb-4 h-16 w-16 rounded-full bg-jobboard-primary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-jobboard-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-medium">Quality Over Quantity</h3>
              <p className="text-muted-foreground">
                Focus on candidates who are genuinely qualified for your positions,
                reducing time spent on unsuitable applicants.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm">
              <div className="mb-4 h-16 w-16 rounded-full bg-jobboard-primary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-jobboard-primary"
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
              <h3 className="mb-2 text-xl font-medium">Time and Cost Efficient</h3>
              <p className="text-muted-foreground">
                Reduce your time-to-hire and cost-per-hire with our streamlined
                recruitment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="mb-2">How JobMatch Works for Employers</h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              Our simple and effective process helps you find the right candidates faster.
            </p>
          </div>
          
          <div className="grid gap-8 md:gap-12 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-12 w-12 rounded-full bg-jobboard-primary text-white flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="mb-2 font-medium">Post a Job</h3>
              <p className="text-sm text-muted-foreground">
                Create a detailed job listing with specific requirements and skills needed.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-12 w-12 rounded-full bg-jobboard-primary text-white flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="mb-2 font-medium">Receive Applications</h3>
              <p className="text-sm text-muted-foreground">
                Candidates apply by uploading their resumes and additional information.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-12 w-12 rounded-full bg-jobboard-primary text-white flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="mb-2 font-medium">AI Matches Candidates</h3>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes and ranks candidates based on how well they match your requirements.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-12 w-12 rounded-full bg-jobboard-primary text-white flex items-center justify-center font-bold text-xl">
                4
              </div>
              <h3 className="mb-2 font-medium">Review & Connect</h3>
              <p className="text-sm text-muted-foreground">
                Review the top matches and reach out to candidates directly through our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="mb-2">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              Choose the plan that fits your hiring needs.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <div className="flex flex-col rounded-lg border bg-card shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Starter</h3>
                <p className="text-sm text-muted-foreground mb-4">Perfect for small businesses</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-muted-foreground ml-1">/ month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jobboard-success mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">Post up to 3 jobs</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jobboard-success mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">AI candidate matching</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jobboard-success mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">Basic analytics</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-sm">Premium placement</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-muted mt-auto">
                <Link to="/signup?plan=starter">
                  <Button className="w-full btn-primary">Get Started</Button>
                </Link>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="flex flex-col rounded-lg border-2 border-jobboard-primary bg-card shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0">
                <div className="bg-jobboard-primary text-white px-3 py-1 text-xs font-semibold">
                  POPULAR
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Professional</h3>
                <p className="text-sm text-muted-foreground mb-4">For growing companies</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">$199</span>
                  <span className="text-muted-foreground ml-1">/ month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jobboard-success mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">Post up to 10 jobs</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jobboard-success mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">Advanced AI matching</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jobboard-success mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">Detailed analytics</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jobboard-success mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">Premium placement</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-muted mt-auto">
                <Link to="/signup?plan=pro">
                  <Button className="w-full btn-primary">Choose Plan</Button>
                </Link>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="flex flex-col rounded-lg border bg-card shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
                <p className="text-sm text-muted-foreground mb-4">For large organizations</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jobboard-success mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">Unlimited job postings</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jobboard-success mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">Custom AI algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jobboard-success mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">Advanced reporting</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-jobboard-success mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-muted mt-auto">
                <Link to="/contact?inquiry=enterprise">
                  <Button className="w-full" variant="outline">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="mb-2">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our employer services.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the AI matching technology work?</AccordionTrigger>
                <AccordionContent>
                  Our AI analyzes resumes by extracting key information such as skills, experience,
                  education, and certifications. It then compares this information against your job
                  requirements to calculate a match score. The algorithm considers not just keyword
                  matches, but also semantic similarity, experience relevance, and skill proficiency.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the typical time-to-hire with JobMatch?</AccordionTrigger>
                <AccordionContent>
                  While results vary based on industry and position, our clients typically see a
                  30-50% reduction in time-to-hire compared to traditional recruitment methods.
                  By focusing on pre-qualified candidates, you can streamline your interview process
                  and make offers more quickly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I customize the matching criteria?</AccordionTrigger>
                <AccordionContent>
                  Yes. When posting a job, you can specify which skills and requirements are
                  must-haves versus nice-to-haves. You can also adjust the weighting of different
                  factors to tailor the matching algorithm to your specific needs. Enterprise clients
                  receive additional customization options.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I post a job on JobMatch?</AccordionTrigger>
                <AccordionContent>
                  Once you've created an employer account, simply click "Post a Job" from your
                  dashboard. Fill in the job details, requirements, and company information.
                  Our system will guide you through the process of creating an effective job posting
                  that will yield the best matches.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer any guarantees?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a satisfaction guarantee. If you don't receive qualified candidates
                  within 30 days of posting a job, we'll extend your job posting for free. Enterprise
                  clients receive additional guarantee options based on their specific needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-jobboard-dark p-8 md:p-12 shadow-lg">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
                  Ready to Transform Your Hiring Process?
                </h2>
                <p className="mb-6 text-gray-300">
                  Join thousands of employers who are already using JobMatch to find
                  the perfect candidates faster and more efficiently.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link to="/signup">
                    <Button className="btn-primary">Get Started Today</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-jobboard-dark">
                      Schedule a Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="HR team reviewing applications"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmployersPage;

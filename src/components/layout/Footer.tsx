
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
              <span className="text-jobboard-primary">Job</span>
              <span className="text-jobboard-dark">Match</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Connecting job seekers with employers using AI-powered matching technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-medium">For Job Seekers</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/jobs" className="text-muted-foreground hover:text-jobboard-primary">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/resume-tips" className="text-muted-foreground hover:text-jobboard-primary">
                  Resume Tips
                </Link>
              </li>
              <li>
                <Link to="/career-advice" className="text-muted-foreground hover:text-jobboard-primary">
                  Career Advice
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium">For Employers</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/employers" className="text-muted-foreground hover:text-jobboard-primary">
                  Post Jobs
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-jobboard-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-jobboard-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-jobboard-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-jobboard-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-jobboard-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-jobboard-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JobMatch. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-jobboard-primary">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-jobboard-primary">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-jobboard-primary">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

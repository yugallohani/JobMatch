
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, profile, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    await signOut();
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
            <span className="text-jobboard-primary">Job</span>
            <span className="text-jobboard-dark">Match</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/jobs" className="text-sm font-medium hover:text-jobboard-primary">
              Find Jobs
            </Link>
            <Link to="/employers" className="text-sm font-medium hover:text-jobboard-primary">
              For Employers
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-jobboard-primary">
              About
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {!loading && user ? (
            <>
              {profile && (
                <span className="text-sm font-semibold text-jobboard-primary mr-2">
                  {profile.full_name || profile.email}
                </span>
              )}
              <Button variant="outline" className="rounded-full" onClick={onLogout}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="outline" className="rounded-full">
                  Log In / Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link 
              to="/jobs" 
              className="text-sm font-medium hover:text-jobboard-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Jobs
            </Link>
            <Link 
              to="/employers" 
              className="text-sm font-medium hover:text-jobboard-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              For Employers
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium hover:text-jobboard-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              {!loading && user ? (
                <Button className="w-full" variant="outline" onClick={onLogout}>
                  Log Out
                </Button>
              ) : (
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full btn-primary">Log In / Sign Up</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

type Mode = "login" | "signup";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading } = useAuth();
  const [mode, setMode] = useState<Mode>(() => location.pathname === "/signup" ? "signup" : "login");
  const [form, setForm] = useState({ email: "", password: "", full_name: "" });
  const [submitting, setSubmitting] = useState(false);

  // If already logged in, redirect to home
  useEffect(() => {
    if (!loading && user) {
      navigate("/", { replace: true });
    }
  }, [user, loading, navigate]);

  const switchMode = () => setMode((m) => m === "login" ? "signup" : "login");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password || (mode === "signup" && !form.full_name)) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitting(true);
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email: form.email,
          password: form.password,
        });
        if (error) throw error;
        toast.success("Logged in!");
      } else {
        const { error } = await supabase.auth.signUp({
          email: form.email,
          password: form.password,
          options: {
            data: { full_name: form.full_name },
          },
        });
        if (error) throw error;
        toast.success("Check your email to confirm your account and log in!");
      }
    } catch (err: any) {
      if (err?.message) {
        toast.error(err.message);
      } else {
        toast.error("Authentication failed.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container px-4 py-10">
        <div className="max-w-md mx-auto">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                {mode === "login" ? "Welcome back" : "Create an account"}
              </CardTitle>
              <CardDescription>
                {mode === "login"
                  ? "Log in with your email and password."
                  : "Sign up to access all features."}
              </CardDescription>
            </CardHeader>
            <form onSubmit={onSubmit}>
              <CardContent className="space-y-4">
                {mode === "signup" && (
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Full Name</Label>
                    <Input id="full_name" name="full_name" value={form.full_name} onChange={onChange} placeholder="John Doe" required />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" value={form.password} onChange={onChange} placeholder="••••••••" required />
                </div>
              </CardContent>
              <CardFooter className="flex-col space-y-4">
                <Button type="submit" className="w-full btn-primary" disabled={submitting}>
                  {submitting
                    ? (mode === "login" ? "Logging in..." : "Creating account...")
                    : (mode === "login" ? "Log In" : "Sign Up")}
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {mode === "login" ? (
                      <>
                        Don&apos;t have an account?{" "}
                        <button type="button" className="text-jobboard-primary hover:underline" onClick={switchMode}>
                          Sign up
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{" "}
                        <button type="button" className="text-jobboard-primary hover:underline" onClick={switchMode}>
                          Log in
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
export default AuthPage;

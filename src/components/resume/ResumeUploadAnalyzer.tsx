
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

interface ResumeAnalysisResult {
  score: number;
  feedback: string[];
  matchedSkills: string[];
  missingSkills: string[];
}

interface ResumeUploadAnalyzerProps {
  jobId: string;
  jobTitle: string;
}

const ResumeUploadAnalyzer = ({ jobId, jobTitle }: ResumeUploadAnalyzerProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<ResumeAnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    
    // Check file type
    if (selectedFile.type !== "application/pdf") {
      toast.error("Please upload a PDF file");
      return;
    }
    
    // Check file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      toast.error("File is too large. Maximum size is 5MB");
      return;
    }
    
    setFile(selectedFile);
    setResult(null);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    try {
      setUploading(true);
      
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Resume uploaded successfully!");
      
      // Begin analysis after successful upload
      await analyzeResume();
    } catch (error) {
      toast.error("Error uploading resume. Please try again.");
      console.error("Upload error:", error);
      setUploading(false);
    }
  };

  const analyzeResume = async () => {
    try {
      setAnalyzing(true);
      
      // Simulate API call for analysis
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Mock response
      const mockResult: ResumeAnalysisResult = {
        score: Math.floor(Math.random() * 41) + 60, // Score between 60-100
        feedback: [
          "Your resume shows strong technical skills relevant to this position.",
          "Consider adding more details about your project achievements.",
          "Quantify your achievements with specific metrics where possible."
        ],
        matchedSkills: ["React", "TypeScript", "Responsive Design", "API Integration"],
        missingSkills: ["Node.js", "MongoDB", "AWS", "Docker"]
      };
      
      setResult(mockResult);
      toast.success("Resume analysis complete!");
    } catch (error) {
      toast.error("Error analyzing resume. Please try again.");
      console.error("Analysis error:", error);
    } finally {
      setUploading(false);
      setAnalyzing(false);
    }
  };

  const resetUpload = () => {
    setFile(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Resume Analysis</CardTitle>
        <CardDescription>
          Upload your resume to see how well it matches the requirements for{" "}
          <span className="font-medium text-jobboard-primary">{jobTitle}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!result ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="resume">Upload your resume (PDF only)</Label>
              <Input
                ref={fileInputRef}
                id="resume"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                disabled={uploading || analyzing}
              />
              <p className="text-xs text-muted-foreground">
                Max file size: 5MB
              </p>
            </div>
            
            {file && (
              <div className="rounded-md bg-muted p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
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
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm truncate max-w-[200px]">
                      {file.name}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetUpload}
                    disabled={uploading || analyzing}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            )}
            
            {(uploading || analyzing) && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{analyzing ? "Analyzing..." : "Uploading..."}</span>
                  <span>{analyzing ? "This may take a moment" : "Please wait"}</span>
                </div>
                <Progress value={analyzing ? 70 : 40} className="h-2" />
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Match Score</h3>
                <span
                  className={`text-xl font-bold ${
                    result.score >= 80 ? "text-jobboard-success" : 
                    result.score >= 60 ? "text-jobboard-warning" : 
                    "text-jobboard-error"
                  }`}
                >
                  {result.score}%
                </span>
              </div>
              <Progress
                value={result.score}
                className={`h-2 ${
                  result.score >= 80 ? "bg-jobboard-success" : 
                  result.score >= 60 ? "bg-jobboard-warning" : 
                  "bg-jobboard-error"
                }`}
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-md font-medium mb-2">Feedback</h3>
                <ul className="list-disc list-inside space-y-1">
                  {result.feedback.map((item, index) => (
                    <li key={index} className="text-sm">{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-md font-medium mb-2 text-jobboard-success">Matched Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.matchedSkills.map((skill, index) => (
                      <span key={index} className="badge badge-success">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-md font-medium mb-2 text-jobboard-error">Missing Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.missingSkills.map((skill, index) => (
                      <span key={index} className="badge badge-error">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!result ? (
          <Button
            className="btn-primary w-full"
            onClick={handleUpload}
            disabled={!file || uploading || analyzing}
          >
            {uploading ? "Uploading..." : analyzing ? "Analyzing..." : "Upload & Analyze"}
          </Button>
        ) : (
          <div className="w-full flex gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={resetUpload}
            >
              Upload Another Resume
            </Button>
            <Button className="w-full btn-primary">Apply with This Resume</Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ResumeUploadAnalyzer;

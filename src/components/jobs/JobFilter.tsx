
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface FilterOption {
  id: string;
  label: string;
}

interface JobFilterProps {
  jobTypes: FilterOption[];
  remoteOptions: FilterOption[];
  salaryRanges: FilterOption[];
  experienceLevels: FilterOption[];
  selectedFilters: {
    jobTypes: string[];
    remoteOptions: string[];
    salaryRanges: string[];
    experienceLevels: string[];
  };
  onFilterChange: (
    filterType: "jobTypes" | "remoteOptions" | "salaryRanges" | "experienceLevels",
    filterId: string,
    checked: boolean
  ) => void;
}

const JobFilter = ({
  jobTypes,
  remoteOptions,
  salaryRanges,
  experienceLevels,
  selectedFilters,
  onFilterChange,
}: JobFilterProps) => {
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <h3 className="font-semibold">Filter Jobs</h3>
      <Separator className="my-4" />
      
      <Accordion type="multiple" defaultValue={["job-type", "remote", "salary", "experience"]}>
        <AccordionItem value="job-type">
          <AccordionTrigger className="text-sm font-medium">Job Type</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              {jobTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`job-type-${type.id}`}
                    checked={selectedFilters.jobTypes.includes(type.id)}
                    onCheckedChange={(checked) =>
                      onFilterChange("jobTypes", type.id, checked === true)
                    }
                  />
                  <Label htmlFor={`job-type-${type.id}`} className="text-sm">
                    {type.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="remote">
          <AccordionTrigger className="text-sm font-medium">Remote Options</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              {remoteOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`remote-${option.id}`}
                    checked={selectedFilters.remoteOptions.includes(option.id)}
                    onCheckedChange={(checked) =>
                      onFilterChange("remoteOptions", option.id, checked === true)
                    }
                  />
                  <Label htmlFor={`remote-${option.id}`} className="text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="salary">
          <AccordionTrigger className="text-sm font-medium">Salary Range</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              {salaryRanges.map((range) => (
                <div key={range.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`salary-${range.id}`}
                    checked={selectedFilters.salaryRanges.includes(range.id)}
                    onCheckedChange={(checked) =>
                      onFilterChange("salaryRanges", range.id, checked === true)
                    }
                  />
                  <Label htmlFor={`salary-${range.id}`} className="text-sm">
                    {range.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="experience">
          <AccordionTrigger className="text-sm font-medium">Experience Level</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              {experienceLevels.map((level) => (
                <div key={level.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`experience-${level.id}`}
                    checked={selectedFilters.experienceLevels.includes(level.id)}
                    onCheckedChange={(checked) =>
                      onFilterChange("experienceLevels", level.id, checked === true)
                    }
                  />
                  <Label htmlFor={`experience-${level.id}`} className="text-sm">
                    {level.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default JobFilter;

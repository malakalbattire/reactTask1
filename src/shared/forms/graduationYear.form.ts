import type { GraduationYearModel } from "../models/graduationYear.model";


export const graduationYearsFormFeilds: GraduationYearModel[] = Array.from(
  { length: 10 },
  (_, index) => {
    const year = new Date().getFullYear() - index;

    return {
      value: String(year),
      label: String(year),
    };
  }
);
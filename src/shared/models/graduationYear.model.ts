import type { GraduationYearForm } from "../forms/graduationYear.form";

export const graduationYears: GraduationYearForm[] = Array.from(
  { length: 10 },
  (_, index) => {
    const year = new Date().getFullYear() - index;

    return {
      value: String(year),
      label: String(year),
    };
  }
);
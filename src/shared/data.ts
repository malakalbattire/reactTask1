import type { AcademicLevelModel } from "../models/academic/academic-level.model";
import type { GraduationYearModel } from "../models/academic/graduation-year.model";
import type { MajorModel } from "../models/academic/major.model";

export const majors: MajorModel[] = [
  {
    id: 1,
    slug: "civil-law",
    name: "Civil Law",
    description: null,
    sort_order: 0,
  },
  {
    id: 2,
    slug: "criminal-law",
    name: "Criminal Law",
    description: null,
    sort_order: 0,
  },
  {
    id: 3,
    slug: "commercial-law",
    name: "Commercial Law",
    description: null,
    sort_order: 0,
  },
];

export const academicLevels: AcademicLevelModel[] = [
  {
    value: "bachelor",
    label: "بكالوريوس",
  },
  {
    value: "master",
    label: "ماجستير",
  },
  {
    value: "phd",
    label: "دكتوراه",
  },
];

export const graduationYears: GraduationYearModel[] = Array.from(
  { length: 10 },
  (_, index) => {
    const year = new Date().getFullYear() - index;

    return {
      value: String(year),
      label: String(year),
    };
  }
);
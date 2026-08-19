import { FieldType } from "../interfaces/fieldType.interface";
import type { FormField } from "../interfaces/formField.interface";
import { ValidatorsType } from "../interfaces/validatorsType.interface";

import { academicLevelsFormFeilds } from "./academicLevel.form";
import { graduationYearsFormFeilds } from "./graduationYear.form";
import { majorsFormFeilds } from "./major.form";

export const academicInfoFormFields: FormField[] = [
  {
    id: "fullName",
    type: FieldType.Text,
    label: "Full Name",
    required: true,
    value: "",
    placeholder: "Title here...",

    validators: [
      {
        type: ValidatorsType.Required,
        message: "Full name is required",
      },
    ],
  },

  {
    id: "university",
    type: FieldType.Text,
    label: "University",
    required: true,
    value: "",
    placeholder: "Title here...",

    validators: [
      {
        type: ValidatorsType.Required,
        message: "University is required",
      },
    ],
  },

  {
    id: "major",
    type: FieldType.Select,
    label: "Major / Specialization",
    required: true,
    value: "",
    placeholder: "Select major",

    options: majorsFormFeilds.map((major) => ({
      value: major.slug,
      label: major.name,
    })),

    validators: [
      {
        type: ValidatorsType.Required,
        message: "Please select a major",
      },
    ],
  },

  {
    id: "academicLevel",
    type: FieldType.Select,
    label: "Academic Level",
    required: true,
    value: "",
    placeholder: "Select academic level",
    layout: {
      group: "academic-details",
      colSpan: 2,
    },

    options: academicLevelsFormFeilds.map((level) => ({
      value: level.value,
      label: level.label,
    })),

    validators: [
      {
        type: ValidatorsType.Required,
        message: "Please select an academic level",
      },
    ],
  },

  {
    id: "graduationYear",
    type: FieldType.Select,
    label: "Graduation Year",
    required: true,
    value: "",
    placeholder: "Select graduation year",
    layout: {
      group: "academic-details",
      colSpan: 2,
    },

    options: graduationYearsFormFeilds.map((year) => ({
      value: year.value,
      label: year.label,
    })),

    validators: [
      {
        type: ValidatorsType.Required,
        message: "Please select a graduation year",
      },
    ],
  },

  {
    id: "termsAccepted",
    type: FieldType.Checkbox,
    label: "Terms and Conditions",
    required: true,
      value: false,
    description: "I accept terms and conditions.",
    descriptionLink: {
      label: "View More",
      href: "#",
    },

    validators: [
      {
        type: ValidatorsType.Required,
        message: "You must accept the terms and conditions",
      },
    ],
  },
];

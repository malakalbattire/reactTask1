import { countryCodes } from "../countryCodes";
import { FieldType } from "../interfaces/fieldType.interface";
import type { FormField } from "../interfaces/formField.interface";
import { ValidatorsType } from "../interfaces/validatorsType.interface";

export const accountSetupFormFields: FormField[] = [
  {
    id: "email",
    type: FieldType.Email,
    label: "Email",
    required: true,
    value: "",
    placeholder: "Title here...",

    validators: [
      {
        type: ValidatorsType.Required,
        message: "Email is required",
      },
      {
        type: ValidatorsType.Email,
        message: "Please enter a valid email address",
      },
    ],
  },

{
  id: "phoneCode",
  type: FieldType.Select,
  label: "Phone Number",
  required: true,
  value: "+20",

  options: countryCodes.map((country) => ({
    value: country.value,
    label: country.label,
  })),

  layout: {
    group: "phone",
    colSpan: 1,
    hideLabel: true,
  },

  validators: [
    {
      type: ValidatorsType.Required,
      message: "Country code is required",
    },
  ],
},

{
  id: "phone",
  type: FieldType.Text,
  label: "Phone Number",
  required: true,
  value: "",
  placeholder: "123456",

  layout: {
    group: "phone",
    colSpan: 3,
    hideLabel: true,
  },

  validators: [
    {
      type: ValidatorsType.Required,
      message: "Phone number is required",
    },
  ],
},

  {
    id: "password",
    type: FieldType.Password,
    label: "Password",
    required: true,
    value: "",
    placeholder: "Title here...",

    validators: [
      {
        type: ValidatorsType.Required,
        message: "Password is required",
      },
      {
        type: ValidatorsType.MinLength,
        value: 8,
        message: "Password must be at least 8 characters",
      },
    ],
  },

  {
    id: "confirmPassword",
    type: FieldType.Password,
    label: "Confirm Password",
    required: true,
    value: "",
    placeholder: "Title here...",

    validators: [
      {
        type: ValidatorsType.Required,
        message: "Please confirm your password",
      },
    ],
  },
];
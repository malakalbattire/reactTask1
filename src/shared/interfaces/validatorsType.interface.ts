export enum ValidatorsType {
  Required = "required",
  Email = "email",
  MinLength = "minLength",
  MaxLength = "maxLength",
  Min = "min",
  Max = "max",
  Pattern = "pattern",
}

export interface FieldValidator {
  type: ValidatorsType;
  value?: string | number;
  message?: string;
}
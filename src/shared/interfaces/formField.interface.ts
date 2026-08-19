import type { FieldType } from "./fieldType.interface";
import type { FieldValidator } from "./validatorsType.interface";

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  required?: boolean;
  value?: string | number | boolean;
  placeholder?: string;
  options?: SelectOption[];
  validators?: FieldValidator[];
  disabled?: boolean;
  readonly?: boolean;
  className?: string;
  description?: string;

  layout?: {
    group?: string;
    colSpan?: number;
    hideLabel?: boolean;
  };

  descriptionLink?: {
    label: string;
    href: string;
  };
}

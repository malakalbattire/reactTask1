import type { AcademicInfoModel } from "../../../shared/models/academicInfo.model";
import { academicInfoFormFields } from "../../../shared/forms/academicInfo.form";
import DynamicForm from "../../../shared/components/DynamicForm/DynamicForm";

interface AcademicInfoProps {
  formData: AcademicInfoModel;

  onChange: <K extends keyof AcademicInfoModel>(
    field: K,
    value: AcademicInfoModel[K]
  ) => void;
}

export default function AcademicInfo({
  formData,
  onChange,
}: AcademicInfoProps) {
  return (
    <DynamicForm
      fields={academicInfoFormFields}
      values={formData}
      onChange={(field, value) => {
        onChange(
          field as keyof AcademicInfoModel,
          value as AcademicInfoModel[keyof AcademicInfoModel]
        );
      }}
    />
  );
}
import DynamicForm from "../../../shared/components/DynamicForm/DynamicForm";
import { accountSetupFormFields } from "../../../shared/forms/accountSetup.form";
import type { AccountSetupModel } from "../../../shared/models/accountSetup.model";

interface AccountSetupProps {
  formData: AccountSetupModel;

  onChange: <K extends keyof AccountSetupModel>(
    field: K,
    value: AccountSetupModel[K]
  ) => void;
}

export default function AccountSetup({
  formData,
  onChange,
}: AccountSetupProps) {
  return (
    <DynamicForm
      fields={accountSetupFormFields}
      values={formData}
      onChange={(field, value) => {
        onChange(
          field as keyof AccountSetupModel,
          value as AccountSetupModel[keyof AccountSetupModel]
        );
      }}
    />
  );
}
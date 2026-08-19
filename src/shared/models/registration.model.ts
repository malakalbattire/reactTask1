import type { AcademicInfoModel } from "../../shared/models/academicInfo.model";
import type { AccountInfoModel } from "./accountInfo.model";

export interface RegistrationModel {
  academicInfo: AcademicInfoModel;
  accountInfo: AccountInfoModel;
}
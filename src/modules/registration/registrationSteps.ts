import AcademicInfo from "./components/AcademicInfo";
import AccountSetup from "./components/AccountSetup";


export const registrationSteps = [
  {
    id: 'academic',
    title: 'Academic Info',
    component: AcademicInfo,
  },
  {
    id: 'account',
    title: 'Account Setup',
    component: AccountSetup,
  },
]

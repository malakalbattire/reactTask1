import { academicLevels } from "../../../shared/models/academicLevel.model";
import { graduationYears } from "../../../shared/models/graduationYear.model";
import { majors } from "../../../shared/models/major.model";


export default function AcademicInfo() {
  return (
    <div className="space-y-5">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="mb-2 block text-sm font-semibold text-[#1F2937]"
        >
          Full Name
        </label>

        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Title here..."
          className="h-12 w-full rounded-md bg-[#F0F1F5] px-4 text-sm outline-none transition focus:ring-2 focus:ring-[#D29A21]"
        />
      </div>

      {/* University */}
      <div>
        <label
          htmlFor="university"
          className="mb-2 block text-sm font-semibold text-[#1F2937]"
        >
          University
        </label>

        <input
          id="university"
          name="university"
          type="text"
          placeholder="Title here..."
          className="h-12 w-full rounded-md bg-[#F0F1F5] px-4 text-sm outline-none transition focus:ring-2 focus:ring-[#D29A21]"
        />
      </div>

      {/* Major */}
      <div>
        <label
          htmlFor="major"
          className="mb-2 block text-sm font-semibold text-[#1F2937]"
        >
          Major / Specialization
        </label>

        <select
          id="major"
          name="major"
          defaultValue=""
          className="h-12 w-full appearance-none rounded-md bg-[#F0F1F5] px-4 text-sm outline-none focus:ring-2 focus:ring-[#D29A21]"
        >
          <option value="" disabled>
            Select major
          </option>

          {majors.map((major) => (
            <option key={major.id} value={major.slug}>
              {major.name}
            </option>
          ))}
        </select>
      </div>

      {/* Academic Level + Graduation */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Academic Level */}
        <div>
          <label
            htmlFor="academicLevel"
            className="mb-2 block text-sm font-semibold text-[#1F2937]"
          >
            Academic Level
          </label>

          <select
            id="academicLevel"
            name="academicLevel"
            defaultValue=""
            className="h-12 w-full rounded-md bg-[#F0F1F5] px-4 text-sm outline-none focus:ring-2 focus:ring-[#D29A21]"
          >
            <option value="" disabled>
              Select level
            </option>

            {academicLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>

        {/* Graduation Year */}
        <div>
          <label
            htmlFor="graduationYear"
            className="mb-2 block text-sm font-semibold text-[#1F2937]"
          >
            Graduation Year
          </label>

          <select
            id="graduationYear"
            name="graduationYear"
            defaultValue=""
            className="h-12 w-full rounded-md bg-[#F0F1F5] px-4 text-sm outline-none focus:ring-2 focus:ring-[#D29A21]"
          >
            <option value="" disabled>
              Select year
            </option>

            {graduationYears.map((year) => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Terms */}
      <div className="pt-1">
        <div className="flex items-start gap-2">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#D29A21]"
          />

          <label
            htmlFor="terms"
            className="cursor-pointer text-sm text-[#374151]"
          >
            Terms and Conditions
          </label>
        </div>

        <p className="mt-2 pl-6 text-xs text-[#9CA3AF]">
          I accept terms and conditions.{" "}
          <a
            href="#"
            className="font-semibold text-[#D29A21] hover:underline"
          >
            View More
          </a>
        </p>
      </div>
    </div>
  );
}
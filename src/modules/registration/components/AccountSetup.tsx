
export default function AccountSetup() {
  return (
    <div className="space-y-5">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-[#1F2937]"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Title here..."
          className="h-12 w-full rounded-md bg-[#F0F1F5] px-4 text-sm outline-none transition focus:ring-2 focus:ring-[#D29A21]"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-semibold text-[#1F2937]"
        >
          Phone Number
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+20 123456"
          className="h-12 w-full rounded-md bg-[#F0F1F5] px-4 text-sm outline-none transition focus:ring-2 focus:ring-[#D29A21]"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-semibold text-[#1F2937]"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Title here..."
          className="h-12 w-full rounded-md bg-[#F0F1F5] px-4 text-sm outline-none transition focus:ring-2 focus:ring-[#D29A21]"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-semibold text-[#1F2937]"
        >
          Confirm Password
        </label>

        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Title here..."
          className="h-12 w-full rounded-md bg-[#F0F1F5] px-4 text-sm outline-none transition focus:ring-2 focus:ring-[#D29A21]"
        />
      </div>
    </div>
  )
}
